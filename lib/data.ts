import { Service, CaseStudy } from '@/types';

export const services: Service[] = [
  {
    id: 'amazon-ppc',
    title: 'Amazon PPC',
    description: 'Performance-focused ad management built to raise profitable revenue while controlling ACOS and waste.',
    icon: 'Target',
    features: [
      'Campaign architecture and launch',
      'Bid and budget optimization',
      'Search term harvesting and negatives',
      'Weekly reporting with growth actions'
    ]
  },
  {
    id: 'amazon-seo',
    title: 'Amazon SEO',
    description: 'Structured ranking strategy to improve visibility for high-intent terms and increase organic sales velocity.',
    icon: 'Search',
    features: [
      'Keyword mapping by intent',
      'Listing indexing and discoverability audits',
      'Title, bullets, and backend optimization',
      '90-day ranking improvement roadmap'
    ]
  },
  {
    id: 'design-creative',
    title: 'Design',
    description: 'Conversion-led creative assets that improve click-through and conversion across your catalog.',
    icon: 'Package',
    features: [
      'A+ Content and Brand Store design',
      'Main image and gallery creative systems',
      'Infographics and comparison modules',
      'Content refreshes tied to performance data'
    ]
  },
  {
    id: 'platform-management',
    title: 'Platform Management',
    description: 'End-to-end account management to protect momentum and scale your Amazon channel with less operational stress.',
    icon: 'BarChart3',
    features: [
      'Catalog and account health monitoring',
      'Inventory and listing issue resolution',
      'Cross-team growth planning',
      'Continuous optimization cycles'
    ]
  }
];

const stockImages = {
  strategyDesk: 'https://images.unsplash.com/photo-1651684195895-38708dc94cfa?auto=format&fit=crop&w=1600&q=80',
  meetingLaptop: 'https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=1600',
  businessPlanning: 'https://images.pexels.com/photos/8134002/pexels-photo-8134002.jpeg?auto=compress&cs=tinysrgb&w=1600',
  warehouseAerial: 'https://images.pexels.com/photos/11881295/pexels-photo-11881295.jpeg?auto=compress&cs=tinysrgb&w=1600',
  logisticsTruck: 'https://images.pexels.com/photos/21838827/pexels-photo-21838827.jpeg?auto=compress&cs=tinysrgb&w=1600',
  packagingLine: 'https://images.pexels.com/photos/9594419/pexels-photo-9594419.jpeg?auto=compress&cs=tinysrgb&w=1600',
  storageShelves: 'https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?auto=compress&cs=tinysrgb&w=1600',
  boxHandling: 'https://images.pexels.com/photos/4487361/pexels-photo-4487361.jpeg?auto=compress&cs=tinysrgb&w=1600',
  strategySession: 'https://images.pexels.com/photos/15141500/pexels-photo-15141500.jpeg?auto=compress&cs=tinysrgb&w=1600',
  laptopReview: 'https://images.pexels.com/photos/4872045/pexels-photo-4872045.jpeg?auto=compress&cs=tinysrgb&w=1600',
  warehouseRows: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1600',
  packageCloseup: 'https://images.pexels.com/photos/9594430/pexels-photo-9594430.jpeg?auto=compress&cs=tinysrgb&w=1600',
  boxDelivery: 'https://images.pexels.com/photos/10418015/pexels-photo-10418015.jpeg?auto=compress&cs=tinysrgb&w=1600'
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'pet-treats-million-month-transition',
    clientName: 'Leading Pet Treats Brand',
    clientLogo: '/clients/pet-treats.png',
    category: 'Pet Supplies',
    serviceType: 'Amazon PPC',
    title: 'How We Scaled a Pet Treats Brand to $1.04M in Monthly Revenue While Acquiring 60,000+ New Customers',
    shortSummary: 'Seamless strategist transition followed by aggressive acquisition and ranking expansion.',
    description: 'A high-performing pet treats account stayed stable through an internal team transition, then accelerated into its first seven-figure revenue month through focused acquisition and placement strategy.',
    metrics: [
      { label: 'Monthly Revenue', value: '$1.04M' },
      { label: 'New Customers', value: '60K+' },
      { label: 'Revenue Growth', value: '+3.6x' },
      { label: 'TACoS Trend', value: '-70%' }
    ],
    testimonial: 'The transition was seamless and the scale that followed was beyond expectations.',
    image: stockImages.strategyDesk,
    chartImage: '/case-studies/revenue-growth-charts-1.png',
    insightTitle: 'From Stable Performance to Breakout Growth',
    insightPoints: [
      'New-to-brand acquisition scaled from around twenty thousand to more than sixty thousand monthly customers in the Q4 push.',
      'Revenue crossed seven figures while organic sales rose in parallel, proving the growth was compounding, not temporary.'
    ],
    overview: [
      'This case study follows a well-known pet treats brand in one of Amazon\'s most competitive categories.',
      'The account had been strong for over a year when an internal team transition required a new strategist to take ownership.',
      'Instead of losing momentum, the handoff was clean, performance was preserved, and new growth levers pushed the account to its first seven-figure month within months.'
    ],
    challenges: [
      'A complex, high-performing account required a seamless strategist handoff without disruption.',
      'Category competition was intense, with aggressive CPC pressure on high-value keywords.',
      'Spend needed to scale while TACoS remained in an acceptable efficiency range.',
      'New-to-brand acquisition was the main objective, not just branded recapture.',
      'Budget constraints in key windows forced strict allocation decisions.',
      'These were not broken campaigns, they were growth ceilings that had to be broken.'
    ],
    approach: [
      {
        title: 'Seamless Handoff, Then Acceleration',
        description:
          'The new strategist inherited documented campaign structure, bidding logic, and promo cadence. We kept what was working and layered new growth experiments without client-side disruption.'
      },
      {
        title: 'Aggressive Top-of-Search Investment',
        description:
          'Top-of-search bids were increased in ranking campaigns where conversion rates justified the cost. Higher CPCs were accepted only when profitability and rank impact were clear.'
      },
      {
        title: 'Promotional Budget Concentration',
        description:
          'Budget was concentrated around high-conversion windows including deals and Subscribe and Save pushes, then reduced outside those windows to preserve efficiency.'
      },
      {
        title: 'New-to-Brand Acquisition Engine',
        description:
          'An AMC lookalike built from high-value customers was combined with new-to-brand targeting. Competitor campaigns were scaled while branded spend was intentionally constrained.'
      },
      {
        title: 'Disciplined Execution Under Constraints',
        description:
          'When budgets tightened, dayparting shifted spend to peak conversion hours. Ranking campaigns maintained coverage, category tests received dedicated budgets, and video ads created incremental revenue.'
      },
      {
        title: 'Cross-Channel Confirmation',
        description:
          'Organic growth increased alongside paid performance, confirming the strategy was creating lasting demand rather than temporary paid spikes.'
      }
    ],
    outcomes: [
      'First seven-figure revenue month achieved after transition period.',
      'New-to-brand acquisition expanded from roughly 20K to over 60K monthly.',
      'Higher organic sales moved in step with paid growth, strengthening long-term demand.',
      'Scale achieved without sacrificing strategic efficiency discipline.'
    ]
  },
  {
    id: 'premium-home-brand-amazon-launch',
    clientName: 'Premium Home Brand',
    clientLogo: '/clients/home-brand.png',
    category: 'Home and Lifestyle',
    serviceType: 'Platform Management',
    title: 'How a Premium Home Brand Launched on Amazon Without Sacrificing Price or D2C Performance',
    shortSummary: 'Marketplace entry strategy that protected direct channel economics.',
    description: 'We launched a premium home brand on Amazon while protecting D2C pricing power and preserving brand position.',
    metrics: [
      { label: 'Launch Revenue', value: '$3.2M' },
      { label: 'MAP Compliance', value: '99%' },
      { label: 'Ad ROAS', value: '7.9x' },
      { label: 'D2C Retention', value: 'Protected' }
    ],
    testimonial: 'Amazon growth came in without cannibalizing our core channel.',
    image: stockImages.packagingLine,
    chartImage: stockImages.boxDelivery,
    insightTitle: 'Launch Scale Without Channel Conflict',
    insightPoints: [
      'The catalog launched in phases so ad spend supported margin-safe SKUs first and high-risk items later.',
      'Strict buy-box and pricing controls protected D2C conversion while Amazon revenue accelerated.'
    ],
    overview: [
      'This premium home brand had strong D2C equity and wanted Amazon growth without damaging direct-channel economics.',
      'The leadership team needed a controlled launch model that preserved premium perception and protected pricing.',
      'Our platform management framework aligned catalog, pricing, operations, and media so growth happened without brand dilution.'
    ],
    challenges: [
      'Maintain premium pricing while entering a discount-driven marketplace.',
      'Avoid cannibalizing repeat D2C customers during initial launch months.',
      'Control listing quality and catalog hygiene across many parent-child variations.',
      'Forecast inventory accurately while ad demand was still unproven.',
      'Keep operational response fast during launch-week listing and suppression events.'
    ],
    approach: [
      {
        title: 'Tiered Catalog Rollout',
        description:
          'Launch waves were sequenced by margin strength, review readiness, and supply confidence rather than releasing all SKUs at once.'
      },
      {
        title: 'MAP and Buy-Box Controls',
        description:
          'Operational guardrails were set around price floors, coupon rules, and unauthorized seller monitoring to keep positioning intact.'
      },
      {
        title: 'Launch Calendar by Demand Window',
        description:
          'Promotions, media pushes, and replenishment were synchronized around high-intent shopping windows to avoid budget leakage.'
      },
      {
        title: 'Cross-Channel Messaging Alignment',
        description:
          'Listing content and storefront messaging mirrored D2C value propositions so channel expansion felt brand-consistent.'
      },
      {
        title: 'Daily Platform Operations',
        description:
          'Our team handled suppression fixes, variation corrections, and attribution checks in real time during launch ramps.'
      }
    ],
    outcomes: [
      'Multi-million-dollar launch achieved without MAP erosion.',
      'D2C retention remained stable while Amazon scaled.',
      'Operational incidents were resolved quickly with no major momentum loss.',
      'Brand perception stayed premium across both channels.'
    ]
  },
  {
    id: 'adaptive-apparel-profit-rebuild',
    clientName: 'Adaptive Apparel Co',
    clientLogo: '/clients/adaptive-apparel.png',
    category: 'Apparel',
    serviceType: 'Amazon SEO',
    title: 'How We Rebuilt Demand to Restore Profitable Growth in Premium Apparel',
    shortSummary: 'Intent-segmented spend shifted performance from stagnant to profitable scale.',
    description: 'A premium apparel account regained profitable growth by rebuilding campaign architecture around high-intent demand pockets.',
    metrics: [
      { label: 'Revenue Mix', value: '56% HI Demand' },
      { label: 'ROAS', value: '8.1x' },
      { label: 'CVR Lift', value: '+42%' },
      { label: 'Wasted Spend', value: '-38%' }
    ],
    testimonial: 'Demand quality improved and margin recovered quickly.',
    image: stockImages.meetingLaptop,
    chartImage: stockImages.businessPlanning,
    insightTitle: 'Search Intent Cleanup Drove Profit Recovery',
    insightPoints: [
      'Keyword clusters were rebuilt by intent so spending focused on purchase-ready traffic, not research traffic.',
      'Listing relevance and index coverage improved together, lifting conversion while reducing wasted clicks.'
    ],
    overview: [
      'This apparel account had respectable top-line revenue but shrinking contribution margin month after month.',
      'The core issue was poor intent matching between search terms, listing relevance, and bid allocation.',
      'We treated the turnaround as an SEO-led restructuring project supported by tighter PPC routing.'
    ],
    challenges: [
      'Large keyword universe with mixed intent and duplicate coverage across campaigns.',
      'Low-converting search traffic inflating spend without quality order growth.',
      'Listing copy drifted from top-converting search language.',
      'Category competition pushed CPC up on broad terms.',
      'Leadership required profitability gains without reducing visibility.'
    ],
    approach: [
      {
        title: 'Keyword Intent Mapping',
        description:
          'Search terms were grouped into transactional, comparison, and discovery buckets and assigned separate budget logic.'
      },
      {
        title: 'Listing Relevance Rebuild',
        description:
          'Titles, bullets, and backend fields were rewritten around high-converting terms to improve both indexing and conversion.'
      },
      {
        title: 'Query-to-ASIN Routing',
        description:
          'Each major query cluster was mapped to the best-converting ASIN to reduce mismatch and lift session value.'
      },
      {
        title: 'SEO and PPC Sync Cadence',
        description:
          'Weekly search term insights directly informed listing updates so ranking and ad efficiency improved together.'
      },
      {
        title: 'Negative and Match-Type Discipline',
        description:
          'Broad discovery was retained where useful, but negatives and exact isolation prevented recurring inefficiency.'
      }
    ],
    outcomes: [
      'Conversion rate improved significantly on priority ASINs.',
      'High-intent terms contributed the majority of ad-attributed revenue.',
      'Waste from low-intent clicks declined materially.',
      'The account returned to profitable growth without sacrificing rank momentum.'
    ]
  },
  {
    id: 'skincare-tacos-turnaround',
    clientName: 'D2C Skincare Brand',
    clientLogo: '/clients/skincare.png',
    category: 'Beauty',
    serviceType: 'Amazon PPC',
    title: 'From 50% Plus TACoS to Scalable Growth',
    shortSummary: 'High TACoS account normalized through structured campaign control.',
    description: 'A competitive skincare account moved from runaway TACoS to controlled growth through tighter budget routing and keyword pruning.',
    metrics: [
      { label: 'Revenue', value: '+3.6x' },
      { label: 'TACoS', value: '-70%' },
      { label: 'ROAS', value: '6.4x' },
      { label: 'CPC Trend', value: 'Stabilized' }
    ],
    testimonial: 'We finally scaled without burning margin every month.',
    image: stockImages.packageCloseup,
    chartImage: stockImages.boxHandling,
    insightTitle: 'Efficiency Recovered Before Aggressive Scaling',
    insightPoints: [
      'Campaign controls reduced non-performing traffic first, then budget was shifted to proven converting terms.',
      'TACoS dropped sharply while revenue rose, proving the scale was quality-led instead of spend-led.'
    ],
    overview: [
      'The brand had strong product-market fit but ad structure drift caused rising TACoS and unstable pacing.',
      'Budget was being spent too evenly across broad and low-value placements.',
      'We rebuilt the account around a PPC operating system focused on efficiency first, then controlled scale.'
    ],
    challenges: [
      'TACoS exceeded acceptable levels and threatened contribution margin.',
      'Overlapping campaign structures created internal bid competition.',
      'Category CPC volatility made overspend windows expensive.',
      'Branded traffic consumed disproportionate budget share.',
      'Client required both short-term correction and long-term growth.'
    ],
    approach: [
      {
        title: 'Campaign Architecture Reset',
        description:
          'Campaigns were reorganized by objective and intent with strict query isolation to remove overlap.'
      },
      {
        title: 'Budget Routing by Efficiency Bands',
        description:
          'Daily spend was allocated toward top-performing ad groups while underperforming pockets were throttled quickly.'
      },
      {
        title: 'Placement and Bid Multipliers',
        description:
          'Top-of-search and product-page multipliers were recalibrated using conversion and margin thresholds.'
      },
      {
        title: 'Aggressive Search Term Pruning',
        description:
          'Low-yield terms were excluded at scale, reducing repeat waste and improving learning signal quality.'
      },
      {
        title: 'Promo-Window Intensification',
        description:
          'Spend expanded during conversion spikes and contracted outside demand peaks to preserve economics.'
      }
    ],
    outcomes: [
      'TACoS trend reversed from unsustainable to controlled.',
      'Revenue scaled multiple times over baseline.',
      'ROAS and pacing stability improved in parallel.',
      'The account moved from firefighting to repeatable growth operations.'
    ]
  },
  {
    id: 'prime-deal-home-brand-growth',
    clientName: 'Premium Home Goods',
    clientLogo: '/clients/homegoods.png',
    category: 'Home Goods',
    serviceType: 'Platform Management',
    title: 'Premium Home Brand Boosted Ad Sales by 18% Without More Spend',
    shortSummary: 'Promotion-window concentration unlocked higher returns from the same budget.',
    description: 'We re-timed spend into high-conversion deal windows and lifted ad-attributed sales without increasing total media budget.',
    metrics: [
      { label: 'Ad Sales Lift', value: '+18%' },
      { label: 'Budget Increase', value: '0%' },
      { label: 'CTR', value: '+22%' },
      { label: 'Efficiency', value: 'Improved' }
    ],
    testimonial: 'Same budget, stronger outcomes, and cleaner pacing.',
    image: stockImages.logisticsTruck,
    chartImage: stockImages.warehouseRows,
    insightTitle: 'Budget Timing Beat Budget Expansion',
    insightPoints: [
      'The team concentrated spend into high-conversion windows instead of increasing total spend.',
      'Deal-event alignment improved CTR and conversion enough to lift sales with the same monthly budget.'
    ],
    overview: [
      'The account had healthy demand but inefficient pacing diluted returns across low-conversion days.',
      'Leadership wanted measurable growth without approving additional media spend.',
      'Our platform management team treated calendar strategy, inventory, and ad budgets as one planning system.'
    ],
    challenges: [
      'Fixed monthly budget with ambitious growth target.',
      'Demand spikes were not being fully captured during promotional windows.',
      'Pacing controls caused early-day overspend and late-day missed opportunities.',
      'Inventory protection was required during high-velocity periods.',
      'Client expected stronger forecasting and clearer budget governance.'
    ],
    approach: [
      {
        title: 'Calendar-Led Spend Blueprint',
        description:
          'Quarterly and monthly calendars were rebuilt around Prime events, coupons, and promo depth.'
      },
      {
        title: 'Intra-Day Budget Controls',
        description:
          'Dayparting and hourly pacing rules prioritized high-converting windows and reduced low-efficiency hours.'
      },
      {
        title: 'Inventory-Aware Scaling',
        description:
          'Spend expansion was tied to stock health to avoid overdriving traffic into low-availability periods.'
      },
      {
        title: 'Promo Creative and Offer Sync',
        description:
          'Ad messaging and on-listing offers were synchronized for each deal window to improve click intent quality.'
      },
      {
        title: 'Weekly Governance Rhythm',
        description:
          'Performance reviews included budget reallocation decisions every week instead of monthly resets.'
      }
    ],
    outcomes: [
      'Ad sales increased without any total budget increase.',
      'Pacing became more predictable and less wasteful.',
      'Promo windows delivered significantly stronger efficiency.',
      'The account established a repeatable event-based growth playbook.'
    ]
  },
  {
    id: 'home-goods-margin-lift',
    clientName: 'Household Essentials Brand',
    clientLogo: '/clients/household.png',
    category: 'Household',
    serviceType: 'Amazon SEO',
    title: 'Incrementum-Style Win for Home Goods Brand With 450% Margin Growth',
    shortSummary: 'Profit-first campaign design transformed account economics.',
    description: 'By prioritizing contribution margin over raw top-line volume, we rebuilt campaign logic for profitable expansion.',
    metrics: [
      { label: 'Net Margin', value: '+450%' },
      { label: 'AOV', value: '+19%' },
      { label: 'ROAS', value: '9.2x' },
      { label: 'Budget Efficiency', value: 'Up' }
    ],
    testimonial: 'The account became healthier and more scalable at the same time.',
    image: stockImages.storageShelves,
    chartImage: stockImages.packagingLine,
    insightTitle: 'Profitability Improved Without Killing Growth',
    insightPoints: [
      'Search visibility shifted toward higher-margin product families and better-converting term clusters.',
      'AOV and margin expanded together as traffic quality improved and unprofitable demand was filtered out.'
    ],
    overview: [
      'This home goods brand had respectable revenue but low retained profit due to weak query quality and mix imbalance.',
      'The team needed stronger margin outcomes without losing search presence in core categories.',
      'We executed an SEO-priority plan supported by selective paid amplification on profitable terms only.'
    ],
    challenges: [
      'Revenue growth masked weak bottom-line performance.',
      'High-volume terms attracted low-margin or low-conversion traffic.',
      'Catalog pages were not optimized for profitable keyword opportunities.',
      'Ad spend favored volume instead of contribution margin.',
      'Stakeholders needed transparent proof of profit improvement.'
    ],
    approach: [
      {
        title: 'Margin-Weighted Keyword Prioritization',
        description:
          'Keyword strategy was rebuilt so ranking and spend focused on terms linked to stronger contribution margin.'
      },
      {
        title: 'Listing and Content Refinement',
        description:
          'Titles, bullets, and A plus copy were aligned with high-value queries and clarified differentiation.'
      },
      {
        title: 'Profit-Focused Traffic Routing',
        description:
          'Low-value term groups were deprioritized while high-margin term groups received stronger placement support.'
      },
      {
        title: 'ASIN Mix Optimization',
        description:
          'Campaign structure was adjusted to increase exposure for products with healthier unit economics.'
      },
      {
        title: 'Weekly Profitability Reporting',
        description:
          'Decision dashboards tracked margin by keyword family, making reallocation decisions faster and objective.'
      }
    ],
    outcomes: [
      'Net margin improved substantially alongside revenue growth.',
      'Average order value increased with stronger product mix quality.',
      'ROAS rose while inefficient demand was reduced.',
      'The account became profitable enough to support sustainable scale.'
    ]
  },
  {
    id: 'supplements-ntb-acquisition-surge',
    clientName: 'Nutrition Supplements Co',
    clientLogo: '/clients/supplements.png',
    category: 'Supplements',
    serviceType: 'Amazon PPC',
    title: 'Supplements Brand Tripled New-to-Brand Acquisition in One Quarter',
    shortSummary: 'Audience expansion and conquest strategy drove rapid customer growth.',
    description: 'New-to-brand growth accelerated through lookalike segmentation and disciplined competitor targeting.',
    metrics: [
      { label: 'NTB Growth', value: '3x' },
      { label: 'Monthly NTB', value: '62K' },
      { label: 'Revenue', value: '+128%' },
      { label: 'Branded Share', value: 'Down' }
    ],
    testimonial: 'Customer acquisition quality improved while volume surged.',
    image: stockImages.warehouseAerial,
    chartImage: stockImages.strategySession,
    insightTitle: 'Acquisition Engine Replaced Branded Dependence',
    insightPoints: [
      'Lookalike and competitor conquest audiences became the primary engine for new customer growth.',
      'Branded spend share was intentionally reduced while total monthly revenue kept climbing.'
    ],
    overview: [
      'The supplements account had plateaued because growth depended heavily on branded demand recapture.',
      'Leadership wanted aggressive new customer growth without losing efficiency discipline.',
      'We built a PPC acquisition framework centered on net-new demand and controlled conquest expansion.'
    ],
    challenges: [
      'Overdependence on branded keywords limited incremental growth.',
      'High category competition made conquest campaigns expensive.',
      'New audience segments required stronger relevance to convert.',
      'Budget had to scale without destabilizing account-level TACoS.',
      'Client needed clear proof that growth was truly new-to-brand.'
    ],
    approach: [
      {
        title: 'Audience Tiering by Value Potential',
        description:
          'Prospects were segmented into value tiers with distinct bid and budget rules for each funnel stage.'
      },
      {
        title: 'Conquest Campaign Expansion',
        description:
          'Competitor targeting was broadened with strict profitability thresholds and rapid pruning loops.'
      },
      {
        title: 'NTB-First Budget Allocation',
        description:
          'Budget was shifted away from branded recapture and redirected into category and competitor acquisition.'
      },
      {
        title: 'Creative Message Testing',
        description:
          'Sponsored Brand and video creatives were tested around proof points that converted first-time buyers.'
      },
      {
        title: 'Weekly NTB Validation',
        description:
          'AMC insights were reviewed weekly to ensure growth came from genuinely new audiences.'
      }
    ],
    outcomes: [
      'New-to-brand customer volume tripled in one quarter.',
      'Revenue increased while branded dependency declined.',
      'Acquisition campaigns became a repeatable scale channel.',
      'The account gained stronger long-term growth headroom.'
    ]
  },
  {
    id: 'beauty-cpc-efficiency-turnaround',
    clientName: 'GlowBeauty Co',
    clientLogo: '/clients/glowbeauty.png',
    category: 'Beauty',
    serviceType: 'Amazon PPC',
    title: 'Beauty Brand Improved CPC Efficiency While Scaling Sales',
    shortSummary: 'CPC pressure was reduced without reducing growth velocity.',
    description: 'Strategic match-type control and placement filtering reduced waste while keeping momentum in a crowded category.',
    metrics: [
      { label: 'CPC Change', value: '-32%' },
      { label: 'Sales', value: '+89%' },
      { label: 'ROAS', value: '7.1x' },
      { label: 'Impression Share', value: '+67%' }
    ],
    testimonial: 'Costs went down while our growth trajectory stayed strong.',
    image: stockImages.boxHandling,
    chartImage: stockImages.packageCloseup,
    insightTitle: 'Lower CPC, Stronger Reach, Better Output',
    insightPoints: [
      'Bid controls and placement logic reduced inflated clicks in costly pockets of the category.',
      'Impression share still expanded, showing efficiency gains came from smarter routing, not reduced ambition.'
    ],
    overview: [
      'This beauty brand operated in one of the most expensive ad environments on Amazon.',
      'Rising CPCs were squeezing returns and forcing difficult budget tradeoffs.',
      'Our PPC team built a tighter efficiency framework that preserved scale while reducing average click cost.'
    ],
    challenges: [
      'CPC inflation was outpacing conversion and margin improvements.',
      'Broad match discovery campaigns leaked budget into weak queries.',
      'High competition on brand-adjacent terms increased volatility.',
      'Existing structure made it hard to isolate efficient placements.',
      'Leadership wanted lower CPC without a sales slowdown.'
    ],
    approach: [
      {
        title: 'Placement Filtering Framework',
        description:
          'Budget was shifted toward placements with proven efficiency and away from low-yield inventory.'
      },
      {
        title: 'Match-Type Containment',
        description:
          'Exact and phrase structures were strengthened while broad remained controlled for exploration only.'
      },
      {
        title: 'Bid Elasticity Modeling',
        description:
          'Bid adjustments were tied to conversion and margin movement, not just click volume targets.'
      },
      {
        title: 'Fast Negative Expansion',
        description:
          'Search term negatives were scaled weekly to stop repeat leakage as the account expanded.'
      },
      {
        title: 'Creative and Offer Support',
        description:
          'Offer timing and ad creative were tuned to increase conversion so lower CPC translated into stronger unit economics.'
      }
    ],
    outcomes: [
      'Average CPC dropped significantly.',
      'Sales and impression share both increased.',
      'ROAS improved in a high-pressure category.',
      'The account became more resilient to competitive bid shocks.'
    ]
  },
  {
    id: 'kitchen-brand-creative-rebuild',
    clientName: 'KitchenPlus',
    clientLogo: '/clients/kitchenplus.png',
    category: 'Kitchen',
    serviceType: 'Design',
    title: 'Creative Rebuild Helped Kitchen Brand Unlock Conversion Lift',
    shortSummary: 'Creative overhaul plus campaign alignment raised conversion and rank.',
    description: 'Listing creatives, A plus content, and campaign structure were rebuilt together to improve conversion and reduce friction.',
    metrics: [
      { label: 'CVR Lift', value: '+127%' },
      { label: 'Revenue', value: '+93%' },
      { label: 'ROAS', value: '8.0x' },
      { label: 'Keyword Rank', value: 'Up' }
    ],
    testimonial: 'The creative and media connection changed account performance.',
    image: stockImages.laptopReview,
    chartImage: stockImages.meetingLaptop,
    insightTitle: 'Design-Led Conversion Growth',
    insightPoints: [
      'Main image hierarchy and A plus blocks were rebuilt around shopper objections and decision flow.',
      'Once creative friction dropped, paid traffic converted better and ranking campaigns became more efficient.'
    ],
    overview: [
      'The kitchen brand had solid traffic but weak conversion due to unclear visual communication on listing pages.',
      'Ad spend was pushing sessions, yet product detail pages were not closing demand efficiently.',
      'We treated this as a design-led conversion project, then aligned media execution behind the new assets.'
    ],
    challenges: [
      'Gallery images did not communicate differentiators clearly.',
      'A plus content lacked structure for comparison-stage shoppers.',
      'Brand store flow created friction between exploration and purchase.',
      'Campaign performance suffered because listing conversion was weak.',
      'Client needed better creative throughput without long production cycles.'
    ],
    approach: [
      {
        title: 'Conversion-Focused Creative Briefing',
        description:
          'Creative strategy started from search intent and objection mapping, not just visual polish.'
      },
      {
        title: 'Main Image and Gallery Rebuild',
        description:
          'Primary images, infographics, and comparison frames were rebuilt to improve first-scroll clarity.'
      },
      {
        title: 'A Plus Narrative Structure',
        description:
          'Modules were reordered to follow shopper decision logic: trust, proof, comparison, and action.'
      },
      {
        title: 'Storefront Experience Update',
        description:
          'Brand store sections were redesigned to support category navigation and bundle discovery.'
      },
      {
        title: 'Media-Creative Feedback Loop',
        description:
          'PPC performance data fed back into creative iterations every sprint so design kept improving against outcomes.'
      }
    ],
    outcomes: [
      'Conversion rate more than doubled on focus ASINs.',
      'Revenue and ROAS climbed after creative deployment.',
      'Ranking campaigns gained traction with stronger PDP performance.',
      'Creative production became more systematic and scalable.'
    ]
  },
  {
    id: 'electronics-dsp-expansion',
    clientName: 'TechGear Pro',
    clientLogo: '/clients/techgear.png',
    category: 'Electronics',
    serviceType: 'Platform Management',
    title: 'Electronics Brand Expanded With DSP to Capture Incremental Demand',
    shortSummary: 'Upper funnel demand capture translated into stronger bottom funnel performance.',
    description: 'DSP and Sponsored Ads were coordinated to lift branded search volume and incremental conversion efficiency.',
    metrics: [
      { label: 'Incremental Revenue', value: '+41%' },
      { label: 'New Sessions', value: '+58%' },
      { label: 'ROAS', value: '6.8x' },
      { label: 'Brand Search Lift', value: '+35%' }
    ],
    testimonial: 'Upper funnel media finally produced measurable lower funnel impact.',
    image: stockImages.strategySession,
    chartImage: stockImages.warehouseAerial,
    insightTitle: 'Upper Funnel Became a Measurable Growth Lever',
    insightPoints: [
      'DSP audience layers generated incremental branded search and stronger retargeting efficiency.',
      'Platform orchestration connected awareness and conversion campaigns into one accountable system.'
    ],
    overview: [
      'This electronics brand had strong product demand but was over-reliant on bottom-funnel campaigns for growth.',
      'Management wanted a scalable way to create incremental demand, not just harvest existing search volume.',
      'We deployed a platform-managed DSP plus Sponsored Ads framework with unified measurement and pacing.'
    ],
    challenges: [
      'Bottom-funnel saturation limited additional growth headroom.',
      'DSP investment needed clear accountability to conversion outcomes.',
      'Audience overlap risk threatened incremental efficiency.',
      'Cross-channel reporting was fragmented and slowed decisions.',
      'Budget planning required stronger full-funnel forecasting.'
    ],
    approach: [
      {
        title: 'Audience Ladder Design',
        description:
          'Prospecting, consideration, and retargeting pools were structured with clear budget ownership and exclusion rules.'
      },
      {
        title: 'DSP and Sponsored Ads Orchestration',
        description:
          'DSP reach campaigns fed retargeting and search capture campaigns to convert newly created demand efficiently.'
      },
      {
        title: 'Incrementality Measurement',
        description:
          'Brand search lift and session growth were monitored alongside ROAS to verify true demand creation.'
      },
      {
        title: 'Creative and Frequency Governance',
        description:
          'Creative rotations and frequency caps prevented fatigue while preserving message consistency.'
      },
      {
        title: 'Operational Control Tower',
        description:
          'Weekly cross-channel reviews aligned audience expansion, spend shifts, and inventory readiness.'
      }
    ],
    outcomes: [
      'Incremental revenue increased with stronger session growth.',
      'Brand search volume rose, improving lower-funnel efficiency.',
      'DSP became a controlled scale channel rather than an experimental spend bucket.',
      'The account gained a more durable full-funnel growth model.'
    ]
  }
];

export const getCaseStudyById = (id: string) => caseStudies.find((study) => study.id === id);

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
