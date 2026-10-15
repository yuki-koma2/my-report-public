import { report } from '../src/app/reportData/tech-landscape-weekly-2026-10-15.js';
import { cleanup, render, screen } from '@testing-library/react';
import { createElement } from 'react';
import { afterEach } from 'vitest';
import App from '../src/app/ui/App.jsx';

afterEach(() => {
  cleanup();
  window.location.hash = '';
});

it('10月15日週は7日間の対象期間、提供段階、外部操作のリスクを明示する', () => {
  expect(report.id).toBe('tech-landscape-weekly-2026-10-15');
  expect(report.dashboardMetrics[0]?.value).toBe('7日');
  expect(report.dashboardMetrics[0]?.caption).toContain('2026-10-08 08:00 JSTから2026-10-15 08:00 JSTまで');
  expect(report.topicCards.find((card) => card.title.includes('Gemini 4 Argon'))?.timing).toBe('11月30日まで確認');
  expect(report.topicCards.find((card) => card.title.includes('意図しない外部操作'))?.sourceType).toBe('一次情報');
  expect(report.sources.find((source) => source.title === 'ProductZine RSS')?.failureType).toBe('HTTP 403: Forbidden');
});

it('10月15日週の詳細ページに判断ポイント、蒸留対策、対応アクションを表示する', () => {
  window.location.hash = '#/reports/tech-landscape-weekly-2026-10-15';
  render(createElement(App));

  expect(screen.getByRole('heading', { name: 'テック情勢週次レポート 2026-10-15週', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: '今週の判断ポイント' })).toBeInTheDocument();
  expect(screen.getAllByText(/蒸留対策/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/ProductZine RSSはHTTP 403/).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: '今週検討すべき対応アクション' })).toBeInTheDocument();
  expect(screen.getByText('AI基盤・調達責任者')).toBeInTheDocument();
  expect(screen.getAllByText('11月30日まで確認').length).toBeGreaterThan(0);
});
