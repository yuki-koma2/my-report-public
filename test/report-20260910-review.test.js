import { report } from '../src/app/reportData/tech-landscape-weekly-2026-09-10.js';
it('9月10日週のBigQueryは対象期間外と明示する',()=>{
 expect(report.topicCards.find(c=>c.sourceUrl.includes('bigquery-graph'))?.dateLabel).toContain('対象期間外');
 expect(report.sources.find(s=>s.url.includes('bigquery-graph'))?.title).toContain('対象期間外');
 expect(JSON.stringify(report)).not.toContain('14日遡及なし');
});
