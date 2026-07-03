import { beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_GA_MEASUREMENT_ID, initAnalytics, resetAnalyticsForTest, trackEvent, trackPageView } from "../src/app/analytics.js";

function getScript() {
  return document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${DEFAULT_GA_MEASUREMENT_ID}"]`);
}

beforeEach(() => {
  document.head.innerHTML = "";
  window.dataLayer = undefined;
  window.gtag = undefined;
  resetAnalyticsForTest();
  vi.useRealTimers();
});

describe("analytics", () => {
  it("Google Analytics の script を Measurement ID 付きで初期化する", () => {
    expect(initAnalytics()).toBe(true);

    expect(getScript()).toBeInTheDocument();
    expect(getScript()).toHaveAttribute("async");
    expect(window.dataLayer[0][0]).toBe("js");
    expect(window.dataLayer[1]).toEqual(["config", DEFAULT_GA_MEASUREMENT_ID, { send_page_view: false }]);
  });

  it("Measurement ID が空なら初期化しない", () => {
    expect(initAnalytics("")).toBe(false);

    expect(getScript()).not.toBeInTheDocument();
    expect(window.dataLayer).toBeUndefined();
  });

  it("hash route の page_view を仮想ページとして送信する", () => {
    window.history.replaceState(null, "", "/my-report-public/#/reports/healthcare-care-weekly-2026-06-30");
    initAnalytics();

    expect(trackPageView({ name: "report", id: "healthcare-care-weekly-2026-06-30" })).toBe(true);

    expect(window.dataLayer.at(-1)).toEqual([
      "event",
      "page_view",
      {
        page_title: "レポート: healthcare-care-weekly-2026-06-30",
        page_location: "http://localhost:3000/my-report-public/#/reports/healthcare-care-weekly-2026-06-30",
        page_path: "/my-report-public/#/reports/healthcare-care-weekly-2026-06-30",
        route_name: "report",
        report_id: "healthcare-care-weekly-2026-06-30"
      }
    ]);
  });

  it("同じ page_location の page_view は重複送信しない", () => {
    window.history.replaceState(null, "", "/my-report-public/#/policy");
    initAnalytics();

    expect(trackPageView({ name: "policy" })).toBe(true);
    expect(trackPageView({ name: "policy" })).toBe(false);

    expect(window.dataLayer.filter((entry) => entry[0] === "event" && entry[1] === "page_view")).toHaveLength(1);
  });

  it("任意イベントを送信できる", () => {
    initAnalytics();

    expect(trackEvent("source_click", { report_id: "example-report", source_title: "Example" })).toBe(true);

    expect(window.dataLayer.at(-1)).toEqual([
      "event",
      "source_click",
      {
        report_id: "example-report",
        source_title: "Example"
      }
    ]);
  });
});
