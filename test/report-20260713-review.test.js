import { report } from '../src/app/reportData/healthcare-care-weekly-2026-07-13.js';

it('7月13日週は更新日を公開日と混同せず、参照した出典だけを数える', () => {
  const dashboards = report.sources.filter((source) => source.url.includes('/govdashboard/'));
  expect(dashboards).toHaveLength(2);
  expect(dashboards.every((source) => !source.publishedAt)).toBe(true);
  expect(report.sources.some((source) => source.url.endsWith('newpage_74387.html'))).toBe(false);
  expect(report.dashboardMetrics.find((metric) => metric.label === '一次情報')?.value).toBe(`${report.sources.length}本`);
});
