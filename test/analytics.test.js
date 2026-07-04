import { beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_GA_MEASUREMENT_ID, getPageViewPayload, initAnalytics, resetAnalyticsForTest, trackEvent, trackPageView } from "../src/app/analytics.js";

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
    expect(initAnalytics(DEFAULT_GA_MEASUREMENT_ID, { allowLocalhost: true })).toBe(true);

    expect(getScript()).toBeInTheDocument();
    expect(getScript()).toHaveAttribute("async");
    expect(Array.from(window.dataLayer[0])[0]).toBe("js");
    expect(Array.from(window.dataLayer[1])).toEqual(["config", DEFAULT_GA_MEASUREMENT_ID, { send_page_view: false }]);
  });

  it("Measurement ID が空なら初期化しない", () => {
    expect(initAnalytics("")).toBe(false);

    expect(getScript()).not.toBeInTheDocument();
    expect(window.dataLayer).toBeUndefined();
  });

  it("localhost では明示的に許可しない限り初期化しない", () => {
    window.history.replaceState(null, "", "/my-report-public/#/");

    expect(initAnalytics(DEFAULT_GA_MEASUREMENT_ID)).toBe(false);

    expect(getScript()).not.toBeInTheDocument();
    expect(window.dataLayer).toBeUndefined();
  });

  it("hash route の page_view を仮想ページとして送信する", () => {
    window.history.replaceState(null, "", "/my-report-public/#/reports/healthcare-care-weekly-2026-06-30");

    expect(trackPageView({ name: "report", id: "healthcare-care-weekly-2026-06-30" }, { allowLocalhost: true })).toBe(true);

    expect(Array.from(window.dataLayer.at(-1))).toEqual([
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

    expect(trackPageView({ name: "policy" }, { allowLocalhost: true })).toBe(true);
    expect(trackPageView({ name: "policy" }, { allowLocalhost: true })).toBe(false);

    expect(window.dataLayer.filter((entry) => Array.from(entry)[0] === "event" && Array.from(entry)[1] === "page_view")).toHaveLength(1);
  });

  it("route が null なら page_view を送信しない", () => {
    expect(trackPageView(null, { allowLocalhost: true })).toBe(false);

    expect(window.dataLayer).toBeUndefined();
  });

  it("route がない場合も安全な page_view payload を生成する", () => {
    window.history.replaceState(null, "", "/my-report-public/#/missing");

    expect(getPageViewPayload(null)).toMatchObject({
      page_title: "ページが見つかりません",
      route_name: "unknown"
    });
  });

  it("任意イベントを送信できる", () => {
    expect(trackEvent("source_click", { report_id: "example-report", source_title: "Example" }, { allowLocalhost: true })).toBe(true);

    expect(Array.from(window.dataLayer.at(-1))).toEqual([
      "event",
      "source_click",
      {
        report_id: "example-report",
        source_title: "Example"
      }
    ]);
  });
});
