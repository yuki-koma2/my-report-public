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
    expect(reports).toHaveLength(1);
    expect(reports[0].title).toBe("医療・介護領域の最新動向調査レポート 2026-06-30週");
    expect(reports[0].summary).not.toContain("サンプル");
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly")).toHaveLength(1);
    expect(getReportsByType("deep")).toHaveLength(0);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療")).toHaveLength(1);
    expect(getReportsByTag("介護")).toHaveLength(1);
    expect(getReportsByTag("AI")).toHaveLength(1);
    expect(getReportsByTag("エンジニアリング")).toHaveLength(1);
    expect(getTagSummaries().map((tag) => tag.name)).toEqual(["医療", "介護", "AI", "エンジニアリング", "制度", "DX"]);
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
    }
  });
});
