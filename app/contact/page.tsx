'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Mail, Phone, MapPin, Send, Loader2, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Contact form submitted:', data);
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
            Message Sent Successfully!
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Thank you for reaching out. We've received your message and will get back to you 
            within 24 hours. We look forward to helping you grow your Amazon business.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="lg"
          >
            Send Another Message
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
              Get in
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to take your Amazon business to the next level? 
              Our team of PPC experts is here to help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  {...register('name')}
                  error={errors.name?.message}
                />
                <Input
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                />
                <Input
                  label="Subject"
                  placeholder="How can we help you?"
                  {...register('subject')}
                  error={errors.subject?.message}
                />
                <Textarea
                  label="Message"
                  placeholder="Tell us about your Amazon business and your goals..."
                  rows={6}
                  {...register('message')}
                  error={errors.message?.message}
                />

                <Button
                  type="submit"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-8">
                Have questions? Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-400">info@amzadvanta.com</p>
                    <p className="text-gray-500 text-sm">support@amzadvanta.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                    <p className="text-gray-400">123 Business Ave, Suite 100</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/free-audit"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Request a Free Audit</span>
                  </a>
                  <a
                    href="/services"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>View Our Services</span>
                  </a>
                  <a
                    href="/case-studies"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Read Success Stories</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Visit Our
              <span className="text-gradient"> Office</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Located in the heart of New York City, we're strategically positioned 
              to serve Amazon businesses across the globe.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-2xl border border-gray-800 h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Interactive Map</p>
              <p className="text-white text-2xl font-bold mt-2">New York, NY</p>
              <p className="text-gray-500 mt-2">Google Maps integration would go here</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Frequently Asked
              <span className="text-gradient"> Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I expect to see results?",
                answer: "Most clients see initial improvements within 2-4 weeks, with significant results typically appearing within 60-90 days as campaigns optimize and data accumulates."
              },
              {
                question: "What makes you different from other PPC agencies?",
                answer: "We specialize exclusively in Amazon PPC, offering deep platform expertise, proprietary optimization strategies, and a focus on measurable ROI rather than just vanity metrics."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we work with Amazon sellers from startups spending $1,000/month to enterprise brands spending $100,000+/month. We customize our approach based on your budget and goals."
              },
              {
                question: "How do you measure success?",
                answer: "We focus on metrics that matter: ROAS, profit margin, sales growth, and market share. We provide detailed weekly reports showing clear progress toward your specific business objectives."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
