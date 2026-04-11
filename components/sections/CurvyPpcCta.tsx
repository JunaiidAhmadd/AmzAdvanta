'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CurvyPpcCta = () => {
  return (
    <section className="relative overflow-hidden bg-[#081735] py-24">
      <svg
        viewBox="0 0 1440 160"
        className="absolute -top-1 left-0 h-24 w-full md:h-28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,160 C190,20 390,20 570,120 C760,220 980,90 1170,45 C1290,18 1370,20 1440,50 L1440,0 L0,0 Z"
          fill="#05070d"
        />
        <path
          d="M0,160 C190,20 390,20 570,120 C760,220 980,90 1170,45 C1290,18 1370,20 1440,50"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="5"
          opacity="0.9"
        />
      </svg>

      <svg
        viewBox="0 0 1440 170"
        className="absolute -bottom-1 left-0 h-24 w-full md:h-28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,130 C230,40 420,160 640,115 C860,70 1060,5 1240,30 C1325,40 1385,70 1440,100 L1440,170 L0,170 Z"
          fill="#05070d"
        />
        <path
          d="M0,130 C230,40 420,160 640,115 C860,70 1060,5 1240,30 C1325,40 1385,70 1440,100"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="5"
          opacity="0.9"
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(163,230,53,0.2),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(14,165,233,0.28),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl border border-[#2a4b88] bg-[#0a1f47]/75 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.45)] sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-lime-300">Ready To Scale PPC?</p>
              <h2 className="text-4xl font-black uppercase leading-[1.06] text-white sm:text-5xl">
                Turn Clicks Into <span className="text-gradient">Profitable Growth</span>
              </h2>
              <p className="mt-4 max-w-2xl text-slate-200">
                Share your ad account goals and we will return a practical action plan for budget efficiency, keyword expansion, and conversion gains.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-lime-400 bg-lime-400 px-7 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-all duration-200 hover:bg-lime-300 hover:border-lime-300"
                >
                  Get Free PPC Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-white/10 hover:border-white"
                >
                  Talk To Strategist
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Audit Delivery', value: '48 Hours' },
                { label: 'Weekly Reporting', value: '100%' },
                { label: 'Average Lift', value: '+324%' },
                { label: 'Brands Managed', value: '450+' }
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-[#3a5fa1] bg-[#0b234f]/75 p-4 text-center">
                  <p className="text-2xl font-black text-gradient">{metric.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurvyPpcCta;
