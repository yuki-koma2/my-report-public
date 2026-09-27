import { report } from '../src/app/reportData/tech-landscape-weekly-2026-08-27.js';
it('8月27日週のフィード種別と取得記録を追跡できる',()=>{
 expect(report.sources.find(s=>s.title==='ProductZine RSS')?.type).toBe('RSS');
 expect(report.sources).toHaveLength(11);
 expect(JSON.stringify(report)).not.toContain('index.xml）:');
 expect(report.dashboardMetrics[0]?.caption).not.toContain('00:00');
});
