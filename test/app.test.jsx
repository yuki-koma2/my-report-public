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
    expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-06-30週" })).toBeInTheDocument();
    expect(screen.getByText("2件の記事を掲載中")).toBeInTheDocument();
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
    expect(screen.getByText(/標準型電子カルテ導入版/)).toBeInTheDocument();
    expect(screen.getAllByText(/今週確認できた重要な新規情報なし/).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "引用元・確認した一次情報" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "厚生労働省 新着情報RSS" })[0]).toHaveAttribute("href", "https://www.mhlw.go.jp/stf/news.rdf");
  });

  it("介護業界課題レポートの3課題を表示する", () => {
    window.location.hash = "#/reports/japan-care-industry-challenges-2026";

    render(<App />);

    expect(screen.getByRole("heading", { name: "日本の介護業界における3つの構造課題", level: 1 })).toBeInTheDocument();
    expect(screen.getByText("深掘り調査")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "介護人材の不足と処遇改善の遅れ" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "介護費用と保険料の増加による制度持続性" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "地域差と紙・人手依存の運営による提供体制のひずみ" })).toBeInTheDocument();
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
