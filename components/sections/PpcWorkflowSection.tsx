'use client';

import { motion } from 'framer-motion';
import { BarChart3, Gauge, Layers3, SearchCheck, Target } from 'lucide-react';

const pillars = [
  {
    icon: SearchCheck,
    title: 'Keyword Intelligence',
    description:
      'We map high-intent search terms, isolate wasted spend, and route budget to profitable keyword clusters.'
  },
  {
    icon: Gauge,
    title: 'Bid and Budget Control',
    description:
      'Our daily bid logic balances velocity and efficiency so you scale without losing margin control.'
  },
  {
    icon: Layers3,
    title: 'Creative Feedback Loop',
    description:
      'PPC data feeds directly into listing creative improvements to raise CTR and conversion over time.'
  }
];

const campaignTypes = [
  'Sponsored Products',
  'Sponsored Brands',
  'Sponsored Display',
  'Amazon DSP',
  'Brand Defense',
  'Competitor Conquesting',
  'Product Launch PPC',
  'Seasonal Promotion Bursts'
];

const processSteps = [
  {
    title: 'Weekly Priority Sprint',
    description: 'A clear list of the highest-impact PPC actions, with owners and expected outcomes.'
  },
  {
    title: 'Midweek Performance Pulse',
    description: 'Quick check-ins on spend pace, conversion trend, and keyword movement to avoid drift.'
  },
  {
    title: 'Monthly Scale Decisions',
    description: 'We double down on profitable campaigns and cut low-efficiency pockets with full transparency.'
  }
];

const PpcWorkflowSection = () => {
  return (
    <section className="bg-[#070b15] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 inline-flex items-center rounded-full border border-[#2a3e72] bg-[#0d1530]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300">
            PPC Growth System
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Built For <span className="text-gradient">Predictable Scale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            We do not run campaigns on guesswork. Every optimization is tied to search behavior, conversion data, and profit targets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              className="group rounded-2xl border border-[#233560] bg-[#0f172b] p-7 transition-colors duration-300 hover:border-lime-400/50"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#2a3e72] bg-[#111b31]">
                <pillar.icon className="h-6 w-6 text-lime-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{pillar.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-2xl border border-[#233560] bg-[#0f172b] p-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15">
                <Target className="h-5 w-5 text-lime-400" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-white">Campaign Coverage</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {campaignTypes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#2a3e72] bg-[#0b1328] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-lime-400/35 bg-gradient-to-br from-lime-400/12 to-blue-500/14 p-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0b1328]">
                <BarChart3 className="h-5 w-5 text-lime-400" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-white">Optimization Rhythm</h3>
            </div>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-[#2a3e72] bg-[#0b1328]/70 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PpcWorkflowSection;
