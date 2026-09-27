import { report } from '../src/app/reportData/healthcare-care-weekly-2026-09-21.js';
it('9月21日週はPMH施行日と更新日を区別する',()=>{
 expect(report.sources).toHaveLength(8);
 expect(report.sources.find(s=>s.url.endsWith('/public-medical-hub'))?.publishedAt).toBeUndefined();
 expect(report.dashboardMetrics.find(m=>m.label==='規約施行日')?.value).toBe('10/1');
 expect(report.actionCards.find(c=>c.action.startsWith('PMH'))?.due).toContain('内部推奨');
});
