import { describe, expect, it } from "vitest";
import { getReportsByTag, getReportsByType, getTagSummaries, reports } from "../src/app/reports.js";
import { getRoute } from "../src/app/routes.js";

describe("routing", () => {
  it("空のハッシュはホームとして扱う", () => {
    expect(getRoute("")).toEqual({ name: "home" });
  });

  it("先頭スラッシュがないハッシュも正規化する", () => {
    expect(getRoute("#policy")).toEqual({ name: "policy" });
  });

  it("レポート詳細の id を取り出す", () => {
    expect(getRoute("#/reports/healthcare-care-weekly-2026-06-30")).toEqual({
      name: "report",
      id: "healthcare-care-weekly-2026-06-30"
    });
  });

  it("未知のパスは notFound として扱う", () => {
    expect(getRoute("#/missing")).toEqual({ name: "notFound" });
  });

  it("タグページのタグ名を取り出す", () => {
    expect(getRoute("#/tags/エンジニアリング")).toEqual({
      name: "tag",
      tag: "エンジニアリング"
    });
  });
});

describe("reports", () => {
  it("実調査に基づく週次レポートを保持する", () => {
    expect(reports).toHaveLength(2);
    expect(reports[0].title).toBe("プロダクト・テック週次レポート 2026-07-01週");
    expect(reports[0].summary).not.toContain("サンプル");
    expect(reports[1].title).toBe("医療・介護領域の最新動向調査レポート 2026-06-30週");
    expect(reports[1].summary).not.toContain("サンプル");
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly")).toHaveLength(2);
    expect(getReportsByType("deep")).toHaveLength(0);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療")).toHaveLength(1);
    expect(getReportsByTag("介護")).toHaveLength(1);
    expect(getReportsByTag("AI")).toHaveLength(2);
    expect(getReportsByTag("エンジニアリング")).toHaveLength(2);
    expect(getReportsByTag("プロダクト")).toHaveLength(1);
    expect(getReportsByTag("マーケティング")).toHaveLength(1);
    expect(getTagSummaries().map((tag) => tag.name)).toEqual([
      "医療",
      "介護",
      "AI",
      "エンジニアリング",
      "制度",
      "DX",
      "プロダクト",
      "スタートアップ",
      "マーケティング"
    ]);
  });

  it("プロダクト・テック週次レポートの重要項目と取得エラーを保持する", () => {
    const report = reports.find((item) => item.id === "product-tech-weekly-2026-07-01");

    expect(report).toBeTruthy();
    expect(report.articleType).toBe("weekly");
    expect(report.checkedAt).toBe("2026-07-01");
    expect(report.sources.some((source) => source.title.includes("Anthropic"))).toBe(true);
    expect(report.sources.some((source) => source.title.includes("Google Research"))).toBe(true);
    expect(report.sources.find((source) => source.title.includes("Publickey"))?.url).toBe(
      "https://www.publickey1.jp/blog/26/pythonmojomodularai.html"
    );
    expect(report.sources.find((source) => source.title === "Product Hunt feed")?.type).toBe("配信元フィード");
    expect(report.sources.find((source) => source.title.includes("Anthropic"))?.type).toBe("一次情報");
    expect(report.topicCards.map((topic) => topic.theme)).toEqual(
      expect.arrayContaining(["技術・開発者動向", "マーケティング・市場", "日本語記事・国内向け示唆", "取得エラー"])
    );
    expect(report.sections.some((section) => section.items.some((item) => item.includes("Crunch Hype")))).toBe(true);
  });

  it("各レポートが詳細表示に必要な最低限の情報を持つ", () => {
    for (const report of reports) {
      expect(report.id).toBeTruthy();
      expect(report.title).toBeTruthy();
      expect(["weekly", "deep"]).toContain(report.articleType);
      expect(report.articleTypeLabel).toBeTruthy();
      expect(report.cadence).toBeTruthy();
      expect(report.tags.length).toBeGreaterThan(0);
      expect(report.summary).toBeTruthy();
      expect(report.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(report.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(report.sources.length).toBeGreaterThan(0);
      expect(report.highlights.length).toBeGreaterThan(0);
      expect(report.sections.length).toBeGreaterThan(0);
      expect(report.dashboardMetrics.length).toBeGreaterThan(0);
      expect(report.topicCards.length).toBeGreaterThan(0);
      expect(report.actionCards.length).toBeGreaterThan(0);
    }
  });

  it("記事ページをリッチに表示するための構造化データを持つ", () => {
    const [report] = reports;

    expect(report.lead.title).toBe("今週の判断ポイント");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("高優先度");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("一次情報");
    expect(report.topicCards[0]).toMatchObject({
      priority: "高",
      sourceType: "一次情報"
    });
    expect(report.topicCards[0].relevance).toBeGreaterThanOrEqual(80);
  });
});
