import { Service, CaseStudy } from '@/types';

export const services: Service[] = [
  {
    id: 'campaign-management',
    title: 'Campaign Management',
    description: 'Expert management of your Amazon PPC campaigns to maximize ROI and minimize wasted ad spend.',
    icon: 'Target',
    features: [
      'Daily campaign monitoring',
      'Bid optimization',
      'Budget allocation',
      'Performance tracking'
    ]
  },
  {
    id: 'keyword-research',
    title: 'Keyword Research',
    description: 'Comprehensive keyword analysis to find high-converting search terms for your products.',
    icon: 'Search',
    features: [
      'Competitor analysis',
      'Long-tail keyword discovery',
      'Search volume analysis',
      'Seasonal trends'
    ]
  },
  {
    id: 'ab-testing',
    title: 'A/B Testing',
    description: 'Continuous testing of ad creatives, landing pages, and strategies to improve conversion rates.',
    icon: 'FlaskConical',
    features: [
      'Ad copy testing',
      'Image optimization',
      'Landing page testing',
      'Statistical analysis'
    ]
  },
  {
    id: 'product-listing',
    title: 'Product Listing Optimization',
    description: 'Optimize your product listings to improve organic ranking and PPC performance.',
    icon: 'Package',
    features: [
      'Title optimization',
      'Bullet point enhancement',
      'Backend keywords',
      'A+ content creation'
    ]
  },
  {
    id: 'performance-tracking',
    title: 'Performance Tracking',
    description: 'Detailed analytics and reporting to track your campaign success and growth.',
    icon: 'BarChart3',
    features: [
      'Real-time dashboards',
      'Custom reports',
      'ROI analysis',
      'Trend identification'
    ]
  },
  {
    id: 'strategy-consulting',
    title: 'Strategy Consulting',
    description: 'Strategic guidance to scale your Amazon business and dominate your niche.',
    icon: 'Lightbulb',
    features: [
      'Growth planning',
      'Market expansion',
      'Competitive positioning',
      'Budget optimization'
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'electronics-brand',
    clientName: 'TechGear Pro',
    clientLogo: '/clients/techgear.png',
    title: '324% Increase in Sales',
    description: 'Helped an electronics brand scale from $50K to $212K monthly revenue through strategic PPC optimization.',
    metrics: [
      { label: 'Sales Increase', value: '324%' },
      { label: 'CPC Reduction', value: '-45%' },
      { label: 'ROAS', value: '8.5x' },
      { label: 'Conversion Rate', value: '+127%' }
    ],
    testimonial: 'AmzAdvanta transformed our Amazon business. Their expertise in PPC management helped us achieve unprecedented growth.',
    image: '/case-studies/techgear.jpg'
  },
  {
    id: 'beauty-brand',
    clientName: 'GlowBeauty Co',
    clientLogo: '/clients/glowbeauty.png',
    title: '189% ROAS Achievement',
    description: 'Optimized beauty brand campaigns to achieve exceptional return on ad spend while reducing costs.',
    metrics: [
      { label: 'ROAS', value: '189%' },
      { label: 'Cost Reduction', value: '-32%' },
      { label: 'Impression Share', value: '+67%' },
      { label: 'Click Rate', value: '+89%' }
    ],
    testimonial: 'The team at AmzAdvanta understands the beauty market perfectly. Their data-driven approach delivered outstanding results.',
    image: '/case-studies/glowbeauty.jpg'
  },
  {
    id: 'home-garden',
    clientName: 'GreenLiving Supplies',
    clientLogo: '/clients/greenliving.png',
    title: 'Market Share Expansion',
    description: 'Expanded market presence for home & garden brand through aggressive PPC strategy and keyword domination.',
    metrics: [
      { label: 'Market Share', value: '+45%' },
      { label: 'Keyword Rankings', value: '#1 for 12 terms' },
      { label: 'Monthly Revenue', value: '$180K' },
      { label: 'Year over Year', value: '+256%' }
    ],
    testimonial: 'Their strategic approach helped us dominate our niche. We went from competitor to market leader.',
    image: '/case-studies/greenliving.jpg'
  }
];

export const heroData = {
  title: 'Dominate Amazon with Expert PPC Management',
  subtitle: 'Transform your Amazon business with data-driven PPC strategies that deliver measurable results and maximum ROI.',
  ctaText: 'Get a Free Audit',
  backgroundImage: '/hero/amazon-ppc.jpg'
};

export const clientMetrics = [
  { value: '$50M+', label: 'Ad Spend Managed' },
  { value: '300%', label: 'Average ROI Increase' },
  { value: '150+', label: 'Brands Transformed' },
  { value: '24/7', label: 'Campaign Monitoring' }
];
