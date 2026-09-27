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
    expect(reports.length).toBeGreaterThanOrEqual(7);
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-08-24");
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-07-06");
    expect(reports.map((report) => report.id)).toContain("product-tech-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-02");
    expect(reports.map((report) => report.id)).toContain("academic-vc-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("tech-landscape-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("healthcare-care-weekly-2026-06-30");
    expect(reports.map((report) => report.id)).toContain("japan-healthcare-industry-structural-challenges-2026-07-01");
    expect(reports.map((report) => report.id)).toContain("japan-care-industry-challenges-2026");
    expect(reports.find((report) => report.id === "healthcare-care-weekly-2026-07-06")?.title).toBe("医療・介護領域の最新動向調査レポート 2026-07-06週");
    for (const report of reports) {
      expect(report.summary).not.toContain("サンプル");
    }
  });

  it("2026-09-07週の医療・介護レポートは期限と空情報を区別して保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-09-07");

    expect(report).toBeTruthy();
    expect(report?.publishedAt).toBe("2026-09-07");
    expect(report?.sources.every((source) => source.checkedAt === (source.url.includes("/list-artificial-intelligence-enabled-medical-devices") ? "2026-09-27" : "2026-09-07"))).toBe(true);
    expect(report?.sources.find((source) => source.title.includes("リアルワールドデータ活用促進事業"))).toMatchObject({
      type: "一次情報",
      publishedAt: "2026-09-01"
    });
    expect(report?.topicCards.map((topic) => topic.title)).toEqual(expect.arrayContaining([
      "令和9年度介護報酬改定に向け、認知症・LIFE・医療介護連携を議論",
      "リアルワールドデータ活用促進事業の公募は10月2日必着",
      "地域医療介護総合確保基金（医療分）の第1回内示を各都道府県へ通知"
    ]));
    expect(report?.topicCards.find((topic) => topic.theme === "今週確認できた重要な新規情報なし")?.summary).toContain("企業公式発表・IRは未調査");
    expect(report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items).toHaveLength(10);
    expect(report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items.join(" ")).toContain("公募締切: 2026-10-02");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("9/24");
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
        "product-tech-weekly-2026-07-01",
        "tech-landscape-weekly-2026-07-02",
        "healthcare-care-weekly-2026-07-06",
        "healthcare-care-weekly-2026-08-24",
        "academic-vc-weekly-2026-07-01",
        "tech-landscape-weekly-2026-07-01",
        "healthcare-care-weekly-2026-07-01",
        "healthcare-care-weekly-2026-06-30"
      ])
    );
    expect(getReportsByType("deep").map((report) => report.id)).toEqual(
      expect.arrayContaining(["japan-healthcare-industry-structural-challenges-2026-07-01", "japan-care-industry-challenges-2026"])
    );
  });

  it("2026年8月24日週の医療・介護週次レポートに期限と空情報を表示する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-08-24");

    expect(report).toBeDefined();
    expect(report?.checkedAt).toBe("2026-08-24");
    expect(report?.sources.every((source) => source.checkedAt === (source.url.includes("74842") ? "2026-09-27" : "2026-08-24"))).toBe(true);
    expect(report?.topicCards.map((topic) => topic.title)).toEqual(
      expect.arrayContaining([
        expect.stringContaining("7月の医療・介護情報連携"),
        expect.stringContaining("介護給付費分科会"),
        expect.stringContaining("SaMD")
      ])
    );
    expect(report?.dashboardMetrics.find((metric) => metric.label === "開催日")?.value).toBe("9/16");
    expect(report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items).toHaveLength(10);
    expect(report?.sections.some((section) => section.items.some((item) => item.includes("今週確認できた重要な新規情報なし")))).toBe(true);
  });

  it("タグで記事を分類できる", () => {
    expect(getReportsByTag("医療").map((report) => report.id)).toEqual(
      expect.arrayContaining([
        "healthcare-care-weekly-2026-07-06",
        "healthcare-care-weekly-2026-07-01",
        "healthcare-care-weekly-2026-06-30",
        "japan-healthcare-industry-structural-challenges-2026-07-01"
      ])
    );
    expect(getReportsByTag("プロダクト").map((report) => report.id)).toContain("product-tech-weekly-2026-07-01");
    expect(getReportsByTag("マーケティング").map((report) => report.id)).toContain("product-tech-weekly-2026-07-01");
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
      "プロダクト",
      "マーケティング",
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

  it("プロダクト・テック週次レポートの重要項目と取得エラーを保持する", () => {
    const report = reports.find((item) => item.id === "product-tech-weekly-2026-07-01");

    expect(report).toBeTruthy();
    expect(report.articleType).toBe("weekly");
    expect(report.checkedAt).toBe("2026-07-01");
    expect(report.sources.some((source) => source.title.includes("Anthropic"))).toBe(true);
    expect(report.sources.some((source) => source.title.includes("Google Research"))).toBe(true);
    const publickeySource = report.sources.find((source) => source.title.includes("Publickey"));
    expect(publickeySource).toBeDefined();
    expect(publickeySource?.url).toBe("https://www.publickey1.jp/blog/26/pythonmojomodularai.html");
    expect(publickeySource?.type).toBe("二次情報");
    expect(report.sources.find((source) => source.title === "Product Hunt feed")?.type).toBe("配信元フィード");
    expect(report.sources.find((source) => source.title.includes("Anthropic"))?.type).toBe("一次情報");
    expect(report.sources.every((source) => source.checkedAt === "2026-07-01")).toBe(true);
    expect(report.sources.find((source) => source.title.includes("Anthropic"))?.publishedAt).toBe("2026-06-30");
    expect(report.sources.find((source) => source.title.includes("Google Research"))?.publishedAt).toBe("2026-06-30");
    expect(report.sources.find((source) => source.title.includes("Open USD"))?.publishedAt).toBe("2026-06-30");
    expect(report.sources.find((source) => source.title.includes("Figma"))?.publishedAt).toBe("2026-06-25");
    expect(report.sources.find((source) => source.title.includes("Tayori"))?.publishedAt).toBe("2026-06-30");
    expect(report.sources.find((source) => source.title.includes("Lupe"))?.publishedAt).toBe("2026-06-29");
    expect(report.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3件");
    expect(report.topicCards.filter((topic) => topic.priority === "高")).toHaveLength(3);
    expect(report.topicCards.map((topic) => topic.theme)).toEqual(
      expect.arrayContaining(["技術・開発者動向", "マーケティング・市場", "日本語記事・国内向け示唆", "取得エラー"])
    );
    expect(report.topicCards.find((topic) => topic.theme === "日本語記事・国内向け示唆")?.sourceUrl).toBe(
      "https://productzine.jp/article/detail/4402"
    );
    expect(report.topicCards.find((topic) => topic.theme === "見逃し注意")?.sourceUrl).toBe(
      "https://www.publickey1.jp/blog/26/pythonmojomodularai.html"
    );
    expect(JSON.stringify(report.topicCards.find((topic) => topic.theme === "日本語記事・国内向け示唆"))).not.toContain("CTC");
    expect(JSON.stringify(report.topicCards.find((topic) => topic.theme === "日本語記事・国内向け示唆"))).not.toContain("Relic");
    expect(JSON.stringify(report.topicCards.find((topic) => topic.theme === "日本語記事・国内向け示唆"))).not.toContain("PMM");
    expect(report.sections.some((section) => section.items.some((item) => item.includes("Crunch Hype")))).toBe(true);
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

  it("2026-09-14週の医療介護レポートは全テーマ、改定議論、DX方針案と空情報を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-09-14");
    const themeSection = report?.sections.find((section) => section.title === "テーマ別の調査結果");
    const themeText = themeSection?.items.join("\n") ?? "";

    expect(report).toBeDefined();
    expect(report?.publishedAt).toBe("2026-09-14");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "直近開催日")?.value).toBe("9/14");
    expect(report?.topicCards.find((topic) => topic.theme === "医療DX・ヘルスケアAX")?.sourceType).toBe("一次情報");
    expect(report?.topicCards.find((topic) => topic.theme === "介護報酬改定")?.date).toBe("2026-09-10");
    expect(report?.highlights.join("\n")).toContain("未調査");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("5. 補助金・助成金・公募 / 未調査");
    expect(report?.sources.every((source) => source.checkedAt === (source.url.includes("0000212218_00092") ? "2026-09-27" : "2026-09-14"))).toBe(true);
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

  it("最新の医療介護レポートは全テーマ、期限、公募必須項目、出典日付を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-07-01");

    expect(report).toBeDefined();

    const themeSection = report.sections.find((section) => section.title === "テーマ別の調査結果");
    const themeText = themeSection?.items.join("\n") ?? "";

    expect(report.dashboardMetrics.map((metric) => metric.label)).toContain("最短期限");
    expect(report.highlights.join("\n")).toContain("今週確認できた重要な新規情報なし");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("4. 医療DX、介護DX、電子カルテ、標準化");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("一次情報。影響を受ける主体");
    expect(themeText).toContain("https://www.mhlw.go.jp/stf/newpage_74150.html");
    expect(report.topicCards.find((topic) => topic.sourceTitle === "厚生労働省 介護給付費等実態統計月報")).toMatchObject({
      date: "2026-06-24",
      timing: "遡及参照"
    });
    expect(report.topicCards.find((topic) => topic.sourceTitle === "厚生労働省 第135回社会保障審議会介護保険部会")).toMatchObject({
      date: "2026-06-29",
      summary: expect.stringContaining("2026-06-26に地域介護・福祉空間整備等施設整備交付金")
    });
    expect(report.topicCards.find((topic) => topic.sourceTitle === "PMDA 医療機器プログラム（SaMD）の審査ポイント")).toMatchObject({
      date: "2026-07-01",
      dateLabel: "確認日"
    });
    expect(themeText).toContain("公募締切: 2026-07-31必着");
    expect(themeText).toContain("補助率・補助上限額: 公募要領で確認が必要");
    expect(report.sources.map((source) => source.title)).toContain("厚生労働省 抗菌薬等医薬品備蓄体制整備事業 公募");
    expect(report.sources.map((source) => source.title)).toContain("厚生労働省 医療提供体制施設整備交付金の内示");
    expect(report.sources.every((source) => source.checkedAt === "2026-07-01")).toBe(true);
    expect(report.sources.find((source) => source.title === "厚生労働省 抗菌薬等医薬品備蓄体制整備事業 公募")).toMatchObject({
      publishedAt: "2026-06-29",
      checkedAt: "2026-07-01"
    });
  });

  it("2026-08-10週の医療・介護レポートは8テーマの確認範囲と2テーマの未調査を明示する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-08-10");

    expect(report).toBeDefined();
    expect(report?.publishedAt).toBe("2026-08-10");
    expect(report?.checkedAt).toBe("2026-08-10");
    expect(report?.lead.title).toBe("今週の判断ポイント");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "確認テーマ")?.value).toBe("8テーマ");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "対象期間")?.value).toBe("8/4-8/10");
    expect(report?.highlights.join("\n")).toContain("未調査");
    expect(report?.topicCards.find((topic) => topic.theme === "重要な新規情報なし")?.sourceType).toBe("一次情報");
    expect(report?.sources.every((source) => source.checkedAt === "2026-08-10")).toBe(true);

    const themeText = report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items.join("\n") ?? "";
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("5. 補助金・助成金・公募情報");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect((themeText.match(/今週確認できた重要な新規情報なし/g) ?? []).length).toBe(8);
    expect(report?.sections.find((section) => section.title === "調査メモ")?.items.join("\n")).toContain("一次情報未確認");
  });

  it("2026-07-06週の医療介護レポートはPMH、施設整備内示、空情報、二次情報を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-07-06");

    expect(report).toBeDefined();

    const themeSection = report?.sections.find((section) => section.title === "テーマ別の調査結果");
    const themeText = themeSection?.items.join("\n") ?? "";
    const pmhTopic = report?.topicCards.find((topic) => topic.sourceTitle === "デジタル庁 Public Medical Hub");
    const facilityTopic = report?.topicCards.find((topic) =>
      topic.sourceTitle.includes("社会福祉施設等施設整備費補助金")
    );
    const guardianSource = report?.sources.find((source) => source.title.includes("AI scribes"));

    expect(report?.publishedAt).toBe("2026-07-09");
    expect(report?.checkedAt).toBe("2026-07-09");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("7/31");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "一次情報")?.value).toBe("5本");
    expect(report?.highlights.join("\n")).toContain("今週確認できた重要な新規情報なし");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("今週確認できた重要な新規情報なし");
    expect(themeText).toContain("公募締切: 2026-07-31必着");
    expect(themeText).toContain("補助率・補助上限額: 公表ページ本文では確認できず");
    expect(pmhTopic).toMatchObject({
      date: "2026-07-03",
      dateLabel: "更新日",
      priority: "高",
      sourceType: "一次情報"
    });
    expect(report?.sources.find((source) => source.title === "デジタル庁 Public Medical Hub")?.publishedAt).toBeUndefined();
    expect(facilityTopic).toMatchObject({
      date: "2026-07-02",
      timing: "すぐ"
    });
    expect(guardianSource).toMatchObject({
      type: "二次情報",
      publishedAt: "2026-07-05",
      checkedAt: "2026-07-09"
    });
    expect(JSON.stringify(report)).not.toContain("導入済み施設の増加");
    expect(JSON.stringify(report)).not.toContain("導入先が増える");
    expect(report?.sources.every((source) => source.checkedAt === "2026-07-09")).toBe(true);
  });

  it("2026-07-20週の医療介護レポートは二次内示、介護会議、全10テーマと空情報を表示する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-07-20");
    const themeText = report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items.join("\n") ?? "";

    expect(report?.publishedAt).toBe("2026-07-20");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("7/31");
    expect(report?.topicCards.find((topic) => topic.sourceTitle.includes("二次内示"))).toMatchObject({
      date: "2026-07-17",
      priority: "高",
      sourceType: "一次情報"
    });
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("今週確認できた重要な新規情報なし");
    expect(themeText).toContain("公募締切: 2026-07-31必着");
    expect(report?.sources.every((source) => source.checkedAt === "2026-07-20")).toBe(true);
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

  it("2026-07-16週のテック情勢レポートがモデル、開発セキュリティ、規制期限を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-07-16");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("GPT-5.6がマルチエージェント実行をAPIの標準機能へ近づける");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("GitHubがコードスキャン修正をエージェントへ委任できる公開プレビューを開始");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("EUのAI生成物透明性コードは初期署名期限が7月22日に迫る");
    expect(report?.sources.find((source) => source.title.startsWith("OpenAI: GPT-5.6"))).toMatchObject({ type: "一次情報", publishedAt: "2026-07-09", checkedAt: "2026-07-16" });
    expect(report?.sources.find((source) => source.title === "European Commission: Signing the Code of Practice on transparency of AI-generated content")?.type).toBe("対象期間外の規制当局資料");
    expect(report?.sources.find((source) => source.title === "TechCrunch: AI chip maker SambaNova raises $1B at $11B valuation")?.type).toBe("対象期間外のメディア記事");
    expect(report?.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ title: "Hacker News RSS", url: "https://news.ycombinator.com/rss", type: "RSS" }),
      expect.objectContaining({ title: "TechCrunch RSS", url: "https://techcrunch.com/feed/", type: "RSS" })
    ]));
    expect(report?.topicCards.find((topic) => topic.theme === "重要な新規情報なし")).toMatchObject({
      sourceTitle: "Hacker News RSS",
      sourceUrl: "https://news.ycombinator.com/rss"
    });
    expect(report?.actionCards.map((card) => card.action)).toContain("AI半導体企業を導入顧客、稼働率、供給能力、粗利、ソフトウェア互換性で比較する");
    expect(report?.sections.find((section) => section.title === "今週検討すべき対応アクション")?.items).toEqual([]);
    expect(report?.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3テーマ");
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items).toContain("主要確認入口7件はすべて取得可能。取得エラーなし。");
  });

  it("2026-07-30週のテック情勢レポートがエージェント権限、評価環境の安全性、透明性対応を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-07-30");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("OpenAIとHugging Faceの評価環境事案がAIエージェントの境界設計を問う");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("Meta AIが外部アプリ連携と継続タスクを選択市場で展開する");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("MetaがAI生成コンテンツの透明性コードへの署名を表明");
    expect(report?.sources.find((source) => source.title.startsWith("OpenAI: OpenAI and Hugging Face"))).toMatchObject({
      type: "対象期間外の一次情報", publishedAt: "2026-07-21", checkedAt: "2026-07-30"
    });
    expect(report?.sources.find((source) => source.title.startsWith("Meta: Meta is Signing"))).toMatchObject({
      type: "一次情報", publishedAt: "2026-07-28", checkedAt: "2026-07-30"
    });
    expect(report?.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3テーマ");
    expect(report?.actionCards.map((card) => card.action)).toContain("AIエージェントの権限、実行環境、停止手段を高リスク操作から棚卸しする");
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items).toContain("主要確認入口7件はすべて取得可能。取得エラーなし。");
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

  it("2026-08-06週のテック情勢週次レポートが供給網防御とAI透明性義務を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-08-06");

    expect(report).toBeTruthy();
    expect(report?.title).toBe("テック情勢週次レポート 2026-08-06週");
    expect(report?.topicCards.map((topic) => topic.title)).toEqual(
      expect.arrayContaining([
        "GitHub Actionsが疑わしいワークフローを実行前に承認待ちへ移す",
        "DependabotがOpenSSFの悪性パッケージ情報を取り込み対象エコシステムを拡大",
        "EU AI Actの生成AI透明性義務が8月2日に適用開始"
      ])
    );
    expect(report?.sources.find((source) => source.title.startsWith("GitHub Changelog: GitHub Actions holds"))).toMatchObject({
      type: "一次情報",
      publishedAt: "2026-07-28",
      checkedAt: "2026-08-06"
    });
    expect(report?.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3テーマ");
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items.join(" ")).toContain("ProductZine");
    expect(report?.actionCards.map((card) => card.action)).toContain("公開リポジトリのActions承認待ちを担当者が判断できる運用へ更新する");
  });
});

  it("2026-07-13週の医療介護レポートは医療DXダッシュボード、重点支援区域、空情報を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-07-13");

    expect(report).toBeDefined();

    const themeSection = report?.sections.find((section) => section.title === "テーマ別の調査結果");
    const themeText = themeSection?.items.join("\n") ?? "";
    const dashboardTopic = report?.topicCards.find((topic) => topic.sourceTitle === "デジタル庁 医療DXに関するダッシュボード");
    const regionalTopic = report?.topicCards.find((topic) => topic.sourceTitle.includes("地域医療構想"));
    const oxygenTopic = report?.topicCards.find((topic) => topic.sourceTitle.includes("在宅酸素療法"));

    expect(report?.publishedAt).toBe("2026-07-13");
    expect(report?.checkedAt).toBe("2026-07-13");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "直近期限")?.value).toBe("7/14");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "一次情報")?.value).toBe("9本");
    expect(report?.highlights.join("\n")).toContain("今週確認できた重要な新規情報なし");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("4. 医療DX、介護DX、電子カルテ、地域医療連携、標準化");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("公募締切: 随時募集のため今回ページでは固定締切を確認できず");
    expect(themeText).toContain("補助率・補助上限額: 今回ページ本文では確認できず");
    expect(dashboardTopic).toMatchObject({
      date: "2026-07-10",
      dateLabel: "更新日",
      priority: "高",
      sourceType: "一次情報"
    });
    expect(regionalTopic).toMatchObject({
      date: "2026-07-09",
      timing: "すぐ"
    });
    expect(oxygenTopic).toMatchObject({
      date: "2026-07-07",
      dateLabel: "更新日",
      priority: "中"
    });
    expect(report?.sources.find((source) => source.title === "デジタル庁 医療DXに関するダッシュボード")).toMatchObject({
      checkedAt: "2026-07-13"
    });
    expect(report?.sources.every((source) => source.checkedAt === "2026-07-13")).toBe(true);
  });

  it("2026-07-27週の医療介護レポートは介護報酬改定論点、医療介護連携、期限を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-07-27");

    expect(report).toBeDefined();

    const themeSection = report?.sections.find((section) => section.title === "テーマ別の調査結果");
    const themeText = themeSection?.items.join("\n") ?? "";
    const feeTopic = report?.topicCards.find((topic) => topic.sourceTitle.includes("第261回社会保障審議会"));
    const linkageTopic = report?.topicCards.find((topic) => topic.sourceTitle.includes("第11回介護情報利活用"));
    const dhtTopic = report?.topicCards.find((topic) => topic.sourceTitle.includes("Digital Health Technologies"));

    expect(report?.publishedAt).toBe("2026-07-27");
    expect(report?.checkedAt).toBe("2026-07-27");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("8/20");
    expect(report?.highlights.join("\n")).toContain("今週確認できた重要な新規情報なし");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("公募締切: 2026-08-20");
    expect(themeText).toContain("補助率・補助上限額: 公表ページ上は確認できず");
    expect(feeTopic).toMatchObject({ date: "2026-07-23", priority: "高", sourceType: "一次情報" });
    expect(linkageTopic).toMatchObject({ date: "2026-07-23", timing: "すぐ" });
    expect(dhtTopic).toMatchObject({ date: "2026-07-20", timing: "すぐ" });
    expect(report?.sources.every((source) => source.checkedAt === (/newpage_(74599|74842)/.test(source.url) ? "2026-09-27" : "2026-07-27"))).toBe(true);
  });

  it("2026-08-03週の医療介護レポートは統計、無医地区、賃金目安、空情報を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-08-03");
    const themeText = report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items.join("\n") ?? "";

    expect(report).toBeDefined();
    expect(report?.publishedAt).toBe("2026-08-03");
    expect(report?.checkedAt).toBe("2026-08-03");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "主要一次情報")?.value).toBe("3本");
    expect(report?.topicCards.find((topic) => topic.sourceTitle.includes("介護給付費等実態統計月報"))).toMatchObject({
      date: "2026-07-29",
      sourceType: "一次情報",
      priority: "高"
    });
    expect(report?.topicCards.find((topic) => topic.sourceTitle.includes("無医地区"))).toMatchObject({
      date: "2026-07-30",
      sourceType: "一次情報"
    });
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("今週確認できた重要な新規情報なし");
    expect(report?.sources.every((source) => source.checkedAt === "2026-08-03")).toBe(true);
  });

  it("2026-08-13週のテック情勢レポートが移行、透明性適用、半導体指標を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-08-13");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("Atlasの終了予定発表を受け、ブラウザ型エージェントの移行とデータ保全を確認");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("EU AI Actの透明性義務が適用され、実装証跡の確認局面へ移る");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("TSMCの7月全社売上は前年同月比44.7％増");
    expect(report?.sources.find((source) => source.title.startsWith("OpenAI Help Center: Evolving Atlas"))).toMatchObject({ type: "一次情報", checkedAt: "2026-08-13" });
    expect(report?.sources.find((source) => source.title.startsWith("European Commission: Transparency obligations"))?.type).toBe("規制当局資料");
    expect(report?.sources.find((source) => source.title.startsWith("TSMC: 2026 Monthly Revenue"))).toMatchObject({ type: "一次情報", publishedAt: "2026-08-10" });
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items).toContain("ProductZine RSS: https://productzine.jp/rss/new/20/index.xml — HTTP 403: Forbidden");
  });

  it("2026-08-17週の医療介護レポートは公募期限と10テーマの確認結果を表示用に保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-08-17");
    const themeText = report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items.join("\n") ?? "";

    expect(report).toBeDefined();
    expect(report?.publishedAt).toBe("2026-08-17");
    expect(report?.checkedAt).toBe("2026-08-17");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("8/21");
    expect(report?.highlights.join("\n")).toContain("2026年8月21日12時59分");
    expect(report?.topicCards.find((topic) => topic.sourceTitle.includes("日米医学協力計画"))).toMatchObject({
      date: "2026-08-13",
      priority: "高",
      timing: "すぐ",
      sourceType: "一次情報"
    });
    expect(themeText).toContain("1. 医療・介護制度改正: 未調査");
    expect(themeText).toContain("5. 補助金・助成金・公募情報");
    expect(themeText).toContain("公募締切: 2026-08-21 12時59分");
    expect(themeText).toContain("10. 海外の医療・介護DX動向: 未調査");
    expect(report?.sources.every((source) => source.checkedAt === (source.url.includes("amed.go.jp") ? "2026-09-27" : "2026-08-17"))).toBe(true);
  });

  it("2026-08-20週のテック情勢レポートがエージェント導入、AIサイバー評価、規制執行を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-08-20");

    expect(report).toBeTruthy();
    expect(report?.checkedAt).toBe("2026-08-20");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("Amazon QuickがMicrosoft 365内へ接続データとエージェント編集を持ち込む");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("AIサイバー評価で検証環境の封じ込めが独立した安全要件になった");
    expect(report?.sources.find((source) => source.title.startsWith("AWS: Amazon Quick for Microsoft 365"))).toMatchObject({
      type: "一次情報",
      publishedAt: "2026-08-13",
      checkedAt: "2026-08-20"
    });
    expect(report?.sources.find((source) => source.title.startsWith("OpenAI: Third-party cyber evaluations"))?.type).toBe("対象期間外の一次情報");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3テーマ");
    expect(report?.topicCards.filter((topic) => topic.priority === "高")).toHaveLength(3);
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items.join(" ")).toContain("ProductZine");
    expect(report?.sections.find((section) => section.title === "調査条件")?.items.join(" ")).toContain("過去20日");
  });

  it("2026-08-27週のテック情勢レポートが評価環境の境界、推論基盤の検証点、取得エラーを構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-08-27");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("OpenAIが評価環境で起きたHugging Face侵害事案と再発防止策を公表");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("NVIDIAはエージェント推論向けVera Rubinの性能値を公表したが独立検証前");
    expect(report?.sources.find((source) => source.title === "OpenAI: The Hugging Face incident and the road ahead")).toMatchObject({
      type: "一次情報",
      publishedAt: "2026-08-26",
      checkedAt: "2026-08-27"
    });
    expect(report?.sources.find((source) => source.title === "NVIDIA: Up to 30x More Work Per Watt: NVIDIA Vera Rubin NVL72 Sets a New Efficiency Standard for AI Agents")?.type).toBe("一次情報（ベンダー測定）");
    expect(report?.actionCards.map((card) => card.action)).toContain("エージェント評価環境の外向き通信、資格情報、共有ストレージの境界を点検する");
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items.join(" ")).toContain("ProductZine");
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items.join(" ")).toContain("HTTP 403: Forbidden");
  });

  it("2026-08-31週の医療介護レポートは10テーマ、改定検討資料、外国人患者調査を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-08-31");
    const themeSection = report?.sections.find((section) => section.title === "テーマ別の調査結果");
    const themeText = themeSection?.items.join("\n") ?? "";

    expect(report).toBeDefined();
    expect(report?.publishedAt).toBe("2026-08-31");
    expect(report?.lead.title).toBe("今週の判断ポイント");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("10/16");
    expect(report?.highlights.join("\n")).toContain("未調査");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("第263回社会保障審議会介護給付費分科会");
    expect(themeText).toContain("公募締切: 該当なし");
    expect(themeText).toContain("調査票A: 2026-10-16");
    expect(report?.topicCards.find((topic) => topic.sourceTitle.includes("第130回社会保障審議会医療部会"))).toMatchObject({
      date: "2026-08-26",
      sourceType: "一次情報"
    });
    expect(report?.sources.every((source) => source.checkedAt === "2026-08-31")).toBe(true);
  });

  it("2026-09-03週のテック情勢レポートがAstra、Copilot統制、EU移行期限を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-09-03");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("OpenAIはAstraがCriticalサイバー能力の閾値に達したと評価");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("Copilot appとCLIで管理者の文脈除外設定が一般提供");
    expect(report?.topicCards.find((topic) => topic.theme === "セキュリティ/規制/標準化")?.timing).toBe("2026-12-02まで");
    expect(report?.sources.find((source) => source.title.startsWith("OpenAI: Path to Astra"))).toMatchObject({ type: "一次情報", publishedAt: "2026-09-01", checkedAt: "2026-09-03" });
    expect(report?.sources.find((source) => source.title.startsWith("GitHub Changelog: Content exclusions"))?.type).toBe("一次情報");
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items.join(" ")).toContain("ProductZine RSS");
  });

  it("2026-09-10週のテック情勢レポートがAI能力、安全運用、データ基盤を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-09-10");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("GPT-6 Astraの導入は能力評価と安全運用を一体で設計する段階へ進む");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("攻撃者のエージェント活用で侵害から認証情報収集までの時間が短縮している");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("BigQuery GraphのGAがエージェント向け接続コンテキストをデータ基盤へ統合する");
    expect(report?.sources.find((source) => source.title === "OpenAI: GPT-6 Astra: A new generation of intelligence")?.type).toBe("一次情報");
    expect(report?.sources.find((source) => source.title === "Google Threat Intelligence: From Prompting to Autonomy")?.publishedAt).toBe("2026-09-08");
    expect(report?.topicCards.filter((topic) => topic.priority === "高")).toHaveLength(3);
    expect(report?.sections.find((section) => section.title === "注目すべき仮説と解くべき課題")?.items).toContain(
      "仮説: 高性能モデルの導入価値は単発タスクの精度より、許可範囲を守る自律実行と人のレビュー負荷をどこまで両立できるかで決まる。反証には、権限逸脱、差し戻し、監視停止、総費用を同じ業務シナリオで測る必要がある。"
    );
  });

  it("2026-09-17週のテック情勢レポートがエージェント商取引、安全性開示、採用指標を構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-09-17");

    expect(report).toBeTruthy();
    expect(report?.topicCards.map((topic) => topic.title)).toContain("対話型広告がエージェント商取引の新しい接点になる");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("モデルの逸脱行動を継続開示する枠組みが安全運用の比較軸になる");
    expect(report?.topicCards.map((topic) => topic.title)).toContain("AIの利用時間削減は検証・実験工程のボトルネックを解消しない");
    expect(report?.sources.find((source) => source.title === "OpenAI: Our framework for reporting model misalignment")).toMatchObject({
      type: "一次情報", publishedAt: "2026-09-16", checkedAt: "2026-09-17"
    });
    expect(report?.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3テーマ");
    expect(report?.sections.find((section) => section.title === "注目すべき仮説と解くべき課題")?.items).toEqual(expect.arrayContaining([
      expect.stringContaining("検証可能な広告表示、同意、計測"),
      expect.stringContaining("検証・実験工程")
    ]));
    expect(report?.sections.find((section) => section.title === "取得エラー")?.items).toContain("ProductZine RSS: https://productzine.jp/rss/new/20/index.xml — HTTP 403: Forbidden");
  });

  it("2026-09-21週の医療介護レポートは全テーマ、期限、一次情報を保持する", () => {
    const report = reports.find((item) => item.id === "healthcare-care-weekly-2026-09-21");
    const themeText = report?.sections.find((section) => section.title === "テーマ別の調査結果")?.items.join("\n") ?? "";

    expect(report).toBeDefined();
    expect(report?.publishedAt).toBe("2026-09-21");
    expect(report?.checkedAt).toBe("2026-09-21");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "規約施行日")?.value).toBe("10/1");
    expect(report?.highlights.join("\n")).toContain("未調査");
    expect(themeText).toContain("1. 医療・介護制度改正");
    expect(themeText).toContain("10. 海外の医療・介護DX動向");
    expect(themeText).toContain("意見募集期間: 2026-09-18から2027-03-17まで");
    expect(themeText).toContain("規約施行日: 2026-10-01");
    expect(report?.topicCards.find((topic) => topic.sourceTitle.includes("SaMD"))).toMatchObject({
      date: "2026-09-18",
      priority: "高",
      timing: "すぐ"
    });
    expect(report?.sources.every((source) => source.checkedAt === "2026-09-21")).toBe(true);
  });

  it("2026-09-24週のテック情勢レポートが一次情報、仮説、取得エラーを構造化して持つ", () => {
    const report = reports.find((item) => item.id === "tech-landscape-weekly-2026-09-24");

    expect(report).toBeTruthy();
    expect(report?.title).toBe("テック情勢週次レポート 2026-09-24週");
    expect(report?.topicCards.map((topic) => topic.title)).toEqual(expect.arrayContaining([
      "モデル選定は性能比較から安全評価と運用コストの比較へ広がる",
      "AIによる科学的発見は独立検証と再現性の設計を先に要求する",
      "BigQuery data agentをGemini Enterpriseへ登録する公開プレビュー"
    ]));
    expect(report?.sources.find((source) => source.title === "OpenAI: Introducing GPT-6 Sol and Luna")).toMatchObject({
      type: "一次情報", publishedAt: "2026-09-22", checkedAt: "2026-09-24"
    });
    expect(report?.sources.find((source) => source.title === "ProductZine RSS")?.type).toBe("RSS");
    expect(report?.dashboardMetrics.find((metric) => metric.label === "高優先度")?.value).toBe("3テーマ");
    expect(report?.actionCards.map((card) => card.owner)).toContain("AI基盤・調達責任者");
    expect(report?.sections.find((section) => section.title === "注目すべき仮説と解くべき課題")?.items.join(" ")).toContain(
      "ベンダーが公表する性能・コスト・安全評価"
    );
  });
