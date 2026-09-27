import { report } from '../src/app/reportData/healthcare-care-weekly-2026-08-31.js';
it('8月31日週は件数・締切・アクションを表示データに反映する',()=>{
 expect(report.dashboardMetrics.find(m=>m.label==='高優先度')?.value).toBe(report.topicCards.filter(c=>c.priority==='高').length+'件');
 expect(report.dashboardMetrics.find(m=>m.label==='最短期限')?.value).toBe('10/16');
 expect(report.sources.find(s=>s.url.includes('govdashboard'))?.publishedAt).toBeUndefined();
 expect(report.actionCards[0]?.action).toContain('必要情報を集める');
 expect(report.sections.find(s=>s.title==='今週検討すべき対応アクション')?.items).toHaveLength(0);
});
