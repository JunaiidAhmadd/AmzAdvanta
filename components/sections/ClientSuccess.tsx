'use client';

import { motion } from 'framer-motion';
import { ArrowUp, TrendingUp, Users, Target } from 'lucide-react';
import { clientMetrics } from '@/lib/data';

const ClientSuccess = () => {
  const successStories = [
    {
      icon: ArrowUp,
      metric: '324%',
      description: 'Average Sales Increase',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      metric: '8.5x',
      description: 'Average ROAS',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      metric: '150+',
      description: 'Brands Transformed',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      metric: '-45%',
      description: 'Average CPC Reduction',
      color: 'text-lime-400'
    }
  ];

  return (
    <section className="py-20 bg-[#05070d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven
            <span className="text-gradient"> Results</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We don&apos;t just manage campaigns – we deliver measurable results that 
            transform Amazon businesses and drive sustainable growth.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-[#0f172b] rounded-2xl border border-[#233560] hover:border-lime-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#111b31] flex items-center justify-center">
                <story.icon className={`w-8 h-8 ${story.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                {story.metric}
              </div>
              <div className="text-slate-400 leading-relaxed">
                {story.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="bg-gradient-to-r from-lime-400/10 to-blue-500/10 rounded-3xl p-8 border border-lime-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {clientMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Preview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl text-slate-300 italic max-w-4xl mx-auto mb-8">
            &ldquo;AmzAdvanta transformed our Amazon business. Their expertise in PPC management 
            helped us achieve unprecedented growth and ROI that we never thought possible.&rdquo;
          </blockquote>
          <div className="text-slate-500">
            — CEO, TechGear Pro (324% Sales Increase)
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess;
