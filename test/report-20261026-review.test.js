import { report } from "../src/app/reportData/healthcare-care-weekly-2026-10-26.js";
import { cleanup, render, screen } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, expect, it } from "vitest";
import App from "../src/app/ui/App.jsx";

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

it("10月26日週は10テーマ、介護保険部会の論点、提供再開と海外AIの位置付けを保持する", () => {
  const themeSection = report.sections.find((section) => section.title === "テーマ別の調査結果");
  const themeText = themeSection?.items.join("\n") ?? "";

  expect(report.id).toBe("healthcare-care-weekly-2026-10-26");
  expect(report.publishedAt).toBe("2026-10-26");
  expect(report.sources.every((source) => source.checkedAt === "2026-10-26")).toBe(true);
  expect(themeSection?.items).toHaveLength(10);
  expect(themeText).toContain("第137回社会保障審議会介護保険部会");
  expect(themeText).toContain("一部プロダクトの提供再開");
  expect(themeText).toContain("ソウル宣言");
  expect(themeText).toContain("今週確認できた重要な新規情報なし");
  expect(report.topicCards.find((topic) => topic.theme === "競合・企業動向")?.sourceType).toBe("一次情報");
  expect(report.dashboardMetrics.find((metric) => metric.label === "最短日程")?.value).toBe("10/26");
});

it("10月26日週の詳細ページに判断ポイント、空情報、対応アクションを表示する", () => {
  window.location.hash = "#/reports/healthcare-care-weekly-2026-10-26";
  render(createElement(App));

  expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-10-26週", level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
  expect(screen.getAllByText(/一部プロダクトの提供再開/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/重要な新規情報なし/).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: "今週検討すべき対応アクション" })).toBeInTheDocument();
});
