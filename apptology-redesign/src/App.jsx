import './App.css'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '8+', label: 'Years building apps' },
  { value: '120+', label: 'Launches delivered' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '24/7', label: 'Product support' },
]

const services = [
  {
    icon: '📱',
    title: 'Custom mobile app development',
    text: 'Native and cross-platform product experiences for startups and enterprise teams that need to move fast and scale cleanly.',
  },
  {
    icon: '⚙️',
    title: 'End-to-end product design',
    text: 'From strategy and UX research to polished interfaces, we create experiences that are intuitive, conversion-driven, and brand-first.',
  },
  {
    icon: '📈',
    title: 'Growth and retention features',
    text: 'Launch loyalty flows, user engagement systems, push notifications, and analytics dashboards that keep users returning.',
  },
  {
    icon: '🛠️',
    title: 'Maintenance and optimization',
    text: 'We keep your app stable, improve conversion, and refine performance long after launch so the product keeps compounding value.',
  },
]

const features = [
  'Food ordering and commerce journeys',
  'Loyalty, engagement, and rewards flows',
  'Dynamic content and CMS-powered updates',
  'GPS, push notifications, and location features',
  'Booking, reservation, and payment systems',
  'Analytics dashboards and reporting',
]

const workItems = [
  {
    title: 'Vetran Owned Business',
    category: 'Retail & local discovery app',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Environmental Impact Calculator',
    category: 'Utility + education solution',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'DocReferral',
    category: 'Healthcare discovery platform',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  },
]

const process = [
  { step: '01', title: 'Discover', text: 'We learn your goals, market, users, and constraints before a single screen is designed.' },
  { step: '02', title: 'Design', text: 'We shape the concept into a clear product strategy, UX flows, and a clean visual system.' },
  { step: '03', title: 'Build', text: 'Our team creates the app and product workflows with an emphasis on speed, usability, and quality.' },
  { step: '04', title: 'Scale', text: 'After launch, we tune the product through analytics, optimization, and continuous support.' },
]

const testimonials = [
  {
    quote: 'Apptology helped us convert a vague idea into a polished product that our customers actually understood and loved.',
    author: 'Brand founder',
  },
  {
    quote: 'Their team combined speed, business thinking, and design taste, which is rare in a development partner.',
    author: 'Operations leader',
  },
]

const newsItems = [
  { title: 'Raising capital through an ICO', tag: 'Insights' },
  { title: 'Why mobile app strategy matters more than features alone', tag: 'Strategy' },
  { title: 'How to turn a product idea into a launch plan', tag: 'Product' },
]

function App() {
  return (
    <div className="apptology-page" id="top">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>877.990.APPS (2777)</span>
          <span>hello@apptology.com</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Apptology home">
            <span className="brand-mark">A</span>
            <span className="brand-copy">
              <strong>Apptology</strong>
              <small>APP DEVELOPMENT</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">Get Started</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="section-tag">Mobile app development company</p>
              <h1>Build apps that turn ideas into momentum.</h1>
              <p className="lead">
                We design and develop mobile experiences that help businesses launch faster, engage users better,
                and grow with less friction.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-button">Book a strategy call</a>
                <a href="#work" className="secondary-button">View our work</a>
              </div>

              <div className="hero-trust">
                <span>Trusted by growing brands</span>
                <div className="trust-logos">
                  <span>Sarta</span>
                  <span>Vetran</span>
                  <span>Cal Fire</span>
                  <span>Startup Grind</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="device-frame">
                <div className="screen-glow" />
                <div className="app-card app-card-main">
                  <div className="mini-header">
                    <span className="dot dot-1" />
                    <span className="dot dot-2" />
                    <span className="dot dot-3" />
                  </div>
                  <div className="app-hero-panel">
                    <p>Launch-ready mobile product</p>
                    <h3>Growth without guesswork</h3>
                  </div>
                  <div className="stat-stack">
                    <div>
                      <strong>+44%</strong>
                      <span>User engagement</span>
                    </div>
                    <div>
                      <strong>3x</strong>
                      <span>Faster release cycles</span>
                    </div>
                  </div>
                </div>
                <div className="app-card floating-card">
                  <span>ROI focus</span>
                  <strong>App strategy</strong>
                  <small>UX + product + analytics</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-wrap">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-tag alt">What we do best</p>
                <h2>Mobile products designed for business growth.</h2>
              </div>
              <p>
                We help founders, marketing teams, and established brands create apps that feel polished, work smoothly,
                and support long-term customer engagement.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-band" id="features">
          <div className="container feature-grid">
            <div className="feature-copy">
              <p className="section-tag alt">Built for real customers</p>
              <h2>Everything your app needs to feel premium and perform well.</h2>
              <p>
                From discovery and user journeys to content management and smart notifications, we build the features that make
                a business mobile-first and conversion-ready.
              </p>
            </div>

            <div className="feature-list">
              {features.map((feature) => (
                <div key={feature} className="feature-item">
                  <span>✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="pricing">
          <div className="container">
            <div className="section-header center">
              <p className="section-tag alt">Our approach</p>
              <h2>Simple, strategic, and built for momentum.</h2>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <div key={item.step} className="process-card">
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-tag alt">Selected work</p>
                <h2>Projects built to solve real problems.</h2>
              </div>
              <a href="#contact" className="inline-link">Start a project</a>
            </div>

            <div className="work-grid">
              {workItems.map((item) => (
                <article key={item.title} className="work-card">
                  <div className="work-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="work-copy">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section" id="resources">
          <div className="container">
            <div className="section-header center">
              <p className="section-tag alt">Client feedback</p>
              <h2>Partners who value clarity, speed, and design.</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="testimonial-card">
                  <p>“{item.quote}”</p>
                  <footer>{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="news-section">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-tag alt">Latest insights</p>
                <h2>Fresh thinking from the Apptology blog.</h2>
              </div>
              <a href="#contact" className="inline-link">Read more</a>
            </div>

            <div className="news-grid">
              {newsItems.map((item) => (
                <article key={item.title} className="news-card">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-box">
            <div>
              <p className="section-tag alt">Let’s build something useful</p>
              <h2>Bring your app idea to life with a team that understands product, design, and growth.</h2>
            </div>
            <a href="mailto:hello@apptology.com" className="primary-button">hello@apptology.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#top" className="brand footer-brand" aria-label="Apptology home">
              <span className="brand-mark">A</span>
              <span className="brand-copy">
                <strong>Apptology</strong>
                <small>APP DEVELOPMENT</small>
              </span>
            </a>
            <p className="footer-copy">
              We build customer-focused apps and digital experiences that help real businesses stand out and scale.
            </p>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#solutions">Solutions</a>
            <a href="#features">Features</a>
            <a href="#work">Portfolio</a>
            <a href="#resources">Insights</a>
          </div>

          <div>
            <h3>Services</h3>
            <a href="#solutions">Custom apps</a>
            <a href="#features">Product design</a>
            <a href="#pricing">Strategy</a>
            <a href="#contact">Maintenance</a>
          </div>

          <div>
            <h3>Contact</h3>
            <a href="tel:8779902777">877.990.APPS</a>
            <a href="mailto:hello@apptology.com">hello@apptology.com</a>
            <span>California, USA</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Apptology. All rights reserved.</span>
          <span>Affiliates | Terms | Branding | Privacy | Careers</span>
        </div>
      </footer>
    </div>
  )
}

export default App
