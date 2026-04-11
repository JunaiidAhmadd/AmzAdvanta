'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BrandLogoCarousel from '@/components/sections/BrandLogoCarousel';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(163,230,53,0.14),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(59,130,246,0.2),transparent_36%),linear-gradient(180deg,rgba(3,6,13,0.84),rgba(3,6,13,0.98))]" />
      <div className="absolute inset-0 opacity-25 bg-[url('/grid.svg')] bg-center" />
      <div className="absolute -left-28 top-28 h-[420px] w-[420px] rounded-full border border-lime-400/20 bg-lime-400/10 blur-3xl" />
      <div className="absolute -right-36 top-40 h-[460px] w-[460px] rounded-full border border-blue-500/20 bg-blue-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.p
          className="mb-5 rounded-full border border-[#233560] bg-[#0c1430]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Full-Service Amazon Growth Agency
        </motion.p>

        <motion.h1
          className="max-w-5xl text-center text-4xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Award-Winning Growth For <span className="text-gradient">500+ Brands</span> On Amazon And Beyond
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-400 sm:text-lg"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          We scale revenue with hands-on PPC leadership, creative testing, and channel expansion across Amazon, Walmart, and TikTok.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
        >
          <Link
            href="/case-studies"
            className="inline-flex min-w-[180px] items-center justify-center rounded-md border border-white/45 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
          >
            See Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-md border border-lime-400 bg-lime-400 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition-all duration-200 hover:border-lime-300 hover:bg-lime-300"
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <BrandLogoCarousel className="mt-14" delay={0.5} />
      </div>
    </section>
  );
};

export default Hero;
