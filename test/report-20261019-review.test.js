import { report } from "../src/app/reportData/healthcare-care-weekly-2026-10-19.js";
import { cleanup, render, screen } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, expect, it } from "vitest";
import App from "../src/app/ui/App.jsx";

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

it("10月19日週は10テーマ、AMED公募期限、方針と確定要件の区別を保持する", () => {
  const themeSection = report.sections.find((section) => section.title === "テーマ別の調査結果");
  const themeText = themeSection?.items.join("\n") ?? "";

  expect(report.id).toBe("healthcare-care-weekly-2026-10-19");
  expect(report.publishedAt).toBe("2026-10-19");
  expect(report.sources.every((source) => source.checkedAt === "2026-10-19")).toBe(true);
  expect(themeSection?.items).toHaveLength(10);
  expect(themeText).toContain("公募締切: 2026-11-04 12:00");
  expect(themeText).toContain("補助率: 該当なし（研究開発費の上限を示す公募）");
  expect(themeText).toContain("今週確認できた重要な新規情報なし");
  expect(report.topicCards.find((topic) => topic.theme === "補助金・公募")?.sourceType).toBe("一次情報");
  expect(report.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("11/4");
});

it("10月19日週の詳細ページに判断ポイント、AMED公募、空情報の確認範囲を表示する", () => {
  window.location.hash = "#/reports/healthcare-care-weekly-2026-10-19";
  render(createElement(App));

  expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-10-19週", level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
  expect(screen.getAllByText(/ヘルステック・チャレンジ/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/重要な新規情報なし/).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: "今週検討すべき対応アクション" })).toBeInTheDocument();
});
