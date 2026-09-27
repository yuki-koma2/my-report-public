import { report } from '../src/app/reportData/healthcare-care-weekly-2026-08-24.js';
it('8月24日週は開催日を締切と誤認させず未調査を分ける',()=>{
 expect(report.dashboardMetrics.find(x=>x.label==='最短期限')).toBeUndefined();
 expect(report.dashboardMetrics.find(x=>x.label==='開催日')?.caption).toContain('定員');
 expect(report.topicCards.at(-1)?.summary).toContain('未調査');
});
