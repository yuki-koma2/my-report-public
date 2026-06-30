import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { findReportById, getReportsByTag, getReportsByType, getTagSummaries, reports, tagDefinitions } from "../reports.js";
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
    <div className="min-h-screen bg-[#f4f7f1] text-[#18211d]">
      <Header />
      <main id="main-content" className="mx-auto min-h-[calc(100vh-152px)] w-[min(1120px,calc(100%-32px))] py-8 outline-none md:py-12">
        {route.name === "home" && <HomePage />}
        {route.name === "policy" && <PolicyPage />}
        {route.name === "report" && <ReportPage id={route.id} />}
        {route.name === "tag" && <TagPage tag={route.tag} />}
        {route.name === "notFound" && <NotFoundPage />}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-[#cfd8cf] bg-[#fbfcf8]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] w-[min(1120px,calc(100%-32px))] flex-col justify-center gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
        <a className="font-mono text-sm font-bold uppercase tracking-[0.08em] text-[#2f4f43] no-underline" href="#/">
          My Report Public
        </a>
        <nav className="flex flex-wrap gap-2 text-sm font-semibold" aria-label="主要ナビゲーション">
          <a className="rounded-full border border-[#cfd8cf] bg-white px-3 py-1.5 text-[#2f4f43] transition hover:border-[#b7442e]" href="#/">
            レポート一覧
          </a>
          <a className="rounded-full border border-[#cfd8cf] bg-white px-3 py-1.5 text-[#2f4f43] transition hover:border-[#b7442e]" href="#/tags/医療">
            タグ
          </a>
          <a className="rounded-full border border-[#cfd8cf] bg-white px-3 py-1.5 text-[#2f4f43] transition hover:border-[#b7442e]" href="#/policy">
            作成方針
          </a>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  const weeklyReports = getReportsByType("weekly");
  const deepReports = getReportsByType("deep");
  const tagSummaries = getTagSummaries();

  return (
    <>
      <Hero />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr]">
        <InfoPanel title="このサイトの目的">
          <p>
            医療・介護、行政DX、AI、制度変更など、公開情報から確認できる情報を継続的に整理し、判断材料として再利用できる形で残します。
          </p>
          <p>
            単なるニュース要約ではなく、今後対応が必要になりそうな課題、事業機会、プロダクト上の論点を明確にすることを重視します。
          </p>
        </InfoPanel>
        <InfoPanel title="前提と注意">
          <p>
            記事はAIによるWeb調査・要約・構造化を活用して作成します。公開前に確認を行いますが、最新性や正確性が重要な判断では必ず一次情報を確認してください。
          </p>
          <p>
            非公開情報や機密情報は扱わず、公開日、確認日、出典をできるだけ明示します。
          </p>
        </InfoPanel>
      </section>

      <section className="mt-12">
        <SectionHeader title="記事の種類" description="深く調べる記事と、週次で追加される最新情報記事を分けて公開します。" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ArticleTypeCard
            title="不定期の深掘り調査"
            description="制度、標準化、業界構造、プロダクト要件など、背景理解が必要なテーマを時間をかけて調査します。"
            points={["複数の公開資料を横断", "背景・構造・示唆を重視", "新規事業やプロダクト検討向け"]}
          />
          <ArticleTypeCard
            title="週次で追加される最新情報"
            description="直近の制度変更、公募、行政資料、企業動向を週次で追い、対応優先度と期限を整理します。"
            points={["毎週追加する想定", "新規情報の有無も明示", "対応アクションを抽出"]}
          />
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="タグで探す" description="関心領域ごとに記事を整理します。" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tagSummaries.map((tag) => (
            <TagSummaryCard key={tag.name} tag={tag} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader title="記事" description={`${reports.length}件のサンプル記事を掲載中`} />
        <ArticleGroup title="週次で自動更新・追加される最新情報" reports={weeklyReports} />
        <ArticleGroup title="不定期で深く調査するページ" reports={deepReports} />
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="mb-8 grid grid-cols-1 gap-5 border-b border-[#cfd8cf] pb-8 md:grid-cols-[1.45fr_0.85fr] md:items-end">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <p className="mb-4 inline-flex border-l-4 border-[#b7442e] bg-white px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#4f554f]">
          AI assisted public research
        </p>
        <h1 className="max-w-4xl text-[2.55rem] font-black leading-[0.98] tracking-[-0.01em] text-[#17211d] md:text-[5.6rem]">
          AI調査レポート公開ライブラリ
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#45534b]">
          公開情報をAIで調査・整理し、人が確認しながら一般公開するためのレポートサイトです。制度、事業機会、リスク、プロダクト論点を追える形で蓄積します。
        </p>
      </motion.div>
      <motion.aside
        className="border border-[#17211d] bg-[#17211d] p-5 text-[#eef4ec] shadow-[8px_8px_0_#b7442e]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.3 }}
        aria-label="調査の前提"
      >
        <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#f0b05e]">Research ledger</p>
        <dl className="space-y-4">
          <LedgerItem label="source" value="公開情報のみ" />
          <LedgerItem label="method" value="AI調査 + 人の確認" />
          <LedgerItem label="rhythm" value="深掘り / 週次更新" />
          <LedgerItem label="focus" value="医療・介護・AI・技術" />
        </dl>
      </motion.aside>
    </section>
  );
}

function LedgerItem({ label, value }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3 border-t border-[#445048] pt-3">
      <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[#9fb0a6]">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

function TagSummaryCard({ tag }) {
  return (
    <a className="group rounded-md border border-[#cfd8cf] bg-[#fbfcf8] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b7442e] hover:shadow-[5px_5px_0_#dfe7dc]" href={`#/tags/${encodeURIComponent(tag.name)}`}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-black text-[#17211d]">{tag.name}</h3>
        <span className="rounded-full bg-[#e7ecdf] px-3 py-1 font-mono text-xs font-bold text-[#4f554f]">{tag.count}件</span>
      </div>
      <p className="text-sm leading-6 text-[#5d685f]">{tag.description}</p>
    </a>
  );
}

function InfoPanel({ title, children }) {
  return (
    <article className="rounded-md border border-[#cfd8cf] bg-[#fbfcf8] p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-black text-[#17211d]">{title}</h2>
      <div className="space-y-3 text-[#4b584f]">{children}</div>
    </article>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-5 flex flex-col gap-2 border-b border-[#cfd8cf] pb-3 md:flex-row md:items-end md:justify-between">
      <h2 className="text-2xl font-black leading-tight text-[#17211d]">{title}</h2>
      <p className="max-w-xl text-sm leading-6 text-[#5d685f]">{description}</p>
    </div>
  );
}

function ArticleTypeCard({ title, description, points }) {
  return (
    <article className="rounded-md border border-[#cfd8cf] bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-black text-[#17211d]">{title}</h3>
      <p className="mb-4 text-[#4b584f]">{description}</p>
      <ul className="space-y-2 text-sm text-[#5d685f]">
        {points.map((point) => (
          <li className="border-l-2 border-[#b7442e] pl-3" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ArticleGroup({ title, reports: groupReports }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.08em] text-[#4f554f]">{title}</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groupReports.map((report, index) => (
          <ReportCard key={report.id} report={report} index={index} />
        ))}
      </div>
    </div>
  );
}

function ReportCard({ report, index }) {
  return (
    <motion.article
      className="rounded-md border border-[#cfd8cf] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f4f43] hover:shadow-[6px_6px_0_#dfe7dc]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.28 }}
    >
      <div className="mb-4 flex justify-between gap-3 font-mono text-xs font-bold uppercase tracking-[0.06em] text-[#69746c]">
        <span className="text-[#b7442e]">{report.articleTypeLabel}</span>
        <time dateTime={report.publishedAt}>{report.publishedAt}</time>
      </div>
      <h3 className="mb-3 text-xl font-black leading-snug text-[#17211d]">{report.title}</h3>
      <p className="mb-5 leading-7 text-[#4b584f]">{report.summary}</p>
      <TagList tags={report.tags} />
      <p className="mb-5 text-sm font-semibold text-[#5d685f]">{report.cadence}</p>
      <a className="font-bold text-[#2f4f43] underline decoration-2 underline-offset-4" href={`#/reports/${encodeURIComponent(report.id)}`}>
        レポートを読む
      </a>
    </motion.article>
  );
}

function TagList({ tags }) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <a
          className="rounded-full border border-[#cfd8cf] bg-[#f4f7f1] px-3 py-1 text-sm font-semibold text-[#2f4f43] transition hover:border-[#b7442e]"
          href={`#/tags/${encodeURIComponent(tag)}`}
          key={tag}
        >
          {tag}
        </a>
      ))}
    </div>
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
          <article className="rounded-md border border-[#cfd8cf] bg-white p-6 shadow-sm" key={title}>
            <h2 className="mb-3 text-lg font-black text-[#17211d]">{title}</h2>
            <p className="leading-7 text-[#4b584f]">{description}</p>
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
    <motion.article className="max-w-4xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
      <a className="mb-7 inline-block font-bold text-[#2f4f43] underline decoration-2 underline-offset-4" href="#/">
        一覧へ戻る
      </a>
      <p className="mb-2 font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#b7442e]">{report.category}</p>
      <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight text-[#17211d] md:text-6xl">{report.title}</h1>
      <dl className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Fact label="記事種別" value={report.articleTypeLabel} />
        <Fact label="更新頻度" value={report.cadence} />
        <Fact label="公開日" value={report.publishedAt} />
        <Fact label="確認日" value={report.checkedAt} />
      </dl>
      <TagList tags={report.tags} />
      <p className="max-w-3xl text-lg leading-8 text-[#4b584f]">{report.summary}</p>

      <section className="mt-9">
        <h2 className="mb-3 text-2xl font-black">確認したポイント</h2>
        <ul className="space-y-2 text-[#4b584f]">
          {report.highlights.map((highlight) => (
            <li className="border-l-2 border-[#b7442e] pl-3" key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-9">
        <h2 className="mb-3 text-2xl font-black">出典</h2>
        <ul className="space-y-2 text-[#4b584f]">
          {report.sources.map((source) => (
            <li className="border-l-2 border-[#cfd8cf] pl-3" key={source.url}>
              <a className="text-[#2f4f43] underline decoration-2 underline-offset-4" href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}

function TagPage({ tag }) {
  const matchingReports = getReportsByTag(tag);
  const tagDefinition = tagDefinitions.find((item) => item.name === tag);

  if (!tagDefinition && matchingReports.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHeading
        eyebrow="Tag"
        title={`#${tag}`}
        description={tagDefinition?.description ?? "このタグが付いた記事を表示しています。"}
      />
      <section>
        <SectionHeader title="記事" description={`${matchingReports.length}件の記事`} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {matchingReports.map((report, index) => (
            <ReportCard key={report.id} report={report} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }) {
  return (
    <div className="border-l-4 border-[#2f4f43] bg-white px-4 py-3 shadow-sm">
      <dt className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-[#69746c]">{label}</dt>
      <dd className="mt-1 font-extrabold text-[#17211d]">{value}</dd>
    </div>
  );
}

function NotFoundPage() {
  return (
    <PageHeading
      eyebrow="Not found"
      title="ページが見つかりません"
      description="指定されたページは存在しません。"
      action={<a className="font-bold text-[#2f4f43] underline decoration-2 underline-offset-4" href="#/">一覧へ戻る</a>}
    />
  );
}

function PageHeading({ eyebrow, title, description, action }) {
  return (
    <motion.section className="mb-10 max-w-3xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <p className="mb-2 font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[#b7442e]">{eyebrow}</p>
      <h1 className="mb-4 text-4xl font-black leading-tight text-[#17211d] md:text-6xl">{title}</h1>
      <p className="text-lg leading-8 text-[#4b584f]">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-[min(1120px,calc(100%-32px))] border-t border-[#cfd8cf] py-6 text-sm text-[#5d685f]">
      <p>公開情報にもとづく調査レポートのサンプルサイトです。</p>
    </footer>
  );
}
