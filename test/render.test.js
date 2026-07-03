import { describe, expect, it } from "vitest";
import { getReportsByTag, getReportsByType, getTagSummaries, reports } from "../src/app/reports.js";
import { getRoute } from "../src/app/routes.js";
import { tagDefinitions } from "../src/app/tagDefinitions.js";

const reportDataModules = import.meta.glob("../src/app/reportData/*.js", { eager: true, import: "report" });

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
    expect(reports.length).toBeGreaterThanOrEqual(6);
    expect(reports.map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-02");
    expect(reports.map((report) => report.id)).toContain("academic-vc-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-06-30");
    expect(reports.map((report) => report.id)).toContain("japan-healthcare-industry-structural-challenges-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("japan-care-industry-challenges-2026");
    expect(reports[0].title).toBe("テック情勢週次レポート 2026-07-02週");
    for (const report of reports) {
      expect(report.summary).not.toContain("サンプル");
    }
  });

  it("レポート本文を個別データファイルから集約する", () => {
    const reportData = Object.values(reportDataModules);

    expect(reportData).toHaveLength(reports.length);
    expect(reportData.map((report) => report.id).sort()).toEqual(reports.map((report) => report.id).sort());
    expect(reports.map((report) => report.publishedAt)).toEqual([...reports.map((report) => report.publishedAt)].sort().reverse());
  });

  it("週次記事と深掘り記事を分類できる", () => {
    expect(getReportsByType("weekly").map((report) => report.id)).toEqual(
      expect.arrayContaining([
        "tech-landscape-weekly-2026-07-02",
        "academic-vc-weekly-2026-07-01",
        "tech-landscape-weekly-2026-07-01",
        "healthcare-care-weekly-2026-06-30"
      ])
    );
    expect(getReportsByType("deep").map((report) => report.id)).toEqual(
      expect.arrayContaining(["japan-healthcare-industry-structural-challenges-2026-07-01", "japan-care-industry-challenges-2026"])
    );
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療").map((report) => report.id)).toEqual(
      expect.arrayContaining(["healthcare-care-weekly-2026-06-30", "japan-healthcare-industry-structural-challenges-2026-07-01"])
    );
    expect(getReportsByTag("VC").map((report) => report.id)).toContain("academic-vc-weekly-2026-07-01");
    expect(getReportsByTag("市場インテリジェンス").map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-02");
    expect(getReportsByTag("テック情勢").map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-01");
    const medicalTag = getTagSummaries().find((tag) => tag.name === "医療");

    expect(tagDefinitions.map((tag) => tag.name)).toEqual([
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
      "市場インテリジェンス",
      "テック情勢",
      "半導体",
      "セキュリティ",
      "開発者ツール",
      "規制"
    ]);
    expect(medicalTag).toBeDefined();
    expect(medicalTag).toMatchObject({
      description: "医療制度、医療DX、医療機関、医療データに関する情報"
    });
    expect(medicalTag.count).toBe(getReportsByTag("医療").length);
  });

  it("日本の医療業界課題を3つに絞った深掘りレポートを保持する", () => {
    const report = reports.find((item) => item.id === "japan-healthcare-industry-structural-challenges-2026-07-01");

    expect(report).toBeTruthy();
    expect(report.title).toBe("日本の医療業界が直面する3つの構造課題");
    expect(report.articleType).toBe("deep");
    expect(report.topicCards).toHaveLength(3);
    expect(report.topicCards.map((topic) => topic.theme)).toEqual(["人材・地域偏在", "財政持続性", "医療DX・データ連携"]);
    expect(report.topicCards.map((topic) => topic.date)).toEqual(["2025-12-23", "2025-10-10", "2026-06-19"]);
    expect(report.topicCards.every((topic) => topic.date !== report.checkedAt)).toBe(true);
    expect(report.sections.map((section) => section.title)).toEqual(
      expect.arrayContaining(["調査条件", "歴史的背景", "国際比較から見える差分", "深掘り分析"])
    );
    expect(report.sources.length).toBeGreaterThanOrEqual(8);
    expect(report.sources.some((source) => source.title.includes("令和7年版高齢社会白書"))).toBe(true);
    expect(report.sources.some((source) => source.title.includes("Commonwealth Fund"))).toBe(true);
    expect(report.sources.filter((source) => source.title.includes("Commonwealth Fund")).every((source) => source.type === "二次情報")).toBe(true);
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
    expect(report.topicCards.find((topic) => topic.sourceTitle === "厚生労働省 介護保険制度の概要")).toMatchObject({
      dateLabel: "作成月",
      date: "令和7年7月",
      checkedAt: "2026-07-01"
    });
    expect(report.sources.map((source) => source.title)).toContain("厚生労働省 第9期介護保険事業計画に基づく介護職員の必要数について");
    expect(report.sections.some((section) => section.items.some((item) => item.includes("2026年度には約240万人")))).toBe(true);
    expect(report.sections.map((section) => section.title)).toContain("テーマ別の調査結果");
    expect(report.sections.map((section) => section.title)).toContain("3課題を支える補足根拠");
    expect(report.sections.find((section) => section.title === "テーマ別の調査結果").items).toHaveLength(0);
  });

  it("介護業界課題レポートは歴史的背景と国際比較を持つ", () => {
    const report = reports.find((item) => item.id === "japan-care-industry-challenges-2026");

    expect(report.sections.map((section) => section.title)).toContain("課題が生まれた歴史的背景");
    expect(report.sections.map((section) => section.title)).toContain("海外比較から見える論点");
    expect(report.sections.some((section) => section.items.some((item) => item.includes("2000年に介護保険制度が始まった")))).toBe(true);
    expect(report.sections.some((section) => section.items.some((item) => item.includes("ドイツ")))).toBe(true);
    expect(report.sections.some((section) => section.items.some((item) => item.includes("韓国")))).toBe(true);
    expect(report.sources.map((source) => source.title)).toContain("OECD Health at a Glance 2023");
    expect(report.sources.find((source) => source.title === "OECD Health at a Glance 2023")).toMatchObject({
      type: "二次情報"
    });
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
    expect(report.dashboardMetrics.find((metric) => metric.label === "高優先度")).toMatchObject({
      value: "3件"
    });
    expect(report.sources.map((source) => source.url)).toContain("https://productzine.jp/article/detail/4393");
    expect(report.sources.find((source) => source.title.includes("Tom's Hardware"))).toMatchObject({
      publishedAt: "2026-06-29"
    });
    expect(report.sections.some((section) => section.title === "今週検討すべき対応アクション")).toBe(true);
    expect(report.sections.some((section) => section.title === "注目すべき仮説")).toBe(true);
    expect(report.sections.some((section) => section.title === "解くべき課題")).toBe(true);
    expect(report.sections.some((section) => section.title === "取得エラー")).toBe(true);
    expect(report.sections.find((section) => section.title === "今週検討すべき対応アクション").items).toContain(
      "プロダクト責任者: AI機能の権限境界と監査ログを棚卸しする (2026-07-12まで)"
    );
    expect(report.sections.find((section) => section.title === "調査条件").items.join(" ")).toContain("14日以内ではない");
    expect(report.sections.find((section) => section.title === "調査条件").items.join(" ")).toContain(
      "2026-06-24公開のFigma公式発表とQualcomm公式リリース"
    );
    expect(report.sections.find((section) => section.title === "取得エラー").items.join(" ")).toContain(
      "https://techfeed.io/feeds/categories/Startup%20%2F%20Innovation?userId=667a89b3185e12081e95a7b5"
    );
    expect(report.sections.find((section) => section.title === "取得エラー").items.join(" ")).toContain(
      "https://techfeed.io/feeds/categories/Marketing?userId=667a89b3185e12081e95a7b5"
    );
  });
});
