export const DEFAULT_GA_MEASUREMENT_ID = "G-95VGGHF660";

let initializedMeasurementId = null;
let lastPageLocation = null;

function getConfiguredMeasurementId() {
  return import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_GA_MEASUREMENT_ID;
}

function isLocalhost(hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

function canUseBrowserAnalytics() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function canSendAnalytics(options = {}) {
  if (!canUseBrowserAnalytics()) {
    return false;
  }

  if (options.allowLocalhost) {
    return true;
  }

  return !isLocalhost(window.location.hostname);
}

function ensureGoogleTagScript(measurementId) {
  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  if (document.querySelector(`script[src="${scriptSrc}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.setAttribute("async", "");
  script.src = scriptSrc;
  document.head.appendChild(script);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
}

export function initAnalytics(measurementId = getConfiguredMeasurementId(), options = {}) {
  if (!measurementId || !canSendAnalytics(options)) {
    return false;
  }

  ensureGoogleTagScript(measurementId);
  ensureGtag();

  if (initializedMeasurementId !== measurementId) {
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
    initializedMeasurementId = measurementId;
  }

  return true;
}

export function trackPageView(route, options = {}) {
  if (!route || !initAnalytics(options.measurementId, options)) {
    return false;
  }

  const location = options.location || window.location;
  const pageLocation = location.href;

  if (pageLocation === lastPageLocation) {
    return false;
  }

  lastPageLocation = pageLocation;
  window.gtag("event", "page_view", getPageViewPayload(route, location));
  return true;
}

export function trackEvent(name, params = {}, options = {}) {
  if (!name || !initAnalytics(options.measurementId, options)) {
    return false;
  }

  window.gtag("event", name, params);
  return true;
}

export function getPageViewPayload(route, location = window.location) {
  const payload = {
    page_title: getPageTitle(route),
    page_location: location.href,
    page_path: `${location.pathname}${location.search}${location.hash}`,
    route_name: route?.name ?? "unknown"
  };

  if (route?.id) {
    payload.report_id = route.id;
  }

  if (route?.tag) {
    payload.tag = route.tag;
  }

  return payload;
}

function getPageTitle(route) {
  if (!route) {
    return "ページが見つかりません";
  }

  if (route.name === "home") {
    return "レポート一覧";
  }
  if (route.name === "policy") {
    return "レポート作成方針";
  }
  if (route.name === "report") {
    return `レポート: ${route.id}`;
  }
  if (route.name === "tag") {
    return `タグ: ${route.tag}`;
  }
  return "ページが見つかりません";
}

export function resetAnalyticsForTest() {
  initializedMeasurementId = null;
  lastPageLocation = null;
}
