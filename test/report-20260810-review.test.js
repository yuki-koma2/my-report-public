import { report } from '../src/app/reportData/healthcare-care-weekly-2026-08-10.js';
it('8月10日週は調査時刻と未調査を区別する',()=>{
 expect(report.dashboardMetrics.find(x=>x.label==='確認テーマ')?.value).toBe('8テーマ');
 expect(report.topicCards[1]?.sourceType).toBe('一次情報');
 expect(JSON.stringify(report)).not.toContain('30日以内');
 expect(report.sections.find(x=>x.title==='調査条件')?.items[0]).toContain('08:00');
});
