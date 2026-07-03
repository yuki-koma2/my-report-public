import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { reports } from "../src/app/reports.js";

const trackEvent = vi.fn();

vi.mock("../src/app/analytics.js", () => ({
  trackEvent,
  trackPageView: vi.fn()
}));

const { default: App } = await import("../src/app/ui/App.jsx");

afterEach(() => {
  cleanup();
  reports.pop();
  vi.clearAllMocks();
});

beforeEach(() => {
  window.location.hash = "";
  reports.push({
    id: "analytics-source-click-test",
    title: "出典クリック計測テスト",
    category: "テスト",
    articleType: "deep",
    articleTypeLabel: "深掘り調査",
    cadence: "テスト",
    tags: ["医療"],
    summary: "出典クリックの report_id を確認するテスト用レポートです。",
    publishedAt: "2026-07-03",
    checkedAt: "2026-07-03",
    sources: [{ title: "一覧の出典", url: "https://example.com/source", type: "一次情報" }],
    highlights: ["表示確認"],
    topicCards: [
      {
        theme: "テスト",
        priority: "高",
        relevance: 90,
        timing: "すぐ",
        title: "トピックカード出典",
        summary: "トピックカード内の出典クリックを確認します。",
        relatedTags: ["医療"],
        date: "2026-07-03",
        sourceType: "一次情報",
        affected: ["読者"],
        sourceTitle: "トピックの出典",
        sourceUrl: "https://example.com/topic",
        change: "変化",
        importance: "重要性",
        implication: "示唆",
        uncertainty: "不確実性"
      }
    ],
    sections: [
      {
        title: "テーマ別の調査結果",
        items: ["トピックカードを表示します。"]
      },
      {
        title: "本文リンク",
        items: ["本文URL: https://example.com/body-source"]
      }
    ],
    actionCards: []
  });
});

describe("source click analytics", () => {
  it("出典一覧、トピックカード、本文URLのクリックに実際の report_id を付ける", () => {
    window.location.hash = "#/reports/analytics-source-click-test";

    render(<App />);

    fireEvent.click(screen.getByRole("link", { name: "一覧の出典" }));
    fireEvent.click(screen.getByRole("link", { name: "トピックの出典" }));
    fireEvent.click(screen.getByRole("link", { name: "https://example.com/body-source" }));

    expect(trackEvent).toHaveBeenNthCalledWith(1, "source_click", {
      report_id: "analytics-source-click-test",
      source_title: "一覧の出典",
      source_domain: "example.com"
    });
    expect(trackEvent).toHaveBeenNthCalledWith(2, "source_click", {
      report_id: "analytics-source-click-test",
      source_title: "トピックの出典",
      source_domain: "example.com"
    });
    expect(trackEvent).toHaveBeenNthCalledWith(3, "source_click", {
      report_id: "analytics-source-click-test",
      source_title: "https://example.com/body-source",
      source_domain: "example.com"
    });
  });
});
