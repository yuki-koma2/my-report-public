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
    expect(reports[0].title).toBe("医療・介護領域の最新動向調査レポート 2026-06-30週");
    expect(reports[0].summary).not.toContain("サンプル");
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly")).toHaveLength(1);
    expect(getReportsByType("deep")).toHaveLength(1);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療")).toHaveLength(2);
    expect(getReportsByTag("介護")).toHaveLength(1);
    expect(getReportsByTag("AI")).toHaveLength(1);
    expect(getReportsByTag("エンジニアリング")).toHaveLength(2);
    expect(getReportsByTag("国際比較")).toHaveLength(1);
    expect(getTagSummaries().map((tag) => tag.name)).toEqual(["医療", "介護", "AI", "エンジニアリング", "制度", "DX", "国際比較"]);
  });

  it("日本の医療業界課題を3つに絞った深掘りレポートを保持する", () => {
    const report = reports.find((item) => item.id === "japan-healthcare-industry-structural-challenges-2026-07-01");

    expect(report).toBeTruthy();
    expect(report.title).toBe("日本の医療業界が直面する3つの構造課題");
    expect(report.articleType).toBe("deep");
    expect(report.topicCards).toHaveLength(3);
    expect(report.topicCards.map((topic) => topic.theme)).toEqual(["人材・地域偏在", "財政持続性", "医療DX・データ連携"]);
    expect(report.sections.map((section) => section.title)).toEqual(
      expect.arrayContaining(["調査条件", "歴史的背景", "国際比較から見える差分", "深掘り分析"])
    );
    expect(report.sources.length).toBeGreaterThanOrEqual(8);
    expect(report.sources.some((source) => source.title.includes("令和7年版高齢社会白書"))).toBe(true);
    expect(report.sources.some((source) => source.title.includes("Commonwealth Fund"))).toBe(true);
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
