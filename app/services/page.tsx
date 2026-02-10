'use client';

import { motion } from 'framer-motion';
import { Target, Search, FlaskConical, Package, BarChart3, Lightbulb, CheckCircle } from 'lucide-react';
import { services } from '@/lib/data';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const iconMap = {
  Target,
  Search,
  FlaskConical,
  Package,
  BarChart3,
  Lightbulb,
};

export default function ServicesPage() {
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
              Our Amazon PPC
              <span className="text-gradient"> Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Amazon PPC management services designed to maximize your 
              ROI, increase sales, and grow your brand presence on the world's largest marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="group bg-gray-900 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-orange-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our
              <span className="text-gradient"> Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to Amazon PPC success that delivers consistent results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit & Analysis', description: 'Comprehensive analysis of your current campaigns and market position.' },
              { step: '02', title: 'Strategy Development', description: 'Custom PPC strategy tailored to your business goals and budget.' },
              { step: '03', title: 'Implementation', description: 'Expert execution of campaigns with continuous optimization.' },
              { step: '04', title: 'Reporting & Scaling', description: 'Detailed performance reports and strategic scaling recommendations.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
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
              Ready to Transform Your Amazon Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how our expert PPC management can help you achieve your growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-audit">
                <Button size="lg">Get a Free Audit</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Schedule a Consultation</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
