'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Free Audit', href: '/free-audit' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#03060d]/95 backdrop-blur-md border-b border-[#233560]' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20">
        <div className="grid h-full grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
          <div className="hidden md:flex items-center gap-7">
            <Link href="/services" className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/free-audit" className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-colors">
              Free Audit
            </Link>
          </div>

          <Link href="/" className="justify-self-start md:justify-self-center">
            <motion.div
              className="text-lg sm:text-xl font-semibold uppercase tracking-[0.08em] text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              Amz<span className="text-lime-400">Advanta</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center justify-end gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-lime-400 bg-lime-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 hover:bg-lime-300 hover:border-lime-300 transition-all duration-200"
            >
              Let&apos;s Talk
            </Link>
            <Link href="/contact" className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-colors">
              Login
            </Link>
          </div>

          <div className="justify-self-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#03060d]/95 backdrop-blur-md rounded-lg mt-2 border border-[#233560]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white block px-3 py-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-lime-400 hover:bg-lime-300 text-slate-950 block px-3 py-2 rounded-md font-bold uppercase tracking-[0.1em] transition-all duration-200 mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white block px-3 py-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
