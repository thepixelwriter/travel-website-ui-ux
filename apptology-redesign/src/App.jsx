import { useState } from 'react'
import './App.css'

const portfolioItems = [
  {
    id: 'docreferral',
    title: 'DocReferral Healthcare Platform',
    category: 'Healthcare',
    platform: 'iOS, Android & Web',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    description: 'Comprehensive medical provider referral and discovery platform enabling doctors to seamlessly refer patients and track care outcomes.',
  },
  {
    id: 'environmental-impact-calculator',
    title: 'JT Environmental Impact Calculator',
    category: 'Education & Utility',
    platform: 'iOS, Android & Web',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    description: 'Utility calculator enabling commercial and residential users to measure environmental compliance and energy footprint savings.',
  },
  {
    id: 'wing-zone',
    title: 'Wing Zone Restaurant App',
    category: 'Food & Dining',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description: 'Mobile food ordering, customized wing flavor builder, and loyalty rewards app for the popular Wing Zone restaurant franchise chain.',
  },
  {
    id: 'palm-springs',
    title: 'Palm Springs Mid-Century Modern Guide',
    category: 'Travel & Lifestyle',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    description: 'Self-guided architectural tour and mapping guide featuring iconic mid-century modern homes and desert landmarks in Palm Springs.',
  },
  {
    id: 'jama-network-challenge',
    title: 'The JAMA Network Challenge',
    category: 'Healthcare',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
    description: 'Interactive medical knowledge quiz and peer challenge platform developed for Journal of the American Medical Association readers.',
  },
  {
    id: 'dream-moods',
    title: 'Dream Moods Dictionary & Journal',
    category: 'Lifestyle & Entertainment',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=900&q=80',
    description: 'Official mobile app for DreamMoods.com featuring a comprehensive 6000+ word dream dictionary and dream journal tracker.',
  },
  {
    id: 'hp-enterprise-printers',
    title: 'HP Enterprise Printers Sales Tool',
    category: 'Enterprise & Business',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    description: 'Enterprise sales enablement tool showcasing HP printer specifications, product catalog demos, and ROI calculators.',
  },
  {
    id: 'vsos-emergency-response-app',
    title: 'VSOS Panic & Emergency Response System',
    category: 'Education & Utility',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80',
    description: 'Instant emergency broadcast and SOS panic alert application linking users with local emergency contacts and GPS location sharing.',
  },
  {
    id: 'swint-real-estate',
    title: 'Swint Real Estate Mobile App',
    category: 'Real Estate',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    description: 'Mobile MLS search, interactive map listings, mortgage calculator, and agent scheduling app for Swint Real Estate buyers.',
  },
  {
    id: 'ibleed',
    title: 'iBleed Hemophilia Healthcare Tracker',
    category: 'Healthcare',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80',
    description: 'Specialized healthcare tracking log for hemophilia patients and caregivers to record bleed incidents and medication doses.',
  },
  {
    id: 'sienna-restaurant',
    title: 'Sienna Restaurant Dining App',
    category: 'Food & Dining',
    platform: 'iOS Mobile',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
    description: 'Upscale dining app with digital reservation booking, chef recommendations, wine pairings, and customer loyalty rewards.',
  },
  {
    id: 'squarecoins',
    title: 'Square Coins Rewards & Loyalty',
    category: 'Education & Utility',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80',
    description: 'Digital rewards tracking and virtual currency utility for mobile gaming platforms and loyalty merchants.',
  },
  {
    id: 'cms-asia-connect',
    title: 'CMS Asia Connect Conference App',
    category: 'Enterprise & Business',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=900&q=80',
    description: 'B2B conference networking, agenda management, speaker bios, and live attendee polling platform for CMS Asia summits.',
  },
  {
    id: 'metro-edge',
    title: 'Metro EDGE Young Professionals Network',
    category: 'Community & Local',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    description: 'Membership portal and event manager for young professionals networking under the Sacramento Metro Chamber.',
  },
  {
    id: 'ez-abc-keyboard',
    title: 'EZ ABC Keyboard for Toddlers',
    category: 'Education & Utility',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    description: 'Custom simplified alphabetical keyboard interface designed to help toddlers and early learners type and read easily.',
  },
  {
    id: 'emergycare',
    title: 'EmergyCare Emergency Transport App',
    category: 'Healthcare',
    platform: 'Android & iOS',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
    description: 'Emergency medical services transport dispatcher and patient care resource app for healthcare responders.',
  },
  {
    id: 'betsizer',
    title: 'Betsizer Sports Analytics Calculator',
    category: 'Education & Utility',
    platform: 'Android',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    description: 'Mathematical odds calculator and bankroll strategy tool for sports enthusiasts and analytical wagerers.',
  },
  {
    id: 'nicholas-gunn',
    title: 'Nicholas Gunn Music Streaming App',
    category: 'Lifestyle & Entertainment',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    description: 'Official artist music streaming, concert tour date calendar, and store app for Billboard-charting musician Nicholas Gunn.',
  },
  {
    id: 'sac-guitar-society',
    title: 'Sacramento Guitar Society',
    category: 'Community & Local',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80',
    description: 'Concert schedule, masterclass workshops, sheet music archive, and member portal for guitar enthusiasts in Northern California.',
  },
  {
    id: 'cascade-pest-control',
    title: 'Cascade Pest Control Inspection App',
    category: 'Enterprise & Business',
    platform: 'iPad & iOS',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    description: 'Commercial field service inspection form, digital signature capture, and customer report generator for field technicians.',
  },
  {
    id: 'leadership-sacramento',
    title: 'Leadership Sacramento Civic Portal',
    category: 'Community & Local',
    platform: 'iPad & Mobile',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    description: 'Civic leadership directory, class cohort schedule, and community project management system for Sacramento Chamber fellows.',
  },
  {
    id: 'lake-fork-fishing',
    title: 'Lake Fork Bass Fishing Guide',
    category: 'Travel & Lifestyle',
    platform: 'iOS & Android',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
    description: 'GPS hotspot lake maps, weather forecasting, lure selection guide, and tournament catch logging for trophy bass anglers.',
  },
]

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

const blogArticles = [
  {
    id: 1,
    title: 'The 7 Mobile App Monetization Models',
    category: 'App Monetization',
    summary: 'Explore the 7 proven strategies to generate revenue from your mobile app, from in-app purchases and subscriptions to sponsorship and ad models.',
  },
  {
    id: 2,
    title: 'How Much Does It Cost to Make an App?',
    category: 'Product Strategy',
    summary: 'A complete breakdown of mobile app development costs, feature scope, agency vs freelancer rates, and how to budget for launch.',
  },
  {
    id: 3,
    title: '9 Factors for Hiring the Perfect Mobile App Developer',
    category: 'Agency Guide',
    summary: 'Key criteria to evaluate when selecting a mobile app development partner, including portfolio verification, QA processes, and code ownership.',
  },
  {
    id: 4,
    title: '3 Steps to Turn Your Mobile App Idea into Reality',
    category: 'Product Strategy',
    summary: 'From napkin sketch to App Store release: how to validate user demand, build wireframes, and create a Minimum Viable Product (MVP).',
  },
  {
    id: 5,
    title: 'Top 6 Mobile Ad Revenue Models',
    category: 'App Monetization',
    summary: 'How native ads, rewarded video ads, banner ads, and interstitial placements compare for maximum user retention and yield.',
  },
  {
    id: 6,
    title: 'Raising Capital Through an ICO (Initial Coin Offering)',
    category: 'Insights',
    summary: 'An overview of tokenized fundraising models for tech startups and emerging decentralized mobile product ecosystems.',
  },
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [activeCategory, setActiveCategory] = useState('All')
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <button className={currentPage === 'about' ? 'active' : ''} onClick={() => navigateTo('about')}>About Us</button>
            <button className={currentPage === 'services' ? 'active' : ''} onClick={() => navigateTo('services')}>Services</button>
            <button className={currentPage === 'ready-made-apps' ? 'active' : ''} onClick={() => navigateTo('ready-made-apps')}>Ready-Made Apps</button>
            <button className={currentPage === 'portfolio' ? 'active' : ''} onClick={() => navigateTo('portfolio')}>Portfolio</button>
            <button className={currentPage === 'blog' ? 'active' : ''} onClick={() => navigateTo('blog')}>Blog & News</button>
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
            <section className="hero">
              <div className="container hero-grid">
                <div className="hero-copy">
                  <p className="section-tag">Pioneer Mobile App Development Company</p>
                  <h1>Custom Mobile & Web Apps Built for <span>Real Business Growth</span></h1>
                  <p className="lead">
                    Apptology designs and engineers high-performance iOS, Android, and web applications. 
                    From custom enterprise software to ready-made mobile app solutions, we turn ideas into market leaders.
                  </p>

                  <div className="hero-actions">
                    <button className="primary-button" onClick={() => navigateTo('contact')}>Book a Free Consultation</button>
                    <button className="secondary-button" onClick={() => navigateTo('portfolio')}>View Our Portfolio</button>
                  </div>

                  <div className="hero-trust">
                    <span>Featured in Media & Industry Associations:</span>
                    <div className="trust-logos">
                      <span>ABC News10</span>
                      <span>Fox40</span>
                      <span>Sacramento Business Journal</span>
                      <span>SARTA</span>
                      <span>Veteran Owned</span>
                    </div>
                  </div>
                </div>

                <div className="hero-visual">
                  <div className="device-frame">
                    <div className="app-card-main">
                      <div className="mini-header">
                        <span className="dot dot-1" />
                        <span className="dot dot-2" />
                        <span className="dot dot-3" />
                      </div>
                      <div className="app-hero-panel">
                        <p>Apptology Product Engine</p>
                        <h3>Native Speed & Modern UX</h3>
                      </div>
                      <div className="stat-stack">
                        <div>
                          <strong>400+</strong>
                          <span>Apps Launched</span>
                        </div>
                        <div>
                          <strong>15+</strong>
                          <span>Years Excellence</span>
                        </div>
                      </div>
                    </div>
                    <div className="floating-card">
                      <span>🚀 Tap into Mobile Economy</span>
                      <strong>Apptology Platform</strong>
                      <small>iOS • Android • Web • Cloud</small>
                    </div>
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

                <div className="work-grid">
                  {portfolioItems.slice(0, 6).map((item) => (
                    <article key={item.id} className="work-card">
                      <div className="work-image" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="work-image-overlay">
                          <span className="work-badge">{item.platform}</span>
                        </div>
                      </div>
                      <div className="work-copy">
                        <span>{item.category}</span>
                        <div className="work-title-row">
                          <span className="app-card-icon">{item.icon}</span>
                          <h3 style={{ margin: 0 }}>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                        <div className="store-buttons">
                          {item.appStoreUrl && (
                            <a href={item.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn">
                              <span> App Store</span>
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

            <section className="process-section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
              <div className="container">
                <div className="section-header center">
                  <p className="section-tag alt">Our Proven Process</p>
                  <h2>4 Steps to Mobile App Success</h2>
                </div>

                <div className="process-grid">
                  <div className="process-card">
                    <span>01</span>
                    <h3>Discovery & Strategy</h3>
                    <p>We analyze user demand, competitive apps, monetization models, and define product specifications.</p>
                  </div>
                  <div className="process-card">
                    <span>02</span>
                    <h3>UI/UX Design</h3>
                    <p>Interactive Figma wireframes, brand design systems, and seamless user journeys built for conversion.</p>
                  </div>
                  <div className="process-card">
                    <span>03</span>
                    <h3>Agile Engineering</h3>
                    <p>Clean native or cross-platform code execution with bi-weekly sprint reviews and continuous testing.</p>
                  </div>
                  <div className="process-card">
                    <span>04</span>
                    <h3>Launch & Growth</h3>
                    <p>App Store publishing, analytics setup, ongoing maintenance, and App Store Optimization (ASO).</p>
                  </div>
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
                          <span className="app-card-icon">{item.icon}</span>
                          <h3 style={{ margin: 0 }}>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                        <div className="store-buttons">
                          {item.appStoreUrl && (
                            <a href={item.appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-btn">
                              <span> App Store</span>
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

        {/* ==================== BLOG / NEWS PAGE ==================== */}
        {currentPage === 'blog' && (
          <>
            <div className="page-header-banner">
              <div className="container">
                <div className="breadcrumb">
                  <button onClick={() => navigateTo('home')}>Home</button> / <span>Blog & News</span>
                </div>
                <h1>Apptology News & Monetization Guides</h1>
                <p>Expert insights on mobile app strategy, monetization models, development budgeting, and technology news.</p>
              </div>
            </div>

            <section>
              <div className="container">
                <div className="news-grid">
                  {blogArticles.map((article) => (
                    <article key={article.id} className="news-card">
                      <span>{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.summary}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
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
            <button onClick={() => navigateTo('services')}>Services</button>
            <button onClick={() => navigateTo('ready-made-apps')}>Ready-Made Apps</button>
            <button onClick={() => navigateTo('portfolio')}>Portfolio</button>
            <button onClick={() => navigateTo('blog')}>Blog & News</button>
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
