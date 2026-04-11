import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseStudies, getCaseStudyById } from '@/lib/data';

type CaseStudyDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { id } = await params;
  const study = getCaseStudyById(id);

  if (!study) {
    notFound();
  }

  const related = caseStudies.filter((item) => item.id !== study.id).slice(0, 3);
  const insightImage = study.chartImage ?? study.image;
  const insightTitle = study.insightTitle ?? 'Growth Story in Numbers';
  const insightPoints = study.insightPoints ?? study.outcomes?.slice(0, 2) ?? [];

  return (
    <div className="min-h-screen bg-[#05070d]">
      <section className="relative overflow-hidden border-b border-[#1f2f57] pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(163,230,53,0.14),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.22),transparent_35%),linear-gradient(180deg,#04070f_0%,#05070d_100%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <p className="inline-flex rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-lime-300">
                  {study.category ?? 'Amazon Growth'}
                </p>
                <p className="inline-flex rounded-full border border-[#2a3e72] bg-[#0d1530]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                  {study.serviceType ?? 'Amazon PPC'}
                </p>
              </div>
              <h1 className="text-3xl font-black uppercase leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                {study.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{study.description}</p>
            </div>

            <div className="rounded-2xl border border-[#233560] bg-[#0f172b] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Performance Snapshot</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-[#2a3e72] bg-[#0b1328] p-3 text-center">
                    <p className="text-2xl font-black text-gradient">{metric.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070b15] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-[#233560] bg-[#0f172b]">
            <Image
              src={study.image}
              alt={study.title}
              width={640}
              height={360}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {study.overview && study.overview.length > 0 && (
        <section className="bg-[#05070d] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">Overview</h2>
            <div className="mt-5 space-y-4 text-slate-300">
              {study.overview.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {study.challenges && study.challenges.length > 0 && (
        <section className="bg-[#070b15] py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">The Challenge</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {study.challenges.map((challenge, idx) => (
                <div key={idx} className="rounded-xl border border-[#233560] bg-[#0f172b] p-5">
                  <p className="text-sm leading-relaxed text-slate-300">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {study.approach && study.approach.length > 0 && (
        <section className="bg-[#05070d] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">The Approach</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {study.approach.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#233560] bg-[#0f172b] p-6">
                  <h3 className="text-xl font-black uppercase leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#070b15] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#233560] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-[#d8d8d8] p-3">
              <Image
                src={insightImage}
                alt={`${study.title} performance visual`}
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="bg-[#c4f03e] p-8">
              <h3 className="text-3xl font-black leading-tight text-[#0f172a]">{insightTitle}</h3>
              {insightPoints.length > 0 ? (
                <div className="mt-5 space-y-5">
                  {insightPoints.slice(0, 2).map((point, idx) => (
                    <p key={idx} className="text-lg leading-relaxed text-[#0f172a]">
                      {point}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-lg leading-relaxed text-[#0f172a]">
                  Structured execution across PPC, SEO, creative, and platform operations moved this account from stable performance to scalable growth.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {study.outcomes && study.outcomes.length > 0 && (
        <section className="bg-[#05070d] py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">Key Outcomes</h2>
            <div className="mt-6 space-y-3">
              {study.outcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-[#233560] bg-[#0f172b] p-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-lime-400" />
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#070b15] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black uppercase text-white">More Case Studies</h2>
            <Link href="/case-studies" className="text-sm font-bold uppercase tracking-[0.08em] text-lime-400 hover:text-lime-300">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.id} className="rounded-xl border border-[#233560] bg-[#0f172b] p-4">
                <div className="overflow-hidden rounded-lg border border-[#2a3e72]">
                  <Image src={item.image} alt={item.title} width={640} height={360} className="h-32 w-full object-cover" />
                </div>
                <h3 className="mt-3 text-lg font-black uppercase leading-tight text-white">{item.title}</h3>
                <Link
                  href={`/case-studies/${item.id}`}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-300 hover:text-lime-400"
                >
                  Read Case Study
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
