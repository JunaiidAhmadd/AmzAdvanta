'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Crosshair, LineChart, Rocket, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const stickyCards = [
  {
    icon: Crosshair,
    title: 'Precision Keyword Mapping',
    description:
      'We break campaigns into intent-based clusters so spend goes to search terms that convert, not vanity clicks.',
    points: ['Search term segmentation', 'Negative keyword control', 'Bid tiering by purchase intent']
  },
  {
    icon: LineChart,
    title: 'Live Performance Optimization',
    description:
      'Every week we tune bids, budget pacing, and placement multipliers based on real profit signals and trend shifts.',
    points: ['A/B budget routing', 'Daypart and placement tuning', 'Weekly profitability review']
  },
  {
    icon: ShieldCheck,
    title: 'Margin Protection Layer',
    description:
      'We protect efficiency while scaling by controlling aggressive spend pockets and cleaning non-performing ad sets.',
    points: ['Waste-spend isolation', 'ACOS and TACOS guardrails', 'Catalog-level defense campaigns']
  },
  {
    icon: Rocket,
    title: 'Scale Blueprint Execution',
    description:
      'Once winners are identified, we scale with launch playbooks, expansion campaigns, and controlled budget lifts.',
    points: ['Winner campaign duplication', 'Cross-market expansion', 'Controlled growth pacing']
  }
];

const StickyPpcSection = () => {
  return (
    <section className="bg-[#05070d] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.aside
            className="h-fit rounded-3xl border border-[#2a3e72] bg-[#0f172b] p-8 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-lime-400">Sticky PPC Section</p>
            <h2 className="text-4xl font-black uppercase leading-[1.06] text-white">
              PPC Command <span className="text-gradient">Center</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              As you scroll through each module, you see the exact growth system we apply to scale Amazon ad accounts with control.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'Weekly Tests', value: '15+' },
                { label: 'Reporting Cadence', value: 'Every 7 Days' },
                { label: 'Average ROAS', value: '8.5x' },
                { label: 'Brands Managed', value: '450+' }
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-[#2a3e72] bg-[#0b1328] p-3 text-center">
                  <p className="text-base font-black text-gradient">{metric.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.09em] text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/free-audit"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-lime-400 bg-lime-400 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-all duration-200 hover:border-lime-300 hover:bg-lime-300"
            >
              Get PPC Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.aside>

          <div className="space-y-6">
            {stickyCards.map((card, index) => (
              <motion.article
                key={card.title}
                className="min-h-[240px] rounded-2xl border border-[#233560] bg-[#0b1328] p-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#2a3e72] bg-[#101b34]">
                    <card.icon className="h-5 w-5 text-lime-400" />
                  </div>
                  <span className="text-xs font-black tracking-[0.14em] text-slate-500">0{index + 1}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.description}</p>

                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyPpcSection;
