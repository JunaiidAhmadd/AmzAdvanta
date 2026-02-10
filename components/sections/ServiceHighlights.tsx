'use client';

import { motion } from 'framer-motion';
import { Target, Search, TrendingUp, Shield } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';

const ServiceHighlights = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Campaign Management',
      description: 'Expert management of your Amazon PPC campaigns to maximize ROI and minimize wasted ad spend.',
      color: 'text-blue-500'
    },
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Comprehensive keyword analysis to find high-converting search terms for your products.',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing',
      description: 'Continuous testing of ad creatives and strategies to improve conversion rates.',
      color: 'text-purple-500'
    },
    {
      icon: Shield,
      title: 'Performance Tracking',
      description: 'Detailed analytics and reporting to track your campaign success and growth.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-950">
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
            Our Amazon PPC
            <span className="text-gradient"> Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide comprehensive Amazon PPC management services designed to 
            increase your sales, improve your ROI, and grow your brand.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors duration-300`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-12 border border-orange-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Amazon Business?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 150+ brands that have transformed their Amazon presence with our expert PPC management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-full transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
