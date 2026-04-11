'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowUpRight, Building2, CheckCircle, Loader2, Mail, Phone, Send } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import BrandLogoCarousel from '@/components/sections/BrandLogoCarousel';

const auditSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  amazonCompany: z.string().min(2, 'Please enter your Amazon company name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  additionalDetails: z.string().min(10, 'Please share at least 10 characters in additional details')
});

type AuditFormData = z.infer<typeof auditSchema>;

export default function FreeAuditPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema)
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit audit request.');
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting free audit form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#05070d] px-4 py-28">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-[#2a3e72] bg-[#0f172b] p-10 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400/20">
            <CheckCircle className="h-8 w-8 text-lime-400" />
          </div>
          <h1 className="text-4xl font-black uppercase text-white sm:text-5xl">Audit Request Received</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Thanks for reaching out. Our PPC team will review your details and get back within 24 hours with next steps.
          </p>

          <div className="mt-8 rounded-2xl border border-[#233560] bg-[#0b1328] p-6 text-left">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-lime-400">What Happens Next</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Initial qualification call with your growth goals
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Account-level PPC review and opportunity breakdown
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Action plan presentation with priority timeline
              </li>
            </ul>
          </div>

          <Button className="mt-8" onClick={() => setIsSubmitted(false)} variant="outline" size="lg">
            Submit Another Request
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070d]">
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(163,230,53,0.14),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.24),transparent_34%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-4 inline-flex items-center rounded-full border border-[#2a3e72] bg-[#0d1530]/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300">
              Free PPC Audit
            </p>
            <h1 className="text-5xl md:text-6xl font-black uppercase leading-[1.06] text-white">
              Get Your Amazon <span className="text-gradient">Growth Audit</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Send your details and get a focused PPC action plan with high-impact opportunities, efficiency fixes, and scale recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#05070d] pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandLogoCarousel />
        </div>
      </section>

      <section className="bg-[#0a1020] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              className="rounded-3xl border border-[#233560] bg-[#0f172b] p-7 sm:p-8"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-400">Sample Dashboard View</p>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Last 30 Days</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#2a3e72] bg-[#08102a]">
                <Image
                  src="/dashboard-sales.svg"
                  alt="Amazon PPC dashboard with sales data"
                  width={980}
                  height={620}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'Revenue Lift', value: '+324%' },
                  { label: 'Avg ROAS', value: '8.5x' },
                  { label: 'Brands Managed', value: '450+' },
                  { label: 'Audit Turnaround', value: '48h' }
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#2a3e72] bg-[#0b1328] p-3 text-center">
                    <p className="text-sm font-black text-gradient">{item.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl border border-[#233560] bg-[#0f172b] p-7 sm:p-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black uppercase text-white">Request Your Free Audit</h2>
              <p className="mt-2 text-sm text-slate-400">
                Fill the form and our team will reach out with a practical PPC audit plan.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
                <Input
                  label="Name"
                  placeholder="Your full name"
                  icon={<Mail className="h-5 w-5" />}
                  {...register('name')}
                  error={errors.name?.message}
                />

                <Input
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                  icon={<Mail className="h-5 w-5" />}
                  {...register('email')}
                  error={errors.email?.message}
                />

                <Input
                  label="Amazon Company Name"
                  placeholder="Your brand/store name"
                  icon={<Building2 className="h-5 w-5" />}
                  {...register('amazonCompany')}
                  error={errors.amazonCompany?.message}
                />

                <Input
                  label="Number"
                  placeholder="+1 (555) 123-4567"
                  icon={<Phone className="h-5 w-5" />}
                  {...register('phone')}
                  error={errors.phone?.message}
                />

                <Textarea
                  label="Additional Details"
                  placeholder="Tell us your current PPC challenges, ACOS targets, and what growth goals you want to hit."
                  rows={5}
                  {...register('additionalDetails')}
                  error={errors.additionalDetails?.message}
                />

                {submitError && (
                  <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {submitError}
                  </p>
                )}

                <div className="rounded-xl border border-lime-400/30 bg-lime-400/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-lime-400">Audit Output</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-lime-400" />
                      Waste spend and bid inefficiency breakdown
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-lime-400" />
                      Keyword and structure improvement map
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-lime-400" />
                      Priority roadmap for next 30 to 60 days
                    </li>
                  </ul>
                </div>

                <Button type="submit" size="lg" loading={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
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
        </div>
      </section>
    </div>
  );
}
