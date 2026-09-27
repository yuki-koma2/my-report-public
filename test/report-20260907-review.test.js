import { report } from '../src/app/reportData/healthcare-care-weekly-2026-09-07.js';
it('9月7日週は個別FDA出典と未調査を追跡できる',()=>{
 expect(report.sources.some(s=>s.url.includes('/list-artificial-intelligence-enabled-medical-devices'))).toBe(true);
 expect(report.sources.find(s=>s.url==='https://www.mhlw.go.jp/stf/new-info/')?.checkedAt).toBe('2026-09-07');
 expect(report.sections.find(s=>s.title==='テーマ別の調査結果')?.items.find(x=>x.startsWith('8.'))).toContain('未調査');
 expect(report.sections.find(s=>s.title==='今週検討すべき対応アクション')?.items).toHaveLength(0);
});
