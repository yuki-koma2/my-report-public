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

  it("介護業界課題レポートの id を取り出す", () => {
    expect(getRoute("#/reports/japan-care-industry-challenges-2026")).toEqual({
      name: "report",
      id: "japan-care-industry-challenges-2026"
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
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-06-30");
    expect(reports.map((report) => report.id)).toContain("japan-care-industry-challenges-2026");
    for (const report of reports) {
      expect(report.summary).not.toContain("サンプル");
    }
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly")).toHaveLength(2);
    expect(getReportsByType("deep")).toHaveLength(1);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療")).toHaveLength(1);
    expect(getReportsByTag("介護")).toHaveLength(2);
    expect(getReportsByTag("AI")).toHaveLength(2);
    expect(getReportsByTag("エンジニアリング")).toHaveLength(1);
    expect(getReportsByTag("VC")).toHaveLength(1);
    expect(getReportsByTag("スタートアップ")).toHaveLength(1);
    expect(getReportsByTag("資金調達")).toHaveLength(1);
    expect(getTagSummaries().map((tag) => tag.name)).toEqual(["医療", "介護", "AI", "エンジニアリング", "制度", "DX", "VC", "スタートアップ", "資金調達", "市場インテリジェンス"]);
  });

  it("介護業界課題レポートは3つの課題と一次情報を持つ", () => {
    const report = reports.find((item) => item.id === "japan-care-industry-challenges-2026");

    expect(report).toMatchObject({
      title: "日本の介護業界における3つの構造課題",
      articleType: "deep",
      checkedAt: "2026-07-01"
    });
    expect(report.topicCards.map((topic) => topic.title)).toEqual([
      "介護人材の不足と処遇改善の遅れ",
      "介護費用と保険料の増加による制度持続性",
      "地域差と紙・人手依存の運営による提供体制のひずみ"
    ]);
    expect(report.sources.map((source) => source.title)).toContain("厚生労働省 第9期介護保険事業計画に基づく介護職員の必要数について");
    expect(report.sections.some((section) => section.items.some((item) => item.includes("2026年度には約240万人")))).toBe(true);
  });

  it("介護業界課題レポートは歴史的背景と国際比較を持つ", () => {
    const report = reports.find((item) => item.id === "japan-care-industry-challenges-2026");

    expect(report.sections.map((section) => section.title)).toContain("課題が生まれた歴史的背景");
    expect(report.sections.map((section) => section.title)).toContain("海外比較から見える論点");
    expect(report.sections.some((section) => section.items.some((item) => item.includes("2000年に介護保険制度が始まった")))).toBe(true);
    expect(report.sections.some((section) => section.items.some((item) => item.includes("ドイツ")))).toBe(true);
    expect(report.sections.some((section) => section.items.some((item) => item.includes("韓国")))).toBe(true);
    expect(report.sources.map((source) => source.title)).toContain("OECD Health at a Glance 2023");
  });

  it("公開日が未確認のトピックでは確認日と出典日付を分ける", () => {
    const report = reports.find((item) => item.id === "japan-care-industry-challenges-2026");
    const topic = report.topicCards.find((item) => item.sourceTitle === "厚生労働省 介護DXの推進");

    expect(topic).toMatchObject({
      dateLabel: "公開・更新日",
      date: "未確認",
      checkedAt: "2026-07-01"
    });
    expect(topic.date).not.toBe(report.checkedAt);
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
});
