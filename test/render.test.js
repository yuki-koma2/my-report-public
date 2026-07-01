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
    expect(reports).toHaveLength(3);
    expect(reports.map((report) => report.id)).toContain("academic-vc-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-01");
    expect(reports.map((report) => report.title)).toContain("テック情勢週次レポート 2026-07-01週");
    expect(reports[0].title).toBe("Academic VC / スタートアップ投資動向週次レポート 2026-07-01週");
    for (const report of reports) {
      expect(report.summary).not.toContain("サンプル");
    }
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly")).toHaveLength(3);
    expect(getReportsByType("deep")).toHaveLength(0);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療")).toHaveLength(1);
    expect(getReportsByTag("介護")).toHaveLength(1);
    expect(getReportsByTag("AI")).toHaveLength(3);
    expect(getReportsByTag("エンジニアリング")).toHaveLength(2);
    expect(getReportsByTag("VC")).toHaveLength(1);
    expect(getReportsByTag("スタートアップ")).toHaveLength(2);
    expect(getReportsByTag("資金調達")).toHaveLength(1);
    expect(getReportsByTag("市場インテリジェンス")).toHaveLength(1);
    expect(getReportsByTag("テック情勢")).toHaveLength(1);
    expect(getReportsByTag("半導体")).toHaveLength(1);
    expect(getReportsByTag("セキュリティ")).toHaveLength(1);
    expect(getReportsByTag("開発者ツール")).toHaveLength(1);
    expect(getReportsByTag("規制")).toHaveLength(1);
    expect(getTagSummaries().map((tag) => tag.name)).toEqual([
      "医療",
      "介護",
      "AI",
      "エンジニアリング",
      "制度",
      "DX",
      "VC",
      "スタートアップ",
      "資金調達",
      "市場インテリジェンス",
      "テック情勢",
      "半導体",
      "セキュリティ",
      "開発者ツール",
      "規制"
    ]);
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
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-06-30");

    expect(report.lead.title).toBe("今週の判断ポイント");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("高優先度");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("一次情報");
    expect(report.topicCards[0]).toMatchObject({
      priority: "高",
      sourceType: "一次情報"
    });
    expect(report.topicCards[0].relevance).toBeGreaterThanOrEqual(80);
  });

  it("Academic VC週次レポートが投資判断向けの主要トピックと取得エラーを持つ", () => {
    const report = reports.find((item) => item.id === "academic-vc-weekly-2026-07-01");

    expect(report.category).toBe("Academic VC / スタートアップ投資");
    expect(report.lead.title).toBe("今週の投資判断ポイント");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("対象期間内候補");
    expect(report.topicCards.map((topic) => topic.title)).toContain("欧州でリピート創業者・deeptech向けの新ファンド形成が続く");
    expect(report.topicCards.map((topic) => topic.title)).toContain("AIインフラとエージェント周辺で大型資金調達が集中");
    expect(report.topicCards.map((topic) => topic.title)).toContain("Academic VC / 大学発スタートアップは今週採用すべき新規情報なし");
    expect(report.sources.map((source) => source.title)).toContain("Sifted: Tapestry VC launches $80m fund aimed at backing repeat founders");
    expect(report.sources.map((source) => source.title)).toContain("VC News Daily: Tetrix Announces $15M Series A Financing");
    expect(report.sources.map((source) => source.title)).toContain("VC News Daily: Caplight Closes $16M Series A Round");
    expect(JSON.stringify(report.topicCards.find((topic) => topic.theme === "ヘルスケア・ライフサイエンス"))).not.toContain("Omen AI");
    expect(report.sections.some((section) => section.title === "取得エラー")).toBe(true);
  });

  it("テック情勢週次レポートが仮説、課題、取得エラーを構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-07-01");

    expect(report).toBeTruthy();
    expect(report.lead.title).toBe("今週の判断ポイント");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("高優先度");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("一次情報");
    expect(report.topicCards.map((card) => card.theme)).toContain("AI/LLM/エージェント");
    expect(report.topicCards.map((card) => card.theme)).toContain("半導体・AIインフラ");
    expect(report.topicCards.find((card) => card.title.includes("Qualcomm"))).toMatchObject({
      sourceType: "一次情報",
      sourceUrl: "https://www.qualcomm.com/news/releases/2026/06/qualcomm-to-acquire-modular"
    });
    expect(report.sources.find((source) => source.title.includes("Axios"))).toMatchObject({
      sourceType: "二次情報"
    });
    expect(report.sources.map((source) => source.url)).toContain("https://productzine.jp/article/detail/4393");
    expect(report.sections.some((section) => section.title === "今週検討すべき対応アクション")).toBe(true);
    expect(report.sections.some((section) => section.title === "注目すべき仮説")).toBe(true);
    expect(report.sections.some((section) => section.title === "解くべき課題")).toBe(true);
    expect(report.sections.some((section) => section.title === "取得エラー")).toBe(true);
    expect(report.sections.find((section) => section.title === "今週検討すべき対応アクション").items).toContain(
      "プロダクト責任者: AI機能の権限境界と監査ログを棚卸しする (2026-07-12まで)"
    );
    expect(report.sections.find((section) => section.title === "調査条件").items.join(" ")).toContain("14日以内ではない");
  });
});
