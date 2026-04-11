'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerLogos = [
  { name: 'Amazon Ads', logo: '/partners/amazon-ads.svg' },
  { name: 'Walmart', logo: '/partners/walmart.svg' },
  { name: 'TikTok Shop', logo: '/partners/tiktok-shop.svg' },
  { name: 'Shopify', logo: '/partners/shopify.svg' },
  { name: 'Helium 10', logo: '/partners/helium10.svg' },
  { name: 'Klaviyo', logo: '/partners/klaviyo.svg' },
  { name: 'Amazon DSP', logo: '/partners/amazon-dsp.svg' },
  { name: 'Seller Central', logo: '/partners/seller-central.svg' }
];

const marqueeLogos = [...partnerLogos, ...partnerLogos];

interface BrandLogoCarouselProps {
  className?: string;
  delay?: number;
}

const BrandLogoCarousel = ({ className = '', delay = 0 }: BrandLogoCarouselProps) => {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        Trusted By Modern Ecommerce Teams
      </p>
      <div className="relative overflow-hidden rounded-xl border border-[#233560] bg-[#08112a]/65 py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#05070d] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#05070d] to-transparent" />
        <div className="logo-marquee">
          <div className="logo-track">
            {marqueeLogos.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="logo-slide">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={220}
                  height={56}
                  className="h-10 w-auto max-w-full opacity-95"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandLogoCarousel;
