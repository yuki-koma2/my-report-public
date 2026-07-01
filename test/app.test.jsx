import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
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
    expect(screen.getByRole("heading", { name: "Academic VC / スタートアップ投資動向週次レポート 2026-07-01週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-07-01週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-06-30週" })).toBeInTheDocument();
    expect(screen.getByText("3件の記事を掲載中")).toBeInTheDocument();
    expect(screen.queryByText(/サンプル/)).not.toBeInTheDocument();
  });

  it("作成方針ページを表示する", () => {
    window.location.hash = "#/policy";

    render(<App />);

    expect(screen.getByRole("heading", { name: "レポート作成方針", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "出典を明示する" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "事実と判断を分ける" })).toBeInTheDocument();
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
    expect(screen.getAllByText(/標準型電子カルテ導入版/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/今週確認できた重要な新規情報なし/).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "引用元・確認した出典" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "厚生労働省 新着情報RSS" })[0]).toHaveAttribute("href", "https://www.mhlw.go.jp/stf/news.rdf");
  });

  it("最新の医療介護週次レポートに判断ポイント、期限、空情報を表示する", () => {
    window.location.hash = "#/reports/healthcare-care-weekly-2026-07-01";

    render(<App />);

    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-07-01週", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
    expect(screen.getByText("7/31")).toBeInTheDocument();
    expect(screen.getAllByText(/抗菌薬等医薬品備蓄体制整備事業の2次公募/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/今週確認できた重要な新規情報なし/).length).toBeGreaterThan(0);
    expect(screen.getByText(/10. 海外の医療・介護DX動向/)).toBeInTheDocument();
    expect(screen.getByText(/介護給付費等実態統計は2026-06-24/)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "厚生労働省 抗菌薬等医薬品備蓄体制整備事業 公募" })[0]).toHaveAttribute(
      "href",
      "https://www.mhlw.go.jp/stf/newpage_74146.html"
    );
    expect(screen.getByRole("link", { name: "厚生労働省 医療提供体制施設整備交付金の内示" })).toHaveAttribute(
      "href",
      "https://www.mhlw.go.jp/stf/newpage_74150.html"
    );
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
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-07-01週" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-06-30週" })).toBeInTheDocument();
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
