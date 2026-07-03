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
    expect(reports).toHaveLength(4);
    expect(reports.map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-02");
    expect(reports.map((report) => report.id)).toContain("academic-vc-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-06-30");
    expect(reports.map((report) => report.id)).toContain("japan-healthcare-industry-structural-challenges-2026-07-01");
    expect(reports[0].title).toBe("テック情勢週次レポート 2026-07-02週");
    for (const report of reports) {
      expect(report.summary).not.toContain("サンプル");
    }
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly")).toHaveLength(3);
    expect(getReportsByType("deep")).toHaveLength(1);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療")).toHaveLength(2);
    expect(getReportsByTag("介護")).toHaveLength(1);
    expect(getReportsByTag("AI")).toHaveLength(3);
    expect(getReportsByTag("エンジニアリング")).toHaveLength(3);
    expect(getReportsByTag("制度")).toHaveLength(2);
    expect(getReportsByTag("DX")).toHaveLength(2);
    expect(getReportsByTag("国際比較")).toHaveLength(1);
    expect(getReportsByTag("VC")).toHaveLength(1);
    expect(getReportsByTag("スタートアップ")).toHaveLength(2);
    expect(getReportsByTag("資金調達")).toHaveLength(2);
    expect(getReportsByTag("市場インテリジェンス")).toHaveLength(2);
    expect(getTagSummaries().map((tag) => tag.name)).toEqual([
      "医療",
      "介護",
      "AI",
      "エンジニアリング",
      "制度",
      "DX",
      "国際比較",
      "VC",
      "スタートアップ",
      "資金調達",
      "市場インテリジェンス"
    ]);
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

  it("テック情勢週次レポートがAIクローラ、AI基盤、開発者ツール、仮説課題を持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-07-02");

    expect(report.category).toBe("テック情勢");
    expect(report.lead.title).toBe("今週の判断ポイント");
    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("短期対応リスク");
    expect(report.topicCards.map((topic) => topic.title)).toContain("CloudflareがAIクローラのデフォルトブロックと課金分離を打ち出す");
    expect(report.topicCards.map((topic) => topic.title)).toContain("Together AIの大型調達がオープンモデル向けAIクラウド競争を押し上げる");
    expect(report.topicCards.map((topic) => topic.title)).toContain("GitHub Copilotが初のopen-weight選択モデルとしてKimi K2.7 Codeを提供");
    expect(report.topicCards.map((topic) => topic.title)).not.toContain("Googleが年齢確認向けZKPライブラリを公開し、規制対応の実装部品を示す");
    expect(report.topicCards.find((topic) => topic.title === "QualcommのModular買収発表がAIデータセンターのソフトウェア統合競争を示す")).toMatchObject({
      date: "2026-06-24",
      sourceTitle: "Qualcomm Investor Relations: Qualcomm to Acquire Modular",
      sourceType: "一次情報"
    });
    expect(report.sources.map((source) => source.title)).toContain("TechCrunch: Cloudflare's new policy pushes AI companies to pay for publishers' content");
    expect(report.sources.map((source) => source.title)).toContain("GitHub Changelog: Kimi K2.7 Code is generally available in GitHub Copilot");
    expect(report.sources.find((source) => source.title === "Qualcomm Investor Relations: Qualcomm to Acquire Modular")).toMatchObject({
      type: "一次情報",
      publishedAt: "2026-06-24"
    });
    expect(report.sources.map((source) => source.title)).toContain("Product Hunt: scritty");
    expect(report.sources.map((source) => source.title)).toContain("Product Hunt: Macro");
    expect(report.sources.map((source) => source.title)).toContain("Product Hunt: Solaris");
    expect(report.sources.find((source) => source.title === "Google: Now open source: our Zero-Knowledge Proof (ZKP) libraries for age assurance")).toMatchObject({
      type: "対象期間外の参考情報",
      publishedAt: "2025-07-03"
    });
    expect(report.sources.find((source) => source.title === "Forrester: Stripe's New Stablecoin Bet: Open USD")).toMatchObject({
      publishedAt: "2026-06-30"
    });
    expect(report.sections.some((section) => section.title === "注目すべき仮説と解くべき課題")).toBe(true);
    expect(report.sections.some((section) => section.title === "今週検討すべき対応アクション")).toBe(true);
    expect(report.sections.some((section) => section.title === "取得エラー")).toBe(true);
    expect(report.sections.find((section) => section.title === "取得エラー").items).toContain("主要確認入口7件はすべて取得可能。取得エラーなし。");
  });
});
