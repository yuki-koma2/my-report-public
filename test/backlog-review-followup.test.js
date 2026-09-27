import { reports } from '../src/app/reports.js';
const get = id => { const r = reports.find(r=>r.id===id); expect(r).toBeDefined(); return r; };
const hc = d=>get('healthcare-care-weekly-2026-'+d);
const tech = d=>get('tech-landscape-weekly-2026-'+d);
it('週次の開始時刻とRSSの確認範囲を一貫して表示する',()=>{
 for(const d of ['07-30','08-06','08-13','08-20','08-27','09-03','09-10','09-17','09-24']) {
  const r=tech(d); expect(JSON.stringify(r)).not.toContain('00:00');
  for(const c of r.topicCards.filter(c=>c.sourceUrl==='https://news.ycombinator.com/rss')) {
   expect(c.dateLabel).toBe('確認日'); expect(c.summary).toContain('確認記録');
   expect(c.summary).not.toContain('公式入口を確認'); expect(c.change).not.toBe('今週確認できた重要な新規情報なし。');
  }
 }
});
it('公開日、更新日、再確認日と対象期間を混同しない',()=>{
 expect(hc('07-13').sources.find(s=>s.title.includes('在宅酸素'))?.publishedAt).toBeUndefined();
 expect(hc('07-20').lead.body).toContain('2026年9月27日');
 expect(hc('07-27').summary).toContain('7月21日');
 expect(hc('08-24').sources.find(s=>s.url.includes('74842'))?.publishedAt).not.toBe('2026-08-21');
 expect(hc('08-24').topicCards.find(c=>c.sourceUrl.includes('74842'))?.dateLabel).toContain('対象期間外');
 const fda=hc('09-07').topicCards.find(c=>c.sourceUrl.includes('fda.gov'));
 expect(fda?.date).toBe('2026-09-27');
});
it('未調査と確認済みの集計を区別する',()=>{
 expect(hc('08-03').summary).toContain('企業動向は未調査');
 expect(hc('08-31').dashboardMetrics.find(m=>m.label==='新規情報なし')?.value).toBe('3領域');
 expect(hc('09-07').dashboardMetrics.find(m=>m.label==='新規情報なし')?.value).toBe('2領域');
 expect(hc('09-14').dashboardMetrics.find(m=>m.label==='未調査')?.value).toBe('3領域');
 expect(hc('09-14').sections.find(s=>s.title==='テーマ別の調査結果')?.items.find(x=>x.startsWith('5.'))).toContain('未調査');
});
it('制度の猶予と市場指標の解釈を限定する',()=>{
 const r=tech('08-13');
 expect(r.topicCards.find(c=>c.title.includes('TSMC'))?.title).not.toContain('AI需要');
 expect(r.lead.body).not.toContain('AI計算需要の強さを示す');
 expect(r.topicCards.find(c=>c.sourceUrl.includes('article-50'))?.timing).toContain('すぐ');
 expect(r.actionCards.find(c=>c.action.includes('透明性表示'))?.due).toBe('すぐ');
 expect(r.topicCards.find(c=>c.title.includes('Atlas'))?.title).toContain('終了予定');
});
it('異なる発表を各出典と日付に分ける',()=>{
 const copilot=tech('09-03').topicCards.find(c=>c.sourceUrl.includes('2026-09-01-copilot'));
 expect(copilot?.date).toBe('2026-09-01');
 const google=tech('09-17').topicCards.find(c=>c.sourceUrl.includes('google-shopping'));
 expect(google?.date).toBe('2026-09-16');
 expect(tech('09-17').topicCards.find(c=>c.sourceUrl.includes('reimagining-advertising'))?.summary).not.toContain('Google');
 expect(hc('08-17').topicCards.some(c=>c.sourceUrl.includes('govdashboard'))).toBe(true);
 expect(hc('08-17').topicCards.some(c=>c.sourceUrl.includes('devices/0048'))).toBe(true);
});
it('担当者と期限を取り違えず、後から追える出典を保持する',()=>{
 const r=hc('09-07');
 expect(r.actionCards.find(c=>c.owner.includes('介護DX'))?.action).not.toContain('データ基盤・政策渉外');
 expect(r.actionCards.find(c=>c.owner.includes('データ基盤'))?.action).not.toContain('介護DXプロダクト');
 const t=tech('09-03');
 expect(t.sources.filter(s=>s.type==='RSS')).toHaveLength(7);
 expect(hc('09-14').sources.find(s=>s.title.includes('第130回'))?.url).toContain('0000212218_00092');
 expect(hc('09-14').sources.find(s=>s.url.includes('001747202'))?.publishedAt).toBe('2026-09-10');
});
