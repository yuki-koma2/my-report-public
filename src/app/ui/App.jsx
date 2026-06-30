import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { findReportById, reports } from "../reports.js";
import { getRoute } from "../routes.js";

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return useMemo(() => getRoute(hash), [hash]);
}

export default function App() {
  const route = useHashRoute();

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Header />
      <main id="main-content" className="mx-auto min-h-[calc(100vh-152px)] w-[min(1080px,calc(100%-40px))] py-10 outline-none md:py-14">
        {route.name === "home" && <HomePage />}
        {route.name === "policy" && <PolicyPage />}
        {route.name === "report" && <ReportPage id={route.id} />}
        {route.name === "notFound" && <NotFoundPage />}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex min-h-[72px] w-[min(1080px,calc(100%-40px))] flex-col justify-center gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
        <a className="text-base font-bold no-underline" href="#/">
          Public Report Library
        </a>
        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-teal-800" aria-label="主要ナビゲーション">
          <a className="underline decoration-2 underline-offset-4" href="#/">
            レポート一覧
          </a>
          <a className="underline decoration-2 underline-offset-4" href="#/policy">
            作成方針
          </a>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <PageHeading
        eyebrow="Public source reports"
        title="公開情報から確認できるレポート"
        description="出典、確認日、判断根拠を明示し、読者が検証しやすい形で公開するためのサンプルページです。"
      />

      <section className="pt-4">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-bold leading-tight">最新レポート</h2>
          <p className="text-sm text-slate-600">{reports.length}件のサンプルを掲載中</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {reports.map((report, index) => (
            <ReportCard key={report.id} report={report} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function ReportCard({ report, index }) {
  return (
    <motion.article
      className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.28 }}
    >
      <div className="mb-4 flex justify-between gap-3 text-sm text-slate-500">
        <span>{report.category}</span>
        <time dateTime={report.publishedAt}>{report.publishedAt}</time>
      </div>
      <h3 className="mb-3 text-xl font-bold leading-snug">{report.title}</h3>
      <p className="mb-5 text-slate-700">{report.summary}</p>
      <a className="font-bold text-teal-800 underline decoration-2 underline-offset-4" href={`#/reports/${encodeURIComponent(report.id)}`}>
        レポートを読む
      </a>
    </motion.article>
  );
}

function PolicyPage() {
  const policies = [
    ["出典を明示する", "レポート本文には、参照した公開資料の URL と確認日を記録します。"],
    ["事実と判断を分ける", "資料から直接確認できる内容と、そこから読み取れる判断を分けて記述します。"],
    ["古くなりやすい情報を明示する", "制度、組織、予算、数値など変わりうる情報には確認日を併記します。"]
  ];

  return (
    <>
      <PageHeading
        eyebrow="Editorial policy"
        title="レポート作成方針"
        description="公開情報から確認できる内容だけを扱い、未確認情報を事実として扱わない方針です。"
      />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3" aria-label="作成方針">
        {policies.map(([title, description]) => (
          <article className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm" key={title}>
            <h2 className="mb-3 text-lg font-bold">{title}</h2>
            <p className="text-slate-700">{description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function ReportPage({ id }) {
  const report = findReportById(id);

  if (!report) {
    return <NotFoundPage />;
  }

  return (
    <motion.article className="max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
      <a className="mb-7 inline-block font-bold text-teal-800 underline decoration-2 underline-offset-4" href="#/">
        一覧へ戻る
      </a>
      <p className="mb-2 text-xs font-extrabold uppercase text-amber-700">{report.category}</p>
      <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">{report.title}</h1>
      <dl className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Fact label="公開日" value={report.publishedAt} />
        <Fact label="確認日" value={report.checkedAt} />
      </dl>
      <p className="text-lg text-slate-700">{report.summary}</p>

      <section className="mt-9">
        <h2 className="mb-3 text-2xl font-bold">確認したポイント</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {report.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="mt-9">
        <h2 className="mb-3 text-2xl font-bold">出典</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          {report.sources.map((source) => (
            <li key={source.url}>
              <a className="text-teal-800 underline decoration-2 underline-offset-4" href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}

function Fact({ label, value }) {
  return (
    <div className="border-l-4 border-teal-700 bg-white px-4 py-3 shadow-sm">
      <dt className="text-sm font-bold text-slate-500">{label}</dt>
      <dd className="mt-1 font-extrabold">{value}</dd>
    </div>
  );
}

function NotFoundPage() {
  return (
    <PageHeading
      eyebrow="Not found"
      title="ページが見つかりません"
      description="指定されたページは存在しません。"
      action={<a className="font-bold text-teal-800 underline decoration-2 underline-offset-4" href="#/">一覧へ戻る</a>}
    />
  );
}

function PageHeading({ eyebrow, title, description, action }) {
  return (
    <motion.section className="mb-10 max-w-3xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <p className="mb-2 text-xs font-extrabold uppercase text-amber-700">{eyebrow}</p>
      <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
      <p className="text-lg text-slate-700">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-[min(1080px,calc(100%-40px))] border-t border-stone-200 py-6 text-sm text-slate-600">
      <p>公開情報にもとづく調査レポートのサンプルサイトです。</p>
    </footer>
  );
}
