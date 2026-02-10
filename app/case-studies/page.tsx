'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, ArrowUp, Quote } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client
              <span className="text-gradient"> Success Stories</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed Amazon businesses across different industries 
              through strategic PPC management and data-driven optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{study.clientName}</h3>
                        <p className="text-gray-400 text-sm">Amazon Seller</p>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {study.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {study.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        className="bg-gray-900 rounded-xl p-4 border border-gray-800"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-2xl font-bold text-gradient mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 relative">
                    <Quote className="w-8 h-8 text-orange-500/20 absolute top-4 right-4" />
                    <p className="text-gray-300 leading-relaxed mb-4 italic">
                      "{study.testimonial}"
                    </p>
                    <p className="text-gray-500 text-sm">
                      — {study.clientName}, CEO
                    </p>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className="relative h-96 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                        <p className="text-gray-400">Case Study Visual</p>
                        <p className="text-2xl font-bold text-white mt-2">{study.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Results Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Track Record
              <span className="text-gradient"> Speaks for Itself</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Consistent results across diverse industries and product categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: '324%', label: 'Average Sales Increase', color: 'text-green-500' },
              { icon: Target, value: '8.5x', label: 'Average ROAS', color: 'text-blue-500' },
              { icon: ArrowUp, value: '-45%', label: 'Average CPC Reduction', color: 'text-orange-500' },
              { icon: Users, value: '150+', label: 'Brands Transformed', color: 'text-purple-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-400 leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of successful Amazon sellers who have transformed their businesses with our expert PPC management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg">Get Your Free Strategy Audit</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Schedule a Call</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
