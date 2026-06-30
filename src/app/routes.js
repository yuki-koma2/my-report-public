export function getRoute(hash) {
  const route = hash.replace(/^#/, "") || "/";
  const normalized = route.startsWith("/") ? route : `/${route}`;

  if (normalized === "/" || normalized === "/policy") {
    return { name: normalized === "/" ? "home" : "policy" };
  }

  const reportMatch = normalized.match(/^\/reports\/([^/]+)$/);
  if (reportMatch) {
    return { name: "report", id: decodeURIComponent(reportMatch[1]) };
  }

  return { name: "notFound" };
}
