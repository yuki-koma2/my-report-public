import { report } from '../src/app/reportData/healthcare-care-weekly-2026-07-20.js';
it('7月20日週は未調査の企業・海外を空情報から分離し、4領域を数える', () => {
 const items = report.sections.find(s => s.title === 'テーマ別の調査結果')?.items ?? [];
 expect(items.find(x=>x.startsWith('8.'))).toContain('未調査');
 expect(items.find(x=>x.startsWith('10.'))).toContain('未調査');
 expect(report.dashboardMetrics.find(m=>m.label==='新規情報なし')?.value).toBe('4領域');
 expect(report.sections.find(s=>s.title.endsWith('対応アクション'))?.items).toEqual([]);
});
