import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { reports } from "../src/app/reports.js";
import App from "../src/app/ui/App.jsx";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  window.location.hash = "";
});

describe("App", () => {
  it("ホームにレポート一覧を表示する", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "AI調査レポート公開ライブラリ", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "このサイトの目的" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "前提と注意" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "不定期の深掘り調査" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "週次で追加される最新情報" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "タグで探す" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "介護" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "エンジニアリング" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "VC" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "スタートアップ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "テック情勢週次レポート 2026-07-02週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Academic VC / スタートアップ投資動向週次レポート 2026-07-01週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "テック情勢週次レポート 2026-07-01週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-06-30週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "日本の医療業界が直面する3つの構造課題" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "日本の介護業界における3つの構造課題" })).toBeInTheDocument();
    expect(screen.getByText(`${reports.length}件の記事を掲載中`)).toBeInTheDocument();
    expect(screen.queryByText(/サンプル/)).not.toBeInTheDocument();
  });

  it("作成方針ページを表示する", () => {
    window.location.hash = "#/policy";

    render(<App />);

    expect(screen.getByRole("heading", { name: "レポート作成方針", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "出典を明示する" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "事実と判断を分ける" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "アクセス解析について" })).toBeInTheDocument();
  });

  it("レポート詳細に公開日、確認日、出典を表示する", () => {
    window.location.hash = "#/reports/healthcare-care-weekly-2026-06-30";

    render(<App />);

    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-06-30週", level: 1 })).toBeInTheDocument();
    expect(screen.getByText("記事種別")).toBeInTheDocument();
    expect(screen.getByText("週次最新情報")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "医療" })).toHaveAttribute("href", "#/tags/%E5%8C%BB%E7%99%82");
    expect(screen.getByRole("link", { name: "介護" })).toHaveAttribute("href", "#/tags/%E4%BB%8B%E8%AD%B7");
    expect(screen.getAllByText("公開日").length).toBeGreaterThan(0);
    expect(screen.getByText("確認日")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "要点ダッシュボード" })).toBeInTheDocument();
    expect(screen.getByText("高優先度")).toBeInTheDocument();
    expect(screen.getAllByText("一次情報").length).toBeGreaterThan(0);
    expect(screen.getByText("関連度 95")).toBeInTheDocument();
    expect(screen.getAllByText("重要度 高").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "調査条件" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "テーマ別の調査結果" })).toBeInTheDocument();
    expect(screen.getByText(/標準型電子カルテ導入版/)).toBeInTheDocument();
    expect(screen.getAllByText(/今週確認できた重要な新規情報なし/).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "引用元・確認した出典" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "厚生労働省 新着情報RSS" })[0]).toHaveAttribute("href", "https://www.mhlw.go.jp/stf/news.rdf");
  });

  it("日本の医療業界課題レポートに3課題、歴史背景、国際比較を表示する", () => {
    window.location.hash = "#/reports/japan-healthcare-industry-structural-challenges-2026-07-01";

    render(<App />);

    expect(screen.getByRole("heading", { name: "日本の医療業界が直面する3つの構造課題", level: 1 })).toBeInTheDocument();
    expect(screen.getByText("深掘り調査")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "歴史的背景" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "国際比較から見える差分" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "人材・地域偏在の二重制約" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "高齢化で強まる財政持続性の圧力" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療DXとデータ連携の遅れ" })).toBeInTheDocument();
    expect(screen.getAllByText(/英国はGPを入口に置き/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/1961年の国民皆保険/).length).toBeGreaterThan(0);
    expect(screen.getAllByText("二次情報").length).toBe(5);
    expect(screen.getByRole("link", { name: "Commonwealth Fund International Health Care System Profiles: Japan" })).toBeInTheDocument();
  });

  it("介護業界課題レポートの3課題を表示する", () => {
    window.location.hash = "#/reports/japan-care-industry-challenges-2026";

    render(<App />);

    expect(screen.getByRole("heading", { name: "日本の介護業界における3つの構造課題", level: 1 })).toBeInTheDocument();
    expect(screen.getByText("深掘り調査")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "介護人材の不足と処遇改善の遅れ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "介護費用と保険料の増加による制度持続性" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "地域差と紙・人手依存の運営による提供体制のひずみ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "3課題を支える補足根拠" })).toBeInTheDocument();
    expect(screen.getByText("作成月")).toBeInTheDocument();
    expect(screen.getByText("令和7年7月")).toBeInTheDocument();
    expect(screen.getByText(/処遇改善は採用・定着の前提条件/)).toBeInTheDocument();
    expect(screen.getByText(/在宅サービス利用者数は97万人から427万人/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "課題が生まれた歴史的背景" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "海外比較から見える論点" })).toBeInTheDocument();
    expect(screen.getAllByText(/ドイツ/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/韓国/).length).toBeGreaterThan(0);
    expect(screen.getByText("公開・更新日")).toBeInTheDocument();
    expect(screen.getByText("未確認")).toBeInTheDocument();
    expect(screen.getAllByText("確認日").length).toBeGreaterThan(1);
    expect(screen.getAllByRole("link", { name: "厚生労働省 第9期介護保険事業計画に基づく介護職員の必要数について" })[0]).toHaveAttribute(
      "href",
      "https://www.mhlw.go.jp/stf/newpage_41379.html"
    );
  });

  it("セクションタイトルが欠けてもレポート詳細を表示できる", () => {
    reports.push({
      id: "missing-section-title-test",
      title: "セクションタイトル欠落テスト",
      category: "テスト",
      articleType: "deep",
      articleTypeLabel: "深掘り調査",
      cadence: "テスト",
      tags: ["医療"],
      summary: "セクションタイトルが欠けてもレンダリングが落ちないことを確認するテスト用レポートです。",
      publishedAt: "2026-07-01",
      checkedAt: "2026-07-01",
      sources: [{ title: "テスト出典", url: "https://example.com" }],
      highlights: ["表示確認"],
      sections: [{ items: ["タイトルなしセクションの本文"] }],
      actionCards: [
        {
          owner: "テスト担当",
          action: "表示確認をする",
          due: "すぐ",
          reason: "title が undefined の section で endsWith を呼ばないことを確認するため。"
        }
      ]
    });
    window.location.hash = "#/reports/missing-section-title-test";

    try {
      expect(() => render(<App />)).not.toThrow();
      expect(screen.getByRole("heading", { name: "セクションタイトル欠落テスト", level: 1 })).toBeInTheDocument();
      expect(screen.getByText("タイトルなしセクションの本文")).toBeInTheDocument();
    } finally {
      reports.pop();
    }
  });

  it("Academic VC週次レポートの詳細に主要トピック、出典、取得エラーを表示する", () => {
    window.location.hash = "#/reports/academic-vc-weekly-2026-07-01";

    render(<App />);

    expect(screen.getByRole("heading", { name: "Academic VC / スタートアップ投資動向週次レポート 2026-07-01週", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "今週の投資判断ポイント" })).toBeInTheDocument();
    expect(screen.getByText("対象期間内候補")).toBeInTheDocument();
    expect(screen.getAllByText("重要度 高").length).toBeGreaterThan(0);
    expect(screen.getByText(/欧州でリピート創業者・deeptech向けの新ファンド形成/)).toBeInTheDocument();
    expect(screen.getByText(/AIインフラとエージェント周辺で大型資金調達/)).toBeInTheDocument();
    expect(screen.getByText(/Academic VC \/ 大学発スタートアップは今週採用すべき新規情報なし/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "取得エラー" })).toBeInTheDocument();
    expect(screen.getByText("VC Adventure")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "https://www.sethlevine.com/feed" })).toHaveAttribute("href", "https://www.sethlevine.com/feed");
    expect(screen.getByRole("heading", { name: "引用元・確認した出典" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Sifted: Tapestry VC launches $80m fund aimed at backing repeat founders" })[0]).toHaveAttribute(
      "href",
      "https://sifted.eu/articles/tapestry-vc-london-office-vc-fund-openai/"
    );
    expect(screen.getByRole("link", { name: "VC News Daily: Tetrix Announces $15M Series A Financing" })).toHaveAttribute(
      "href",
      "https://vcnewsdaily.com/tetrix/venture-capital-funding/rnzmprrjyv"
    );
    expect(screen.getByRole("link", { name: "VC News Daily: Caplight Closes $16M Series A Round" })).toHaveAttribute(
      "href",
      "https://vcnewsdaily.com/caplight/venture-capital-funding/zqjsvjrngc"
    );
    expect(screen.queryByText(/Omen AI/)).not.toBeInTheDocument();
    expect(screen.getAllByText("メディア記事").length).toBeGreaterThan(0);
  });

  it("テック情勢週次レポートの詳細に主要トピック、出典、仮説課題を表示する", () => {
    window.location.hash = "#/reports/tech-landscape-weekly-2026-07-02";

    render(<App />);

    expect(screen.getByRole("heading", { name: "テック情勢週次レポート 2026-07-02週", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
    expect(screen.getByText("短期対応リスク")).toBeInTheDocument();
    expect(screen.getByText(/CloudflareがAIクローラのデフォルトブロックと課金分離/)).toBeInTheDocument();
    expect(screen.getByText(/Together AIの大型調達がオープンモデル向けAIクラウド競争/)).toBeInTheDocument();
    expect(screen.getByText(/GitHub Copilotが初のopen-weight選択モデル/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "注目すべき仮説と解くべき課題" })).toBeInTheDocument();
    expect(screen.getByText(/AIエージェントの実運用コストはモデル単価ではなく/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "今週検討すべき対応アクション" })).toBeInTheDocument();
    expect(screen.getByText("AIプロダクト責任者")).toBeInTheDocument();
    expect(screen.getByText("期限 2026-07-15まで")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "取得エラー" })).toBeInTheDocument();
    expect(screen.getByText("主要確認入口7件はすべて取得可能。取得エラーなし。")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "TechCrunch: Cloudflare's new policy pushes AI companies to pay for publishers' content" })[0]).toHaveAttribute(
      "href",
      "https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/"
    );
    expect(screen.getByRole("link", { name: "Product Hunt: scritty" })).toHaveAttribute("href", "https://www.producthunt.com/products/scritty");
    expect(screen.getAllByRole("link", { name: "GitHub Changelog: Kimi K2.7 Code is generally available in GitHub Copilot" })[0]).toHaveAttribute(
      "href",
      "https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot/"
    );
  });

  it("テック情勢レポート詳細に判断ポイント、仮説、課題、取得エラーを表示する", () => {
    window.location.hash = "#/reports/tech-landscape-weekly-2026-07-01";

    render(<App />);

    expect(screen.getByRole("heading", { name: "テック情勢週次レポート 2026-07-01週", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "テック情勢" })).toHaveAttribute("href", "#/tags/%E3%83%86%E3%83%83%E3%82%AF%E6%83%85%E5%8B%A2");
    expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
    expect(screen.getAllByText(/FigmaがAIエージェント/).length).toBeGreaterThan(0);
    expect(screen.getByText(/関連度 94/)).toBeInTheDocument();
    expect(screen.getByText("3件")).toBeInTheDocument();
    expect(screen.getAllByText("重要度 高").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "今週検討すべき対応アクション" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI機能の権限境界と監査ログを棚卸しする" })).toBeInTheDocument();
    expect(screen.getByText("期限 2026-07-12まで")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "今週見直すべき意思決定" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "注目すべき仮説" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "解くべき課題" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "取得エラー" })).toBeInTheDocument();
    expect(screen.getByText(/2026-06-24公開のFigma公式発表とQualcomm公式リリース/)).toBeInTheDocument();
    expect(screen.getByText(/2026-06-10公開のSAST代替可能性研究/)).toBeInTheDocument();
    expect(screen.getAllByText("二次情報").length).toBeGreaterThan(0);
    expect(screen.getAllByText("研究論文").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Qualcomm to Acquire Modular" })[0]).toHaveAttribute(
      "href",
      "https://www.qualcomm.com/news/releases/2026/06/qualcomm-to-acquire-modular"
    );
    expect(screen.getByRole("link", { name: "Figma年次カンファレンス「Config 2026」で全面刷新を発表" })).toHaveAttribute(
      "href",
      "https://productzine.jp/article/detail/4393"
    );
    expect(screen.getByText(/Forrester Blogs/)).toBeInTheDocument();
    expect(screen.getByText(/Startup%20%2F%20Innovation\?userId=667a89b3185e12081e95a7b5/)).toBeInTheDocument();
    expect(screen.getByText(/Marketing\?userId=667a89b3185e12081e95a7b5/)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Figma Config 2026: New materials, new tools and a more expressive canvas" })[0]).toHaveAttribute(
      "href",
      "https://www.figma.com/blog/config-2026-recap/"
    );
  });

  it("存在しないページでは Not Found を表示する", () => {
    window.location.hash = "#/missing";

    render(<App />);

    expect(screen.getByRole("heading", { name: "ページが見つかりません", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "一覧へ戻る" })).toHaveAttribute("href", "#/");
  });

  it("タグページに該当記事を表示する", () => {
    window.location.hash = "#/tags/エンジニアリング";

    render(<App />);

    expect(screen.getByRole("heading", { name: "#エンジニアリング", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "テック情勢週次レポート 2026-07-02週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "テック情勢週次レポート 2026-07-01週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-06-30週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "日本の医療業界が直面する3つの構造課題" })).toBeInTheDocument();
  });

  it("hashchange に応じて表示を切り替える", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "AI調査レポート公開ライブラリ", level: 1 })).toBeInTheDocument();

    act(() => {
      window.location.hash = "#/policy";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    expect(screen.getByRole("heading", { name: "レポート作成方針", level: 1 })).toBeInTheDocument();
  });
});
