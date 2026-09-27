import { report } from '../src/app/reportData/healthcare-care-weekly-2026-07-27.js';
it('7月27日週は個別会議資料を参照し、未調査と公開日を正しく扱う', () => {
 expect(report.sources.find(s=>s.title.includes('第261回'))?.url).toMatch(/newpage_/);
 expect(report.sources.find(s=>s.title.includes('第11回'))?.url).toContain('newpage_74842.html');
 expect(report.sources.find(s=>s.url.includes('/govdashboard/'))?.publishedAt).toBeUndefined();
 expect(report.topicCards.at(-1)?.summary).toContain('未調査');
});
