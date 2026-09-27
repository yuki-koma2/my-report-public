import { report } from '../src/app/reportData/tech-landscape-weekly-2026-09-24.js';
it('9月24日週は製品別出典と日付・期間を正しく区別する',()=>{
 expect(report.topicCards.at(-1)?.dateLabel).toBe('確認日');
 expect(report.sources.find(s=>s.title==='ProductZine RSS')?.type).toBe('RSS');
 expect(report.topicCards.find(c=>c.sourceUrl.includes('/bigquery/'))?.date).toBe('2026-09-22');
 expect(report.topicCards.find(c=>c.sourceUrl.includes('/apigee/'))?.date).toBe('2026-09-14');
 expect(report.dashboardMetrics[0]?.caption).not.toContain('00:00');
});
