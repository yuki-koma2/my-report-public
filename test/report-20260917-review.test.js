import { report } from '../src/app/reportData/tech-landscape-weekly-2026-09-17.js';
it('9月17日週はGoogleとOpenAIの発表を分けてタグを揃える',()=>{
 expect(report.tags).toContain('規制');
 expect(report.sources.find(s=>s.title==='ProductZine RSS')?.type).toBe('RSS');
 expect(report.topicCards.find(c=>c.sourceUrl.includes('how-to-connect-ai-usage'))?.date).toBe('2026-09-16');
 expect(report.topicCards.find(c=>c.date==='2026-09-15')?.summary).not.toContain('OpenAI');
});
