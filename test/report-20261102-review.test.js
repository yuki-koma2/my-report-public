import { report } from "../src/app/reportData/healthcare-care-weekly-2026-11-02.js";
import { cleanup, render, screen } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, expect, it } from "vitest";
import App from "../src/app/ui/App.jsx";

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

it("11月2日週は10テーマ、内示、公募、海外AIの根拠を保持する", () => {
  const themeSection = report.sections.find((section) => section.title === "テーマ別の調査結果");
  const themeText = themeSection?.items.join("\n") ?? "";

  expect(report.id).toBe("healthcare-care-weekly-2026-11-02");
  expect(report.publishedAt).toBe("2026-11-02");
  expect(report.sources.every((source) => source.checkedAt === "2026-11-02")).toBe(true);
  expect(themeSection?.items).toHaveLength(10);
  expect(themeText).toContain("地域介護・福祉空間整備等施設整備交付金");
  expect(themeText).toContain("ヘルステック・チャレンジ");
  expect(themeText).toContain("WHO欧州地域のAI医療ロードマップ");
  expect(themeText).toContain("今週確認できた重要な新規情報なし");
  expect(report.dashboardMetrics.find((metric) => metric.label === "最短期限")?.value).toBe("11/4 正午");
  expect(report.topicCards.find((topic) => topic.theme === "補助金・公募")?.sourceType).toBe("一次情報");
});

it("11月2日週の詳細ページに判断ポイント、公募期限、空情報を表示する", () => {
  window.location.hash = "#/reports/healthcare-care-weekly-2026-11-02";
  render(createElement(App));

  expect(screen.getByRole("heading", { name: "医療・介護領域の最新動向調査レポート 2026-11-02週", level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "今週の判断ポイント" })).toBeInTheDocument();
  expect(screen.getByText("11/4 正午")).toBeInTheDocument();
  expect(screen.getAllByText(/ヘルステック・チャレンジ/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/今週確認できた重要な新規情報なし/).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { name: "今週検討すべき対応アクション" })).toBeInTheDocument();
});
