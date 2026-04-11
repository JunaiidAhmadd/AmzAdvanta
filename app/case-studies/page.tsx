'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import BrandLogoCarousel from '@/components/sections/BrandLogoCarousel';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#05070d]">
      <section className="relative overflow-hidden border-b border-[#1f2f57] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(163,230,53,0.14),transparent_30%),radial-gradient(circle_at_81%_14%,rgba(59,130,246,0.24),transparent_35%),linear-gradient(180deg,#04070f_0%,#05070d_100%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="mb-5 inline-flex items-center rounded-full border border-[#2a3e72] bg-[#0d1530]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Our Work
          </motion.p>
          <motion.h1
            className="text-4xl font-black uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Case Studies That <span className="text-gradient">Prove Scale</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Real Amazon growth stories across launch, profitability recovery, and new-to-brand customer acquisition.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#05070d] pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandLogoCarousel />
        </div>
      </section>

      <section className="bg-[#070b15] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className="rounded-2xl border border-[#233560] bg-[#0f172b] p-4 sm:p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[220px_1fr]">
                  <Link href={`/case-studies/${study.id}`} className="block">
                    <div className="overflow-hidden rounded-xl border border-[#2a3e72] bg-[#0b1328]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        width={640}
                        height={360}
                        className="h-[128px] w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="flex h-full flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="inline-flex rounded-full border border-lime-400/40 bg-lime-400/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-lime-300">
                        {study.category ?? 'Amazon Growth'}
                      </p>
                      <p className="inline-flex rounded-full border border-[#2a3e72] bg-[#0b1328] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-300">
                        {study.serviceType ?? 'Amazon PPC'}
                      </p>
                    </div>
                    <h2 className="mt-1 text-2xl font-black uppercase leading-[1.1] text-white">
                      {study.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300">
                      {study.description}
                    </p>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-white hover:text-lime-400 transition-colors"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
