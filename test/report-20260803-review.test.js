import { report } from '../src/app/reportData/healthcare-care-weekly-2026-08-03.js';
it('8月3日週の調査範囲と出典を追跡できる',()=>{
 expect(report.sources).toHaveLength(8);
 expect(report.sections.find(s=>s.title==='テーマ別の調査結果')?.items.find(x=>x.startsWith('8.'))).toContain('未調査');
 expect(report.topicCards.at(-1)?.summary).toContain('8月1日');
});
