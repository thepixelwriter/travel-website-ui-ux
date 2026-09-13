import { useEffect, useState } from 'react'
import './App.css'

const portfolioItems = [
  {
    id: 'docreferral',
    title: 'DocReferral Healthcare Platform',
    iconUrl: '/assets/reference/portfolio-icons/icon-0.png',
    category: 'Healthcare',
    platform: 'iOS, Android & Web',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    description: 'Comprehensive medical provider referral and discovery platform enabling doctors to seamlessly refer patients and track care outcomes.',
    appStoreUrl: 'https://itunes.apple.com/us/app/docreferral/id123456789',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.docreferral',
  },
  {
    id: 'environmental-impact-calculator',
    title: 'JT Environmental Impact Calculator',
    iconUrl: '/assets/reference/portfolio-icons/icon-1.png',
    category: 'Education & Utility',
    platform: 'iOS, Android & Web',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    description: 'Utility calculator enabling commercial and residential users to measure environmental compliance and energy footprint savings.',
    appStoreUrl: 'https://itunes.apple.com/us/app/environmental-impact-calculator/id546039981',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jtenvironmental.calculator',
  },
  {
    id: 'wing-zone',
    title: 'Wing Zone Restaurant App',
    iconUrl: '/assets/reference/portfolio-icons/icon-2.png',
    category: 'Food & Dining',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description: 'Mobile food ordering, customized wing flavor builder, and loyalty rewards app for the popular Wing Zone restaurant franchise chain.',
    appStoreUrl: 'https://itunes.apple.com/us/app/wing-zone/id645497379?mt=8',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.app_wingz.layout',
  },
  {
    id: 'palm-springs',
    title: 'Palm Springs Mid-Century Modern Guide',
    iconUrl: '/assets/reference/portfolio-icons/icon-3.png',
    category: 'Travel & Lifestyle',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    description: 'Self-guided architectural tour and mapping guide featuring iconic mid-century modern homes and desert landmarks in Palm Springs.',
    appStoreUrl: 'https://itunes.apple.com/us/app/palm-springs-modern-mid-century/id576934996?mt=8',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.itgc1.palmsprings',
  },
  {
    id: 'jama-network-challenge',
    title: 'The JAMA Network Challenge',
    iconUrl: '/assets/reference/portfolio-icons/icon-4.png',
    category: 'Healthcare',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
    description: 'Interactive medical knowledge quiz and peer challenge platform developed for Journal of the American Medical Association readers.',
    appStoreUrl: 'https://itunes.apple.com/us/app/the-jama-network-challenge/id927371260?mt=8',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.itgc.jnchallenge&hl=en',
  },
  {
    id: 'dream-moods',
    title: 'Dream Moods Dictionary & Journal',
    iconUrl: '/assets/reference/portfolio-icons/icon-5.png',
    category: 'Lifestyle & Entertainment',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=900&q=80',
    description: 'Official mobile app for DreamMoods.com featuring a comprehensive 6000+ word dream dictionary and dream journal tracker.',
    appStoreUrl: 'https://itunes.apple.com/us/app/dream-moods/id550677879?mt=8',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.itgc.dreammoods.ui',
  },
  {
    id: 'hp-enterprise-printers',
    title: 'HP Enterprise Printers Sales Tool',
    iconUrl: '/assets/reference/portfolio-icons/icon-6.png',
    category: 'Enterprise & Business',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    description: 'Enterprise sales enablement tool showcasing HP printer specifications, product catalog demos, and ROI calculators.',
    appStoreUrl: 'https://apps.apple.com/us/app/hp-enterprise-sales/id550751827',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hp.app',
  },
  {
    id: 'vsos-emergency-response-app',
    title: 'VSOS Panic & Emergency Response System',
    iconUrl: '/assets/reference/portfolio-icons/icon-7.png',
    category: 'Education & Utility',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80',
    description: 'Instant emergency broadcast and SOS panic alert application linking users with local emergency contacts and GPS location sharing.',
    appStoreUrl: 'https://apps.apple.com/us/app/vsos-emergency/id987654321',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vsos.emergency',
  },
  {
    id: 'swint-real-estate',
    title: 'Swint Real Estate Mobile App',
    iconUrl: '/assets/reference/portfolio-icons/icon-8.png',
    category: 'Real Estate',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    description: 'Mobile MLS search, interactive map listings, mortgage calculator, and agent scheduling app for Swint Real Estate buyers.',
    appStoreUrl: 'https://itunes.apple.com/us/app/swint-real-estate/id561234567',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.swint.realestate',
  },
  {
    id: 'ibleed',
    title: 'iBleed Hemophilia Healthcare Tracker',
    iconUrl: '/assets/reference/portfolio-icons/icon-9.png',
    category: 'Healthcare',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    description: 'Specialized healthcare tracking log for hemophilia patients and caregivers to record bleed incidents and medication doses.',
    appStoreUrl: 'https://apps.apple.com/us/app/ibleed/id876543210',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ibleed.app',
  },
  {
    id: 'sienna-restaurant',
    title: 'Sienna Restaurant Dining App',
    iconUrl: '/assets/reference/portfolio-icons/icon-10.png',
    category: 'Food & Dining',
    platform: 'iOS Mobile',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
    description: 'Upscale dining app with digital reservation booking, chef recommendations, wine pairings, and customer loyalty rewards.',
    appStoreUrl: 'https://apps.apple.com/us/app/sienna-restaurant/id765432109',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sienna.restaurant',
  },
  {
    id: 'squarecoins',
    title: 'Square Coins Rewards & Loyalty',
    iconUrl: '/assets/reference/portfolio-icons/icon-11.png',
    category: 'Education & Utility',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80',
    description: 'Digital rewards tracking and virtual currency utility for mobile gaming platforms and loyalty merchants.',
    appStoreUrl: 'https://apps.apple.com/us/app/squarecoins/id654321098',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.squarecoins.app',
  },
  {
    id: 'cms-asia-connect',
    title: 'CMS Asia Connect Conference App',
    iconUrl: '/assets/reference/portfolio-icons/icon-12.png',
    category: 'Enterprise & Business',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=900&q=80',
    description: 'B2B conference networking, agenda management, speaker bios, and live attendee polling platform for CMS Asia summits.',
    appStoreUrl: 'https://apps.apple.com/us/app/cms-asia-connect/id543210987',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cmsasiaconnect',
  },
  {
    id: 'metro-edge',
    title: 'Metro EDGE Young Professionals Network',
    iconUrl: '/assets/reference/portfolio-icons/icon-13.png',
    category: 'Community & Local',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    description: 'Membership portal and event manager for young professionals networking under the Sacramento Metro Chamber.',
    appStoreUrl: 'https://apps.apple.com/us/app/metro-edge/id432109876',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.metroedge.app',
  },
  {
    id: 'ez-abc-keyboard',
    title: 'EZ ABC Keyboard for Toddlers',
    iconUrl: '/assets/reference/portfolio-icons/icon-14.jpg',
    category: 'Education & Utility',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    description: 'Custom simplified alphabetical keyboard interface designed to help toddlers and early learners type and read easily.',
    appStoreUrl: 'https://apps.apple.com/us/app/ez-abc-keyboard/id321098765',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ezabc.keyboard',
  },
  {
    id: 'emergycare',
    title: 'EmergyCare Emergency Transport App',
    iconUrl: '/assets/reference/portfolio-icons/icon-15.png',
    category: 'Healthcare',
    platform: 'Android & iOS',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    description: 'Emergency medical services transport dispatcher and patient care resource app for healthcare responders.',
    appStoreUrl: 'https://apps.apple.com/us/app/emergycare/id210987654',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.itgc.emergycare',
  },
  {
    id: 'betsizer',
    title: 'Betsizer Sports Analytics Calculator',
    iconUrl: '/assets/reference/portfolio-icons/icon-16.png',
    category: 'Education & Utility',
    platform: 'Android',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    description: 'Mathematical odds calculator and bankroll strategy tool for sports enthusiasts and analytical wagerers.',
    appStoreUrl: 'https://apps.apple.com/us/app/betsizer/id109876543',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.itgc.betsizer',
  },
  {
    id: 'nicholas-gunn',
    title: 'Nicholas Gunn Music Streaming App',
    iconUrl: '/assets/reference/portfolio-icons/icon-17.png',
    category: 'Lifestyle & Entertainment',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    description: 'Official artist music streaming, concert tour date calendar, and store app for Billboard-charting musician Nicholas Gunn.',
    appStoreUrl: 'https://apps.apple.com/us/app/nicholas-gunn/id109876543',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nicholasgunn.app',
  },
  {
    id: 'sac-guitar-society',
    title: 'Sacramento Guitar Society',
    iconUrl: '/assets/reference/portfolio-icons/icon-18.png',
    category: 'Community & Local',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80',
    description: 'Concert schedule, masterclass workshops, sheet music archive, and member portal for guitar enthusiasts in Northern California.',
    appStoreUrl: 'https://apps.apple.com/us/app/sacramento-guitar-society/id098765432',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sacguitarsociety',
  },
  {
    id: 'cascade-pest-control',
    title: 'Cascade Pest Control Inspection App',
    iconUrl: '/assets/reference/portfolio-icons/icon-19.png',
    category: 'Enterprise & Business',
    platform: 'iPad & iOS',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    description: 'Commercial field service inspection form, digital signature capture, and customer report generator for field technicians.',
    appStoreUrl: 'https://apps.apple.com/us/app/cascade-pest-control/id987654321',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cascadepest.app',
  },
  {
    id: 'leadership-sacramento',
    title: 'Leadership Sacramento Civic Portal',
    iconUrl: '/assets/reference/portfolio-icons/icon-20.png',
    category: 'Community & Local',
    platform: 'iPad & Mobile',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    description: 'Civic leadership directory, class cohort schedule, and community project management system for Sacramento Chamber fellows.',
    appStoreUrl: 'https://apps.apple.com/us/app/leadership-sacramento/id876543210',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.leadershipsac.app',
  },
  {
    id: 'lake-fork-fishing',
    title: 'Lake Fork Bass Fishing Guide',
    iconUrl: '/assets/reference/portfolio-icons/icon-21.png',
    category: 'Travel & Lifestyle',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    description: 'GPS hotspot lake maps, weather forecasting, lure selection guide, and tournament catch logging for trophy bass anglers.',
    appStoreUrl: 'https://apps.apple.com/us/app/lake-fork-bass-guide/id765432109',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lakefork.bass',
  },
];

const carouselSlides = Array.from({ length: 17 }, (_, index) => {
  const number = index.toString().padStart(2, '0')
  const extension = index === 5 ? 'jpg' : 'png'
  return {
    desktop: `/assets/reference/banner_k/${number}.${extension}`,
    mobile: `/assets/reference/banner_k/${number}_mobile.png`,
    fallback: `https://apptology.com/images/banner_k/${number}.${extension}`,
    label: `Featured Apptology project ${index + 1}`,
  }
})

const recognitionLogos = Array.from({ length: 14 }, (_, index) => ({
  src: `/assets/reference/client-logos/web${index + 1}.jpg`,
  fallback: `https://apptology.com/images/mockup/web${index + 1}.jpg`,
  alt: index === 6 ? 'Better Business Bureau' : index === 7 ? 'Sarta' : 'Vetran Owned Business',
}))

const brandLogos = [
  ['21_21.jpg', 'http://www.meetup.com/Startup-Grind-Sacramento/events/225592679/'],
  ['22_22.jpg', '#'],
  ['23_23.jpg', '#'],
  ['24_24.jpg', '#'],
  ['25_25.jpg', '#'],
  ['26_26.jpg', '#'],
  ['2_2.jpg', 'http://www.sarta.org/entrepreneur-members.html'],
  ['3_3.jpg', '#'],
  ['4_4.jpg', null],
  ['5_5.jpg', '#'],
  ['6_6.jpg', 'http://www.bizjournals.com/sacramento/print-edition/2012/10/05/folsom-apptology-apps-small-business.html'],
  ['7_7.jpg', 'http://apptology.com/backup/about-apptology.html#'],
  ['8_8.jpg', '#'],
  ['9_9.jpg', '#'],
  ['10_10.jpg', '#'],
  ['11_11.jpg', 'http://www.amazon.com/Tap-into-Mobile-Economy-Appreneurs/dp/061575600X'],
  ['12_12.jpg', 'http://www.folsomtelegraph.com/article/download-folsom%E2%80%99s-new-mobile-app'],
  ['13_13.jpg', 'http://youtu.be/IEXMxqiv-as'],
  ['14_14.jpg', 'http://www.sacblackchamber.org/images/enews_attachments/connectionopolisflier.pdf'],
  ['15_15.jpg', 'http://www.njsba.org/news/school-leader/07082013/going-mobile.php'],
  ['16_16.jpg', 'http://fox40.com/2013/10/16/nicolas-garden-app-showcased-at-sarta/'],
  ['17_17.jpg', 'http://www.bizjournals.com/sacramento/promo/SBJSpeakerSpace#F'],
  ['18_18.jpg', '#'],
  ['19_19.jpg', '#'],
  ['20_20.jpg', '#'],
].map(([file, href]) => ({
  src: `/assets/reference/client-logos/${file}`,
  fallback: `https://apptology.com/images/${file}`,
  href,
  alt: file === '2_2.jpg' ? 'Sarta' : file === '3_3.jpg' || file === '5_5.jpg' || file === '6_6.jpg' || file === '8_8.jpg' ? 'Vetran Owned Business' : '',
}))

const servicesList = [
  {
    icon: '📱',
    title: 'Custom Mobile App Development',
    summary: 'Native iOS (Swift) & Android (Kotlin) plus cross-platform Flutter & React Native applications engineered for speed, scale, and top app store ratings.',
    details: [
      'Native iOS & Android performance',
      'Cross-platform Flutter & React Native codebase',
      'API integrations & secure backends',
      'App Store & Google Play publishing support',
    ],
  },
  {
    icon: '🚀',
    title: 'Ready-Made Mobile App Solutions',
    summary: 'Turnkey mobile app packages tailored for restaurants, real estate, auto dealerships, and local service businesses at a fraction of custom costs.',
    details: [
      'Pre-built feature sets ready for rapid launch',
      'Custom branding & logo integration',
      'Push notification & customer loyalty engines',
      'Affordable setup with flexible maintenance',
    ],
  },
  {
    icon: '💻',
    title: 'Web & SaaS Platform Development',
    summary: 'High-performance web applications, cloud customer portals, and admin dashboards built with modern React, Node.js, and serverless technology.',
    details: [
      'Responsive React / Next.js web applications',
      'Headless CMS & real-time database backends',
      'Custom admin portals & user permission tiers',
      'Cloud deployment on AWS & Cloudflare Workers',
    ],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design & Wireframing',
    summary: 'Human-centered user interface design, user journey mapping, and interactive prototypes designed to maximize engagement and conversion.',
    details: [
      'User research & competitive analysis',
      'Interactive Figma prototypes',
      'Complete brand design systems',
      'Accessibility & responsive design standards',
    ],
  },
  {
    icon: '💰',
    title: 'Mobile App Monetization & Growth',
    summary: 'Strategic consulting on app revenue models, including the 7 core monetization strategies: in-app purchases, subscriptions, ads, and freemium tiers.',
    details: [
      'Subscription & paywall architecture',
      'In-App Purchase (IAP) integration',
      'Ad network integration (Google AdMob, etc.)',
      'User analytics & conversion funnel optimization',
    ],
  },
  {
    icon: '🛠️',
    title: 'App Maintenance & Store Optimization',
    summary: 'Continuous monitoring, OS version updates, security patches, and App Store Optimization (ASO) to ensure long-term app health.',
    details: [
      'iOS & Android OS update compatibility',
      '24/7 uptime monitoring & crash reporting',
      'Keyword & screenshot optimization for App Stores',
      'Dedicated SLA technical support packages',
    ],
  },
]

const readyAppsList = [
  {
    title: 'Real Estate Mobile App Solution',
    icon: '🏡',
    description: 'Allows agents and brokerages to showcase property listings, offer virtual tours, schedule showings, and send instant price drop alerts.',
  },
  {
    title: 'Restaurants, Bars & Nightclubs App',
    icon: '🍽️',
    description: 'Digital menus, table reservations, online food ordering, loyalty rewards stamps, and push notifications for nightly specials.',
  },
  {
    title: 'Local Business & Merchants App',
    icon: '🏪',
    description: 'Turnkey app for local retailers and service providers with appointment booking, digital coupon redemption, and customer reviews.',
  },
  {
    title: 'Auto Dealerships & Service Centers',
    icon: '🚗',
    description: 'Inventory search, test drive scheduling, service department booking, and automated maintenance reminder notifications.',
  },
  {
    title: 'Healthcare & Provider Discovery',
    icon: '🩺',
    description: 'Doctor finder, appointment scheduling, patient intake forms, telehealth video links, and prescription refill requests.',
  },
  {
    title: 'Schools, Municipalities & Non-Profits',
    icon: '🏫',
    description: 'Community emergency announcements, school event calendars, news feeds, donation portals, and civic incident reporting.',
  },
]

const newsItems = [
  { date: '06 Nov 2017', title: "Apptology Makes Business of Apps' Best Mobile App Development Companies 2017 List", category: 'Recognition', href: 'http://www.businessofapps.com/guide/app-development-companies/#1' },
  { date: '12 Sep 2017', title: 'Apptology sponsors the Startup Grind Sacramento event featuring Luxer One Founder Arik Levy.', category: 'Community', href: 'https://www.startupgrind.com/events/details/startup-grind-sacramento-presents-arik-levy-luxer-one#/' },
  { date: '04 Sep 2017', title: 'Apptology sponsors the Startup Grind Sacramento event featuring GrowthX Founder Will Bunker.', category: 'Community', href: 'https://www.startupgrind.com/events/details/startup-grind-sacramento-presents-will-bunker-growthx-matchcom#/' },
  { date: '23 Jul 2017', title: 'Apptology sponsors the Startup Grind Sacramento event featuring PowerSchool Co-Founder John Stone.', category: 'Community', href: 'https://www.startupgrind.com/events/details/startup-grind-sacramento-presents-john-stone-fantag-powerschool#/' },
  { date: '16 Jun 2017', title: "Apptology Makes Design Drizzle's Most Trusted Android App Development Companies for 2017.", category: 'Recognition', href: 'http://designdrizzle.com/most-trusted-android-app-development-companies-for-2017/' },
  { date: '07 Jun 2017', title: 'Apptology CEO Rich Foreman serves as a judge for AngelHack Sacramento.', category: 'Leadership', href: 'http://angelhack.com/angelhack-global-hackathon-series-sacramento/' },
  { date: '17 May 2017', title: 'Rich Foreman speaks at the Founder Institute panel “Making the Leap from Employee to Entrepreneur.”', category: 'Speaking', href: 'http://fi.co/courses/making-the-leap-from-employee-to-entrepreneur-in-sacramento' },
  { date: '08 May 2017', title: 'The Cal Fire Ready for Wildfire app, developed by Apptology, is featured on ABC 30.', category: 'Press', href: null },
]

const leadershipTeam = [
  { name: 'Rich Foreman', role: 'Founder & CEO', bio: 'Rich leads Apptology with more than 20 years of experience in leadership, engineering, mobile application development, and sales. He holds a BS in Industrial Engineering from the University of Washington, an MPA from Troy State University, and served as an officer in the U.S. Navy.' },
  { name: 'Gary Dalal', role: 'Chief Technology Officer', bio: 'Gary brings more than 10 years of experience across software engineering, product management, technical support, and IT consulting. He specializes in full lifecycle technology delivery and translating client requirements into effective technical solutions.' },
  { name: 'Dana Smith', role: 'Co-Founder', bio: 'Dana has more than 15 years of experience in strategy development, product marketing, and mobile marketing initiatives with technology startups and Silicon Valley industry leaders.' },
  { name: 'Shellynn Finstad', role: 'Chief Creative Officer', bio: 'Shellynn brings more than 14 years of experience in graphic design, production, account management, content, and high-impact design for mobile technology solutions.' },
  { name: 'Ankur Bhatnagar', role: 'Director, Canadian Operations', bio: 'Ankur leads Canadian operations and brings more than 15 years of information technology and strategic management consulting experience across healthcare, finance, telecommunications, and public-sector programs.' },
]

const blogPosts = [
  {
    id: 'winning-business-first-time-founder',
    title: 'Startup Grind: How to Design a Winning Business as a First-Time Founder',
    date: 'May 31, 2022',
    author: 'Rich Foreman',
    category: 'Startup & Strategy',
    sourceUrl: 'https://blog.apptology.com/startup-grind-how-to-design-a-winning-business-as-a-first-time-founder/',
    excerpt: 'A practical Startup Grind Sacramento workshop about testing business-model assumptions, finding weak points, and turning uncertainty into experiments.',
    intro: 'Strong companies begin with strong business models. This Startup Grind Sacramento workshop brought together first-time founders and Josh David Miller, the “shredder of business models,” for a practical conversation about designing a business that can earn customers, capital, and momentum.',
    sections: [
      { heading: 'Why business-model design matters', body: 'Early-stage companies often move quickly toward a product before they have made the underlying business model clear. That ambiguity can make fundraising harder, slow customer acquisition, and hide the assumptions that will eventually limit growth.' },
      { heading: 'From assumptions to experiments', body: 'The workshop focused on using design thinking to identify the weakest part of a business model, turn it into a focused question, and create an experiment that produces useful evidence. The goal is not to pretend uncertainty is gone; it is to make uncertainty measurable.' },
      { heading: 'What founders can take away', body: 'Participants were encouraged to clarify what their business model is technically, explain it simply, recognize the weaknesses an investor or customer will notice, and use experiments to turn unknowns into data. That process is useful for a solo founder with an idea as well as a team with an early product and revenue.' },
      { heading: 'Workshop details', body: 'The original event was scheduled for June 21, 2020, at 5:00 PM PDT and hosted online. The session was intended for founders who had not yet reached product-market fit and wanted a clearer path from hypothesis to action.' },
    ],
  },
  {
    id: 'ios-developers-apple-may-owe-money',
    title: 'U.S. iOS Developers: Apple May Owe You Money',
    date: 'May 16, 2022',
    author: 'Rich Foreman',
    category: 'Mobile Industry',
    sourceUrl: 'https://blog.apptology.com/u-s-ios-developers-apple-may-own-you-money/',
    excerpt: 'Rich Foreman explains the Apple developer settlement, eligibility requirements, and why free apps were not included in the claim.',
    intro: 'A postcard from Apple prompted Rich Foreman to investigate a settlement for eligible U.S. iOS developers. The original post explains what the claim process covered and why Apptology’s free apps did not qualify.',
    sections: [
      { heading: 'The settlement in brief', body: 'The Cameron et al. v. Apple Inc. settlement concerned allegations about Apple’s iOS app and in-app product distribution market. Apple denied the allegations, and the settlement was not an admission of wrongdoing.' },
      { heading: 'Who could qualify?', body: 'The post described eligibility for U.S. developers who sold at least one non-zero-priced iOS app or in-app product through the U.S. App Store between 2015 and 2021, subject to the settlement’s revenue limits.' },
      { heading: 'A lesson for app publishers', body: 'The experience is a useful reminder to keep developer-account records, understand platform policies, and read settlement requirements carefully. In Rich’s case, Apptology’s published apps were free, so the company did not qualify.' },
    ],
  },
  {
    id: 'crazy-world-of-nfts',
    title: 'Startup Grind Sacramento Workshop: The Crazy World of NFTs',
    date: 'April 26, 2022',
    author: 'Rich Foreman',
    category: 'Emerging Technology',
    sourceUrl: 'https://blog.apptology.com/startup-grind-sacramento-workshop-the-crazy-world-of-nfts-what-is-it-and-why-does-it-matter/',
    excerpt: 'An event preview featuring creator, marketer, engineer, and investor Kevin Su on NFTs, Web3 audiences, and creator monetization.',
    intro: 'Startup Grind Sacramento invited Kevin Su of Nifty Nanners to discuss why NFTs had become such a visible part of the Web3 conversation and what the technology could mean for creators.',
    sections: [
      { heading: 'A creator-first view of Web3', body: 'The original post presented NFTs through the lens of audience development, digital ownership, and creator economics. It asked how artists and creators might build engaged communities while developing new ways to monetize their work.' },
      { heading: 'About Kevin Su', body: 'Kevin Su was introduced as a content creator, marketer, engineer, and cryptocurrency investor who began collecting and studying the space early. His Nifty Nanners brand had built a substantial audience through education and entertainment.' },
      { heading: 'Event details', body: 'The online workshop was scheduled for Wednesday, May 18 at 5:00 PM and was free to attend through Startup Grind Sacramento.' },
    ],
  },
  {
    id: 'avoiding-startup-legal-mistakes',
    title: 'Avoiding Startup Legal Mistakes',
    date: 'March 24, 2022',
    author: 'Rich Foreman',
    category: 'Founder Resources',
    sourceUrl: 'https://blog.apptology.com/avoiding-startup-legal-mistakes-recording/',
    excerpt: 'A recording guide for a Startup Grind workshop with DLA Piper partner David Richardson on the legal mistakes startups commonly make.',
    intro: 'Startups often focus on product and growth while postponing legal decisions. This short archive entry points founders to a Startup Grind workshop designed to make those decisions more visible and manageable.',
    sections: [
      { heading: 'The workshop focus', body: 'DLA Piper partner David Richardson reviewed ten mistakes startups routinely make and discussed how founders can navigate them before they become expensive obstacles.' },
      { heading: 'Why early guidance helps', body: 'Clear agreements, thoughtful company formation, intellectual-property planning, and disciplined records can give a young company a stronger foundation. Legal advice is most useful when it arrives before a crisis.' },
    ],
  },
  {
    id: 'sonny-mayugba-waitr',
    title: 'Startup Grind Sacramento Hosts Waitr Founding CMO Sonny Mayugba',
    date: 'September 18, 2019',
    author: 'Rich Foreman',
    category: 'Community & Leadership',
    sourceUrl: 'https://blog.apptology.com/startup-grind-sacramento-and-the-urban-hive-hosts-waitr-founding-cmo-sonny-mayugba/',
    excerpt: 'A Sacramento startup-community event featuring Sonny Mayugba and lessons from Waitr’s growth from local ordering service to public company.',
    intro: 'Startup Grind Sacramento and the Urban Hive hosted Sonny Mayugba, the founding Chief Marketing Officer of Waitr Holdings. The event connected Sacramento founders with a leader who had helped position a fast-growing on-demand restaurant company for a national stage.',
    sections: [
      { heading: 'A conversation about growth', body: 'Sonny’s experience offered a useful case study in positioning, marketing, and building a company that can move from a local service to a national brand. Waitr became a public company in late 2018.' },
      { heading: 'The Startup Grind format', body: 'The event reflected Startup Grind Sacramento’s mission to educate, connect, and inspire entrepreneurs through conversations, networking, food, and live music.' },
      { heading: 'Event details', body: 'The event was scheduled for October 15, 2019, from 6:30 PM to 8:30 PM at The Urban Hive at The Cannery in Sacramento.' },
    ],
  },
]

const featuredCaseStudies = [
  {
    ...portfolioItems[0],
    eyebrow: 'Healthcare platform',
    challenge: 'Make provider referrals easier to discover, coordinate, and track across the care journey.',
    approach: 'Connected provider discovery with referral workflows and outcome visibility in one cross-platform experience.',
    outcome: 'A clearer digital path for physicians, patients, and care teams.',
  },
  {
    ...portfolioItems[2],
    eyebrow: 'Restaurant loyalty',
    challenge: 'Bring ordering, personalization, and repeat visits together for a growing restaurant brand.',
    approach: 'Combined menu browsing, a custom flavor builder, mobile ordering, and loyalty rewards into one app.',
    outcome: 'A more useful everyday companion for customers beyond the point of purchase.',
  },
  {
    ...portfolioItems[4],
    eyebrow: 'Medical education',
    challenge: 'Turn medical learning into an engaging experience that encourages participation and friendly competition.',
    approach: 'Designed a quiz and peer challenge flow that makes knowledge testing quick, social, and repeatable.',
    outcome: 'A focused learning product built around participation and measurable progress.',
  },
]

const lifecycleStages = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    summary: 'Align the opportunity, audience, and business model before production begins.',
    deliverables: 'Research, product brief, roadmap, and success measures',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    summary: 'Shape intuitive journeys and test the experience before committing to a build.',
    deliverables: 'User flows, wireframes, prototype, and design system',
  },
  {
    number: '03',
    title: 'Agile Engineering',
    summary: 'Build in focused increments with regular reviews, testing, and visible progress.',
    deliverables: 'Sprint releases, integrations, QA, and stakeholder demos',
  },
  {
    number: '04',
    title: 'Launch & Growth',
    summary: 'Release confidently, learn from usage, and keep improving the product after launch.',
    deliverables: 'Store submission, analytics, ASO, and ongoing optimization',
  },
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [activeCategory, setActiveCategory] = useState('All')
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [selectedBlogPost, setSelectedBlogPost] = useState(blogPosts[0])

  useEffect(() => {
    if (currentPage !== 'home' || isCarouselPaused) return undefined

    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % carouselSlides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [currentPage, isCarouselPaused])

  const changeSlide = (direction) => {
    setActiveSlide((slide) => (slide + direction + carouselSlides.length) % carouselSlides.length)
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openBlogPost = (post) => {
    setSelectedBlogPost(post)
    navigateTo('blog-article')
  }

  const filteredPortfolio = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="apptology-page" id="top">
      {/* Top Contact Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href="tel:8779902777">📞 877.990.APPS (2777)</a>
            <a href="mailto:hello@apptology.com">✉️ hello@apptology.com</a>
            <span>📍 Folsom / Sacramento, CA, USA</span>
          </div>
          <div className="topbar-badges">
            <span className="badge-pill">Veteran Owned Business</span>
            <span className="badge-pill">BBB Accredited A+</span>
            <span className="badge-pill">400+ Apps Built</span>
          </div>
        </div>
      </div>

      {/* Main Header with Actual Apptology Logo */}
      <header className="site-header">
        <div className="container nav-inner">
          <div className="brand" onClick={() => navigateTo('home')} role="button" tabIndex={0}>
            <img 
              src="/assets/apptology-logo.png" 
              onError={(e) => { e.target.onerror=null; e.target.src="https://apptology.com/images/apptology-logo.png" }}
              alt="Apptology Mobile App Development Company Logo" 
              className="brand-logo-img" 
            />
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            <button className={currentPage === 'home' ? 'active' : ''} onClick={() => navigateTo('home')}>Home</button>
            <div className={`nav-dropdown ${currentPage === 'about' || currentPage === 'leadership' ? 'active' : ''}`}>
              <button className="nav-dropdown-toggle" onClick={() => navigateTo('about')} aria-haspopup="true">About Us <span aria-hidden="true">⌄</span></button>
              <div className="nav-dropdown-menu">
                <button onClick={() => navigateTo('about')}>About Apptology</button>
                <button onClick={() => navigateTo('leadership')}>Leadership</button>
              </div>
            </div>
            <button className={currentPage === 'services' ? 'active' : ''} onClick={() => navigateTo('services')}>Services</button>
            <button className={currentPage === 'ready-made-apps' ? 'active' : ''} onClick={() => navigateTo('ready-made-apps')}>Ready-Made Apps</button>
            <button className={currentPage === 'portfolio' ? 'active' : ''} onClick={() => navigateTo('portfolio')}>Portfolio</button>
            <button className={currentPage === 'news' ? 'active' : ''} onClick={() => navigateTo('news')}>News</button>
            <button className={currentPage === 'blog' ? 'active' : ''} onClick={() => navigateTo('blog')}>Blog</button>
            <button className={currentPage === 'contact' ? 'active' : ''} onClick={() => navigateTo('contact')}>Contact Us</button>
          </nav>

          <button className="nav-cta" onClick={() => navigateTo('contact')}>Start a Project</button>
        </div>
      </header>

      {/* Page Content Switcher */}
      <main>
        {/* ==================== HOME PAGE ==================== */}
        {currentPage === 'home' && (
          <>
            <section className="reference-hero">
              <div
                className="reference-carousel reference-carousel-full"
                aria-label="Apptology featured projects"
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
              >
                <div className="reference-slide-frame">
                  {carouselSlides.map((slide, index) => (
                    <picture key={slide.desktop} className={`reference-slide ${index === activeSlide ? 'is-active' : ''}`}>
                      <source media="(max-width: 600px)" srcSet={slide.mobile} />
                      <img
                        src={slide.desktop}
                        alt={slide.label}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        onError={(event) => {
                          if (event.currentTarget.src !== slide.fallback) event.currentTarget.src = slide.fallback
                        }}
                      />
                    </picture>
                  ))}
                  <button className="reference-arrow reference-arrow-prev" type="button" onClick={() => changeSlide(-1)} aria-label="Previous featured project">‹</button>
                  <button className="reference-arrow reference-arrow-next" type="button" onClick={() => changeSlide(1)} aria-label="Next featured project">›</button>
                </div>
              </div>
            </section>

            <section className="logo-rail-section recognition-rail" aria-labelledby="recognition-rail-title">
              <div className="container">
                <div className="logo-rail-heading">
                  <p className="section-tag alt">Recognition & Trust</p>
                  <h2 id="recognition-rail-title">Apptology in the Community</h2>
                </div>
                <div className="logo-rail-window">
                  <div className="logo-rail-track recognition-track">
                    {[...recognitionLogos, ...recognitionLogos].map((logo, index) => (
                      <div className="logo-rail-item" key={`${logo.src}-${index}`}>
                        <img src={logo.src} alt={logo.alt} loading="lazy" onError={(event) => { event.currentTarget.src = logo.fallback }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="stats-wrap">
              <div className="container stats-grid">
                <div className="stat-item">
                  <strong>15+</strong>
                  <span>Years in Mobile Innovation</span>
                </div>
                <div className="stat-item">
                  <strong>400+</strong>
                  <span>Mobile & Web Apps Delivered</span>
                </div>
                <div className="stat-item">
                  <strong>4.9/5</strong>
                  <span>Average Client Rating</span>
                </div>
                <div className="stat-item">
                  <strong>100%</strong>
                  <span>US-Based Leadership & QA</span>
                </div>
              </div>
            </section>

            <section className="solutions">
              <div className="container">
                <div className="section-header">
                  <div>
                    <p className="section-tag alt">Core Capabilities</p>
                    <h2>Full-Lifecycle App Development Services</h2>
                  </div>
                  <p>Whether you need a custom-built mobile product, a turn-key solution, or monetization consulting, we deliver end-to-end expertise.</p>
                </div>

                <div className="services-grid">
                  {servicesList.slice(0, 3).map((service, idx) => (
                    <article key={idx} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                      <button className="outline-button" style={{ marginTop: '20px' }} onClick={() => navigateTo('services')}>
                        Learn More →
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="feature-band">
              <div className="container feature-grid">
                <div className="feature-copy">
                  <p className="section-tag alt">Why Choose Apptology?</p>
                  <h2>Proven Track Record of Transforming App Ideas into Success</h2>
                  <p>Founded by Rich Foreman, author of "Tap into Mobile Economy", Apptology combines deep technical architecture with proven business monetization strategies.</p>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <span>✓</span>
                    <p>400+ Successful iOS and Android Applications Built</p>
                  </div>
                  <div className="feature-item">
                    <span>✓</span>
                    <p>Veteran-Owned Small Business with BBB A+ Accreditation</p>
                  </div>
                  <div className="feature-item">
                    <span>✓</span>
                    <p>Ready-Made App Packages for Rapid & Cost-Effective Launch</p>
                  </div>
                  <div className="feature-item">
                    <span>✓</span>
                    <p>Expertise in the 7 Core Mobile App Monetization Models</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="container">
                <div className="section-header">
                  <div>
                    <p className="section-tag alt">Real Apptology Portfolio Showcase</p>
                    <h2>Selected Apps Built for Clients</h2>
                  </div>
                  <button className="outline-button" onClick={() => navigateTo('portfolio')}>View All {portfolioItems.length} Apps →</button>
                </div>

                <div className="case-study-grid">
                  {featuredCaseStudies.map((study) => (
                    <article key={study.id} className="case-study-card">
                      <div className="case-study-image" style={{ backgroundImage: `url(${study.image})` }}>
                        <div className="work-image-overlay">
                          <span className="work-badge">{study.platform}</span>
                        </div>
                      </div>
                      <div className="case-study-copy">
                        <div className="case-study-heading">
                          <span>{study.eyebrow}</span>
                          <img src={study.iconUrl} alt="" className="app-card-icon-img" onError={(event) => { event.currentTarget.style.display = 'none' }} />
                        </div>
                        <h3>{study.title}</h3>
                        <p className="case-study-description">{study.description}</p>
                        <dl className="case-study-details">
                          <div><dt>Challenge</dt><dd>{study.challenge}</dd></div>
                          <div><dt>Approach</dt><dd>{study.approach}</dd></div>
                          <div><dt>Outcome</dt><dd>{study.outcome}</dd></div>
                        </dl>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="process-section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
              <div className="container">
                <div className="section-header center">
                  <p className="section-tag alt">Our Proven Process</p>
                  <h2>4 Steps to Mobile App Success</h2>
                </div>

                <div className="lifecycle-timeline">
                  {lifecycleStages.map((stage) => (
                    <article key={stage.number} className="lifecycle-stage">
                      <div className="lifecycle-marker">{stage.number}</div>
                      <div className="lifecycle-content">
                        <p className="lifecycle-kicker">Stage {stage.number}</p>
                        <h3>{stage.title}</h3>
                        <p>{stage.summary}</p>
                        <strong>{stage.deliverables}</strong>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="testimonial-section">
              <div className="container">
                <div className="section-header center">
                  <p className="section-tag alt">Client Feedback</p>
                  <h2>Trusted by Founders, Enterprises & Municipalities</h2>
                </div>

                <div className="testimonial-grid">
                  <blockquote className="testimonial-card">
                    <p>“Apptology took our concept and delivered a clean, reliable mobile app on time. Their guidance on app store monetization was invaluable.”</p>
                    <footer>— Executive, Healthcare Referral Platform</footer>
                  </blockquote>
                  <blockquote className="testimonial-card">
                    <p>“Rich Foreman and the Apptology team are top-tier professionals. They understood our community requirements and built a product our users love.”</p>
                    <footer>— Director, Veteran Owned Business Directory</footer>
                  </blockquote>
                </div>
              </div>
            </section>

            <section className="logo-rail-section brand-rail" aria-labelledby="brand-rail-title">
              <div className="container">
                <div className="logo-rail-heading">
                  <p className="section-tag alt">Featured Connections</p>
                  <h2 id="brand-rail-title">Our Clients, Partners & Press</h2>
                </div>
                <div className="logo-rail-window">
                  <div className="logo-rail-track brand-track">
                    {[...brandLogos, ...brandLogos].map((logo, index) => {
                      const image = <img src={logo.src} alt={logo.alt} loading="lazy" onError={(event) => { event.currentTarget.src = logo.fallback }} />
                      return (
                        <div className="logo-rail-item" key={`${logo.src}-${index}`}>
                          {logo.href ? <a href={logo.href} target="_blank" rel="noopener noreferrer">{image}</a> : image}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== ABOUT US PAGE ==================== */}
        {currentPage === 'about' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>About Us</span>
                </div>
                <h1>About Apptology</h1>
                <p>15+ years of pioneering mobile app development, product strategy, and digital solutions.</p>
              </div>
            </div>

            <section>
              <div className="container about-hero-grid">
                <div>
                  <p className="section-tag alt">Our Story & Leadership</p>
                  <h2>Building Software that Drives Real-World Impact</h2>
                  <p>
                    Apptology is a Sacramento/Folsom, California-based mobile application development agency founded by <strong>Rich Foreman</strong>. 
                    Since 2010, Apptology has designed, engineered, and published over 400 mobile and web applications for startups, established enterprises, and civic organizations.
                  </p>
                  <p>
                    As a Certified <strong>Veteran-Owned Small Business</strong> with BBB A+ accreditation, we pride ourselves on transparency, top-tier engineering standards, and complete client code ownership.
                  </p>
                  <div className="author-book-tag">
                    📖 Founded by Rich Foreman — Author of <em>"Tap into Mobile Economy: For Appreneurs"</em>
                  </div>
                </div>

                <div className="ceo-profile-box">
                  <span className="ceo-badge">Founder & CEO</span>
                  <h3 style={{ margin: '0 0 10px', fontSize: '1.6rem' }}>Rich Foreman</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
                    Startup mentor, speaker, and author with over two decades of software engineering and product leadership experience.
                  </p>
                  <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '20px 0' }} />
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.92rem', color: 'var(--ink)' }}>
                    <li>Author of <em>Tap into Mobile Economy</em></li>
                    <li>SARTA Executive Member & Speaker</li>
                    <li>Featured on ABC News10, Fox40, and SBJ</li>
                    <li>Startup Grind Sacramento Sponsor</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="feature-band">
              <div className="container">
                <div className="section-header center">
                  <p className="section-tag alt">Recognition & Media Coverage</p>
                  <h2>Apptology in the News</h2>
                </div>

                <div className="services-grid">
                  <div className="about-card">
                    <h3>📺 ABC News10 Feature</h3>
                    <p>Apptology's mobile solutions showcased on ABC News10 for empowering local small businesses with mobile apps.</p>
                  </div>
                  <div className="about-card">
                    <h3>📰 Sacramento Business Journal</h3>
                    <p>Recognized as one of the top mobile application development companies in the Sacramento regional region.</p>
                  </div>
                  <div className="about-card">
                    <h3>🎖️ Veteran Owned Business</h3>
                    <p>Proudly recognized by business publications and chambers for veteran business leadership and innovation.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== LEADERSHIP PAGE ==================== */}
        {currentPage === 'leadership' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <button onClick={() => navigateTo('about')}>About Us</button> / <span>Leadership</span>
                </div>
                <h1>Leadership & Team</h1>
                <p>Meet the people behind Apptology's strategy, engineering, creativity, and client partnerships.</p>
              </div>
            </div>

            <section>
              <div className="container">
                <div className="leadership-intro">
                  <div>
                    <p className="section-tag alt">Our Team</p>
                    <h2>Experience across the full mobile product lifecycle</h2>
                  </div>
                  <p>Apptology brings together product leadership, technical delivery, marketing strategy, and creative direction to help organizations move from idea to launch.</p>
                </div>
                <div className="leadership-grid">
                  {leadershipTeam.map((member) => (
                    <article key={member.name} className="leader-card">
                      <div className="leader-avatar">{member.name.split(' ').map((part) => part[0]).join('')}</div>
                      <p className="section-tag alt">{member.role}</p>
                      <h3>{member.name}</h3>
                      <p>{member.bio}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="feature-band">
              <div className="container leadership-quote">
                <p className="section-tag alt">From the original site</p>
                <blockquote>“My ReadyBuilt App provides my customers with useful tools to search MLS, calculate mortgage payments and scan QR codes.”</blockquote>
                <cite>Melanie Swint, Swint Realty</cite>
              </div>
            </section>
          </>
        )}

        {/* ==================== SERVICES PAGE ==================== */}
        {currentPage === 'services' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>Services</span>
                </div>
                <h1>App Development & Strategy Services</h1>
                <p>From initial concept and UI/UX design to native coding, app monetization, and ongoing support.</p>
              </div>
            </div>

            <section>
              <div className="container">
                <div className="services-grid">
                  {servicesList.map((service, idx) => (
                    <article key={idx} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                      <ul style={{ marginTop: '20px', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--ink)' }}>
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} style={{ marginBottom: '6px' }}>{detail}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== READY-MADE APPS PAGE ==================== */}
        {currentPage === 'ready-made-apps' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>Ready-Made Apps</span>
                </div>
                <h1>Ready-Made Mobile App Solutions</h1>
                <p>Launch your brand’s custom mobile app quickly and affordably with Apptology’s pre-engineered solution frameworks.</p>
              </div>
            </div>

            <section>
              <div className="container">
                <div className="section-header">
                  <div>
                    <p className="section-tag alt">Turnkey App Packages</p>
                    <h2>Pre-Built Frameworks Tailored to Your Industry</h2>
                  </div>
                  <p>Get custom branding, push notification engines, loyalty stamps, and app store deployment at a fraction of standard costs.</p>
                </div>

                <div className="ready-apps-grid">
                  {readyAppsList.map((item, idx) => (
                    <div key={idx} className="ready-card">
                      <div className="service-icon">{item.icon}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button className="primary-button" style={{ marginTop: '20px', padding: '12px 20px', fontSize: '0.88rem' }} onClick={() => navigateTo('contact')}>
                        Inquire About This App Package
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== PORTFOLIO PAGE ==================== */}
        {currentPage === 'portfolio' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>Portfolio</span>
                </div>
                <h1>Apptology Mobile App Showcase ({portfolioItems.length} Apps)</h1>
                <p>Explore real apps developed and launched by Apptology across healthcare, local business, entertainment, education, real estate, and enterprise.</p>
              </div>
            </div>

            <section>
              <div className="container">
                {/* Category Filters */}
                <div className="portfolio-filter">
                  {['All', 'Healthcare', 'Food & Dining', 'Real Estate', 'Community & Local', 'Education & Utility', 'Enterprise & Business', 'Travel & Lifestyle', 'Lifestyle & Entertainment'].map(cat => (
                    <button
                      key={cat}
                      className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="work-grid">
                  {filteredPortfolio.map((item) => (
                    <article key={item.id} className="work-card">
                      <div className="work-image" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="work-image-overlay">
                          <span className="work-badge">{item.platform}</span>
                        </div>
                      </div>
                      <div className="work-copy">
                        <span>{item.category}</span>
                        <div className="work-title-row">
                          <img src={item.iconUrl} alt={item.title} className="app-card-icon-img" onError={(e) => { e.target.style.display = "none"; }} />
                          <h3 style={{ margin: 0 }}>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                        <div className="store-buttons">
                          {item.appStoreUrl && (
                            <a href={item.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn">
                              <span className="store-icon app-store-icon" aria-hidden="true"></span>
                              <span>App Store</span>
                            </a>
                          )}
                          {item.playStoreUrl && (
                            <a href={item.playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn">
                              <span>▶ Google Play</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== NEWS PAGE ==================== */}
        {currentPage === 'news' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>News</span>
                </div>
                <h1>Apptology News</h1>
                <p>Press coverage, community events, product milestones, and appearances from the Apptology archive.</p>
              </div>
            </div>

            <section className="news-archive-section">
              <div className="container">
                <div className="news-archive">
                  {newsItems.map((item) => (
                    <article key={`${item.date}-${item.title}`} className="news-entry">
                      <time>{item.date}</time>
                      <div>
                        <span>{item.category}</span>
                        <h2>{item.title}</h2>
                      </div>
                      {item.href && <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Read: ${item.title}`}>Read story →</a>}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ==================== BLOG LISTING PAGE ==================== */}
        {currentPage === 'blog' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>Blog</span>
                </div>
                <h1>Apptology Blog</h1>
                <p>Ideas, founder lessons, mobile industry insights, and Sacramento startup community stories from the Apptology archive.</p>
              </div>
            </div>

            <section className="blog-listing">
              <div className="container blog-listing-layout">
                <div className="blog-list-grid">
                  {blogPosts.map((post, index) => (
                    <article key={post.id} className={`blog-list-card ${index === 0 ? 'is-featured' : ''}`}>
                      <div className="blog-card-topline">
                        <span>{post.category}</span>
                        <time>{post.date}</time>
                      </div>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}</p>
                      <div className="blog-card-footer">
                        <span>By {post.author}</span>
                        <button className="outline-button" onClick={() => openBlogPost(post)}>Read article →</button>
                      </div>
                    </article>
                  ))}
                </div>
                <aside className="blog-list-aside">
                  <span className="section-tag alt">From the archive</span>
                  <h2>Ideas that move founders forward</h2>
                  <p>Browse five adapted posts from the original Apptology blog, covering business models, mobile platforms, emerging technology, legal foundations, and startup leadership.</p>
                  <a href="https://blog.apptology.com/" target="_blank" rel="noopener noreferrer" className="outline-button">Visit original blog →</a>
                </aside>
              </div>
            </section>
          </>
        )}

        {/* ==================== INDIVIDUAL BLOG ARTICLE PAGE ==================== */}
        {currentPage === 'blog-article' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <button onClick={() => navigateTo('blog')}>Blog</button> / <span>Article</span>
                </div>
                <p className="section-tag">{selectedBlogPost.category}</p>
                <h1>{selectedBlogPost.title}</h1>
                <p>Posted on {selectedBlogPost.date} by {selectedBlogPost.author}</p>
              </div>
            </div>

            <article className="blog-post">
              <div className="container blog-post-layout">
                <div className="blog-post-main">
                  <p className="blog-post-lede">{selectedBlogPost.intro}</p>
                  {selectedBlogPost.sections.map((section) => (
                    <section key={section.heading}>
                      <h2>{section.heading}</h2>
                      <p>{section.body}</p>
                    </section>
                  ))}
                  <p className="blog-post-byline">By {selectedBlogPost.author}. Adapted from the original article on the Apptology Blog.</p>
                  <a href={selectedBlogPost.sourceUrl} target="_blank" rel="noopener noreferrer" className="outline-button">Read original article →</a>
                </div>
                <aside className="blog-post-aside">
                  <span className="section-tag alt">More from the blog</span>
                  <h3>Keep exploring the archive</h3>
                  <p>Return to the listing to read more about app development, startup strategy, industry changes, and the Sacramento founder community.</p>
                  <button className="outline-button" onClick={() => navigateTo('blog')}>Back to blog →</button>
                </aside>
              </div>
            </article>
          </>
        )}

        {/* ==================== CONTACT US PAGE ==================== */}
        {currentPage === 'contact' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>Contact Us</span>
                </div>
                <h1>Contact Apptology</h1>
                <p>Ready to build your mobile app? Get in touch with our team for a free strategy consultation and estimate.</p>
              </div>
            </div>

            <section>
              <div className="container contact-grid">
                <div className="contact-info-box">
                  <p className="section-tag">Get In Touch</p>
                  <h2 style={{ fontSize: '2rem', margin: '0 0 20px', color: 'white' }}>Let’s Discuss Your App Idea</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
                    Have a question or want an estimate on a custom or ready-made app? Reach out to our California team.
                  </p>

                  <div className="contact-info-item">
                    <span>📞</span>
                    <div>
                      <strong style={{ display: 'block', color: 'white' }}>Toll-Free Phone</strong>
                      <a href="tel:8779902777" style={{ color: '#4ade80' }}>877.990.APPS (2777)</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span>✉️</span>
                    <div>
                      <strong style={{ display: 'block', color: 'white' }}>Email Address</strong>
                      <a href="mailto:hello@apptology.com" style={{ color: '#4ade80' }}>hello@apptology.com</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <span>📍</span>
                    <div>
                      <strong style={{ display: 'block', color: 'white' }}>Location</strong>
                      <span>Folsom / Sacramento, California, USA</span>
                    </div>
                  </div>
                </div>

                <div className="contact-form">
                  {contactSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                      <span style={{ fontSize: '3rem' }}>🎉</span>
                      <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-deep)', margin: '16px 0 10px' }}>Thank You!</h3>
                      <p style={{ color: 'var(--muted)' }}>
                        Your message has been received. A representative from Apptology will contact you shortly.
                      </p>
                      <button className="primary-button" style={{ marginTop: '20px' }} onClick={() => setContactSubmitted(false)}>
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }}>
                      <h3 style={{ margin: '0 0 20px', fontSize: '1.5rem', color: 'var(--ink)' }}>Request a Strategy Call</h3>

                      <div className="form-group">
                        <label>Your Name *</label>
                        <input type="text" required placeholder="John Doe" />
                      </div>

                      <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" required placeholder="john@example.com" />
                      </div>

                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="(916) 555-0199" />
                      </div>

                      <div className="form-group">
                        <label>Service Interest</label>
                        <select>
                          <option>Custom Mobile App Development</option>
                          <option>Ready-Made App Solution</option>
                          <option>Web & SaaS Platform</option>
                          <option>App Strategy & Monetization</option>
                          <option>App Maintenance & Support</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Estimated Project Budget</label>
                        <select>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $25,000</option>
                          <option>$25,000 - $50,000</option>
                          <option>$50,000+</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Project Details</label>
                        <textarea rows={4} placeholder="Tell us about your app concept, target users, or requirements..."></textarea>
                      </div>

                      <button type="submit" className="primary-button" style={{ width: '100%' }}>
                        Submit Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand" onClick={() => navigateTo('home')}>
              <img 
                src="/assets/apptology-logo.png" 
                onError={(e) => { e.target.onerror=null; e.target.src="https://apptology.com/images/apptology-logo.png" }}
                alt="Apptology Logo" 
                className="brand-logo-img" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="footer-copy">
              Apptology is a pioneer mobile application development firm crafting custom iOS, Android, and web applications 
              that turn ideas into market leaders.
            </p>
          </div>

          <div>
            <h3>Navigation</h3>
            <button onClick={() => navigateTo('home')}>Home</button>
            <button onClick={() => navigateTo('about')}>About Us</button>
            <button onClick={() => navigateTo('leadership')}>Leadership</button>
            <button onClick={() => navigateTo('services')}>Services</button>
            <button onClick={() => navigateTo('ready-made-apps')}>Ready-Made Apps</button>
            <button onClick={() => navigateTo('portfolio')}>Portfolio</button>
            <button onClick={() => navigateTo('news')}>News</button>
            <button onClick={() => navigateTo('blog')}>Blog</button>
            <button onClick={() => navigateTo('contact')}>Contact Us</button>
          </div>

          <div>
            <h3>Solutions</h3>
            <button onClick={() => navigateTo('services')}>iOS App Development</button>
            <button onClick={() => navigateTo('services')}>Android App Development</button>
            <button onClick={() => navigateTo('ready-made-apps')}>Real Estate App Solution</button>
            <button onClick={() => navigateTo('ready-made-apps')}>Restaurant & Dining App</button>
            <button onClick={() => navigateTo('services')}>App Monetization Strategy</button>
          </div>

          <div>
            <h3>Contact Us</h3>
            <a href="tel:8779902777">📞 877.990.APPS (2777)</a>
            <a href="mailto:hello@apptology.com">✉️ hello@apptology.com</a>
            <span>📍 Folsom / Sacramento, CA</span>
            <span style={{ fontSize: '0.8rem', color: '#4ade80', marginTop: '10px' }}>Veteran-Owned Small Business</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Apptology, Inc. All rights reserved.</span>
          <div className="footer-legal-links">
            <button onClick={() => navigateTo('about')}>Affiliates</button>
            <button onClick={() => navigateTo('about')}>Terms & Conditions</button>
            <button onClick={() => navigateTo('about')}>Branding</button>
            <button onClick={() => navigateTo('about')}>Privacy Policy</button>
            <button onClick={() => navigateTo('about')}>Careers</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
