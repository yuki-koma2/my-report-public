import { report } from "../src/app/reportData/healthcare-care-weekly-2026-11-16.js";
import { cleanup, render, screen } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, expect, it } from "vitest";
import App from "../src/app/ui/App.jsx";

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

it("11月16日週は10テーマと直近の公募期限を記録する", () => {
  const themeSection = report.sections.find((section) => section.title === "テーマ別の調査結果");
  const themeText = themeSection?.items.join("\n") ?? "";

  expect(report.id).toBe("healthcare-care-weekly-2026-11-16");
  expect(report.publishedAt).toBe("2026-11-16");
  expect(report.sources.every((source) => source.checkedAt === "2026-11-16")).toBe(true);
  expect(themeSection?.items).toHaveLength(10);
  expect(themeText).toContain("第275回社会保障審議会介護給付費分科会");
  expect(themeText).toContain("医療DXに関するダッシュボード");
  expect(themeText).toContain("次世代医療実現バイオバンク利活用プログラム");
  expect(themeText).toContain("今週確認できた重要な新規情報なし");
  expect(report.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("11/18");
  expect(report.topicCards.find((topic) => topic.theme === "海外動向")?.sourceType).toBe("一次情報");
});

it("11月16日週の詳細ページに判断ポイント、出典、対応アクションを表示する", () => {
  window.location.hash = "#/reports/healthcare-care-weekly-2026-11-16";
  render(createElement(App));

  expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-11-16週", level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
  expect(screen.getAllByText(/11月18日.*正午/).length).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: /AMED.*バイオバンク/ }).length).toBeGreaterThan(0);
  expect(screen.getByText(/記録、連携、教育の業務負荷を可視化/)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "今週検討すべき対応アクション" })).toBeInTheDocument();
});
