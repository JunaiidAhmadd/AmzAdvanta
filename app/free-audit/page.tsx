'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Mail, Phone, Building, DollarSign, Loader2, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const auditSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().optional(),
  currentSpend: z.string().optional(),
  goals: z.string().min(10, 'Please tell us more about your goals (at least 10 characters)'),
});

type AuditFormData = z.infer<typeof auditSchema>;

export default function FreeAuditPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Audit form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          className="max-w-2xl w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thank You for Your Request!
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            We've received your audit request and will contact you within 24 hours 
            to schedule your comprehensive Amazon PPC analysis.
          </p>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-orange-500 font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">Initial Consultation</p>
                  <p className="text-gray-400 text-sm">We'll reach out to understand your business and goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-orange-500 font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">Comprehensive Audit</p>
                  <p className="text-gray-400 text-sm">Deep analysis of your current campaigns and opportunities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-orange-500 font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">Strategy Presentation</p>
                  <p className="text-gray-400 text-sm">Detailed report with actionable recommendations</p>
                </div>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="lg"
          >
            Submit Another Request
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Free
              <span className="text-gradient"> Amazon PPC Audit</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover hidden opportunities in your Amazon advertising campaigns. 
              Our comprehensive audit will identify areas for improvement and provide 
              actionable insights to boost your ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-900 rounded-3xl border border-gray-800 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  icon={<Mail className="w-5 h-5" />}
                  {...register('name')}
                  error={errors.name?.message}
                />
                <Input
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                  icon={<Mail className="w-5 h-5" />}
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Company Name"
                  placeholder="Your Amazon Store"
                  icon={<Building className="w-5 h-5" />}
                  {...register('company')}
                  error={errors.company?.message}
                />
                <Input
                  label="Phone Number (Optional)"
                  placeholder="+1 (555) 123-4567"
                  icon={<Phone className="w-5 h-5" />}
                  {...register('phone')}
                />
              </div>

              <Input
                label="Current Monthly Ad Spend (Optional)"
                placeholder="$5,000 - $10,000"
                icon={<DollarSign className="w-5 h-5" />}
                {...register('currentSpend')}
              />

              <Textarea
                label="What are your main goals with Amazon PPC?"
                placeholder="Tell us about your business goals, challenges you're facing, and what you hope to achieve with our help..."
                rows={4}
                {...register('goals')}
                error={errors.goals?.message}
              />

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What's included in your free audit:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Campaign performance analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Keyword optimization opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Competitor landscape assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">ROI improvement recommendations</span>
                  </li>
                </ul>
              </div>

              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Get My Free Audit
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose
              <span className="text-gradient"> AmzAdvanta?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just another PPC agency – we're your strategic growth partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Approach',
                description: 'Every decision we make is backed by comprehensive data analysis and market research.',
                icon: '📊'
              },
              {
                title: 'Proven Results',
                description: 'Average 324% sales increase and 8.5x ROAS for our clients across diverse industries.',
                icon: '📈'
              },
              {
                title: 'Expert Team',
                description: 'Certified Amazon advertising specialists with years of hands-on experience.',
                icon: '👥'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
