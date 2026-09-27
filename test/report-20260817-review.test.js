import { report } from '../src/app/reportData/healthcare-care-weekly-2026-08-17.js';
it('8月17日週は未調査とFAQ更新日を区別する',()=>{
 expect(report.sources.find(s=>s.url.includes('amed.go.jp'))?.publishedAt).toBe('2026-06-01');
 expect(report.topicCards[0]?.dateLabel).toBe('更新日');
 expect(report.sections.find(s=>s.title==='テーマ別の調査結果')?.items.filter(x=>x.includes('未調査'))).toHaveLength(7);
 expect(report.dashboardMetrics[0]?.value).toBe('3テーマ');
});
