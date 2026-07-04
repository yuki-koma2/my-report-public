import { tagDefinitions } from "./tagDefinitions.js";

const reportModules = import.meta.glob("./reportData/*.js", { eager: true, import: "report" });

export const reports = Object.values(reportModules).sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.id.localeCompare(a.id)
);

export { tagDefinitions };

export function findReportById(id) {
  return reports.find((report) => report.id === id) ?? null;
}

export function getReportsByType(articleType) {
  return reports.filter((report) => report.articleType === articleType);
}

export function getReportsByTag(tag) {
  return reports.filter((report) => report.tags.includes(tag));
}

export function getTagSummaries() {
  return tagDefinitions.map((tag) => ({
    ...tag,
    count: getReportsByTag(tag.name).length
  }));
}
