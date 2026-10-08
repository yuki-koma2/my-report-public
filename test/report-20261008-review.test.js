import { report } from '../src/app/reportData/tech-landscape-weekly-2026-10-08.js';
import { cleanup, render, screen } from '@testing-library/react';
import { createElement } from 'react';
import { afterEach } from 'vitest';
import App from '../src/app/ui/App.jsx';

afterEach(() => {
  cleanup();
  window.location.hash = '';
});

it('10月8日週は14日間の対象期間、限定展開、安全性評価を明示する', () => {
  expect(report.id).toBe('tech-landscape-weekly-2026-10-08');
  expect(report.dashboardMetrics[0]?.value).toBe('14日');
  expect(report.dashboardMetrics[0]?.caption).toContain('2026-09-24 08:00 JSTから2026-10-08 08:00 JSTまで');
  expect(report.topicCards.find((card) => card.title.includes('Gemini 4 Argon'))?.timing).toBe('継続ウォッチ');
  expect(report.topicCards.find((card) => card.title.includes('GPT-6'))?.sourceUrl).toContain('gpt-6-for-everyone');
  expect(report.sources.find((source) => source.title === 'ProductZine RSS')?.failureType).toBe('HTTP 403: Forbidden');
});

it('10月8日週の詳細ページに判断ポイント、限定展開、取得エラーを表示する', () => {
  window.location.hash = '#/reports/tech-landscape-weekly-2026-10-08';
  render(createElement(App));

  expect(screen.getByRole('heading', { name: 'テック情勢週次レポート 2026-10-08週', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '今週の判断ポイント' })).toBeInTheDocument();
  expect(screen.getAllByText(/Gemini 4 Argon/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/ProductZine RSSはHTTP 403/).length).toBeGreaterThan(0);
  expect(screen.getAllByText('一次情報').length).toBeGreaterThan(0);
});
