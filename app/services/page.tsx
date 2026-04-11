'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, CheckCircle, Package, Search, Target } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';
import BrandLogoCarousel from '@/components/sections/BrandLogoCarousel';

const iconMap = {
  Target,
  Search,
  Package,
  BarChart3
};

const principles = ['Hands-on leadership', 'Award-winning partnerships', 'Custom-built solutions'];

const processSteps = [
  {
    step: '01',
    title: 'Discovery and Audit',
    description: 'We review your catalog, ad account, content quality, and operational bottlenecks before execution.'
  },
  {
    step: '02',
    title: 'Roadmap and Buildout',
    description: 'Our team creates a practical growth roadmap covering PPC, SEO, creative, and account workflows.'
  },
  {
    step: '03',
    title: 'Launch and Optimization',
    description: 'We execute fast, then optimize continuously using real performance signals across your portfolio.'
  },
  {
    step: '04',
    title: 'Scale and Stabilize',
    description: 'Winning structures are scaled while safeguards are added to protect margin and long-term consistency.'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#05070d]">
      <section className="relative overflow-hidden border-b border-[#1f2f57] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(163,230,53,0.15),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.24),transparent_35%),linear-gradient(180deg,#04070f_0%,#05070d_100%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-5 inline-flex items-center rounded-full border border-[#2a3e72] bg-[#0d1530]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                What We Do
              </p>
              <h1 className="text-4xl font-black uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Amazon Presence, <span className="text-gradient">Fully Managed</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                We provide integrated service pods for paid media, organic growth, creative conversion assets, and day-to-day account management.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/case-studies"
                  className="inline-flex min-w-[190px] items-center justify-center rounded-md border border-white/45 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  See Our Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-md border border-lime-400 bg-lime-400 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-all duration-200 hover:border-lime-300 hover:bg-lime-300"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {[
                { label: 'Brands Managed', value: '450+' },
                { label: 'Revenue Driven', value: '$1.2B+' },
                { label: 'Successful Launches', value: '500+' },
                { label: 'Agency Rating', value: '5 Stars' }
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-[#2a3e72] bg-[#0f172b]/90 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.05)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-4xl font-black leading-none text-gradient">{metric.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#05070d] pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandLogoCarousel />
        </div>
      </section>

      <section className="border-y border-lime-400/50 bg-[#0c1020] py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 sm:px-6 lg:px-8">
          {principles.map((item) => (
            <div key={item} className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime-400">
              <span className="mr-2 text-blue-500">&#11041;</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#070b15]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black uppercase text-white sm:text-5xl">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-400">
              A focused service stack designed for Amazon brands that want profitable and durable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.article
                  key={service.id}
                  id={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#233560] bg-[#0f172b] p-7"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-blue-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#2a3e72] bg-[#111b31]">
                        <IconComponent className="h-6 w-6 text-lime-400" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.14em] text-slate-500">0{index + 1}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-200 group-hover:text-lime-400">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>

                    <div className="mt-6 space-y-2.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-lime-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#05070d]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black uppercase text-white sm:text-5xl">
              How We <span className="text-gradient">Operate</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="rounded-xl border border-[#233560] bg-[#0f172b] p-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-black tracking-[0.12em] text-lime-400">{item.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-2xl border border-lime-400/40 bg-gradient-to-br from-lime-400/10 to-blue-500/15 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-400">Service Model</p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white">
                One Team Across Ads, SEO, Creative, and Operations
              </h3>
              <p className="mt-4 text-slate-300">
                You get an integrated team that works on growth and account stability together, so progress does not break between departments.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="text-lime-400">&#10003;</span>
                  Dedicated strategist and account lead
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lime-400">&#10003;</span>
                  Weekly performance updates with action owners
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lime-400">&#10003;</span>
                  Transparent priorities tied to revenue goals
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-lime-400 hover:text-lime-300"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
