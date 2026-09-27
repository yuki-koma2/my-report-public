import { report } from '../src/app/reportData/healthcare-care-weekly-2026-09-14.js';
it('9月14日週は実数と根拠に合わせて集計する',()=>{
 expect(report.dashboardMetrics.find(m=>m.label==='高優先度')?.value).toBe('2件');
 expect(report.sources).toHaveLength(9);
 expect(report.topicCards.at(-1)?.sourceUrl).toContain('amed.go.jp');
 expect(report.topicCards.at(-1)?.summary).toContain('未調査');
});
