import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Menu,
  MoveUpRight,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const imageBase = 'https://www.panalinks.com/wp-content/uploads'
const sampleImage = 'https://images.unsplash.com'

const clients = [
  ['Client logo placeholder', ''],
  ['Brand partner sample', ''],
  ['Commerce client', ''],
  ['Healthcare client', ''],
  ['Global partner', ''],
  ['Retail client', ''],
  ['Technology partner', ''],
  ['Growth partner', ''],
]

const services = [
  { number: '01', title: 'AI automation & agents', text: 'Turn repetitive work into intelligent systems that think, act and keep your team moving.', color: 'lime' },
  { number: '02', title: 'Websites & ecommerce', text: 'Digital storefronts and platforms that feel effortless to use and built to grow with you.', color: 'blue' },
  { number: '03', title: 'Mobile applications', text: 'Purposeful iOS, Android and React Native experiences made for real-world adoption.', color: 'orange' },
  { number: '04', title: 'Portals & software', text: 'Connected business tools that bring your data, people and processes into one place.', color: 'pink' },
]

const projects = [
  { title: 'Sample AI platform', type: 'AI AUTOMATION', image: `${sampleImage}/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80`, description: 'A placeholder case study image for a future Panalinks AI product story.' },
  { title: 'Sample web experience', type: 'WEB EXPERIENCE', image: `${sampleImage}/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80`, description: 'A placeholder case study image for a future website or ecommerce launch.' },
  { title: 'Sample mobile product', type: 'MOBILE APP', image: `${sampleImage}/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80`, description: 'A placeholder case study image for a future mobile application story.' },
]

const testimonials = [
  { quote: 'They have a very supportive, mature, and conscientious team. We have used their services for a very long time and would not hesitate to recommend them.', name: 'Mr. Ajay Sharma', role: 'Manager, Rajiv Gandhi Foundation · India' },
  { quote: 'They are technically sound and have consistently met our expectations of delivery and quality.', name: 'Darren Tessitore', role: 'CEO, Thrive Management · USA' },
  { quote: 'Panalinks was fast and efficient without sacrificing quality. We are happy with their expertise and commitment.', name: 'Ram Iyer', role: 'Sunvera Software · USA' },
]

const faqs = [
  ['What exactly is an AI Agent, and how is it different from a chatbot?', 'An AI Agent can understand context, make decisions and complete actions across your tools. A chatbot primarily responds to conversations.'],
  ['How can deploying AI Agents benefit my business?', 'AI agents can reduce manual effort, respond faster, and make repeatable business processes more consistent and measurable.'],
  ['What types of websites and online stores do you develop?', 'We build WordPress, WooCommerce, Shopify and custom web portals for B2B and B2C businesses, with responsive and SEO-friendly foundations.'],
  ['Do you offer custom mobile app development?', 'Yes. Our team builds native and React Native applications for iOS and Android, from product definition through launch and support.'],
]

const aiWork = [
  ['Email AI Automation using n8n', 'This AI tool scans incoming emails to understand the context and generates intelligent, professional reply drafts for review.', `${sampleImage}/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80`],
  ['AI Appointment Booking - AI Chat Tool using n8n', 'An AI-powered assistant for scheduling appointments via chat, checking availability and preventing booking conflicts.', `${sampleImage}/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80`],
  ['Job Search - AI-Powered Job Finder', 'This tool searches platforms such as LinkedIn and Indeed, then filters relevant listings in real time.', `${sampleImage}/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80`],
  ['Mock Interview - AI-Powered Real-Time Interview Platform', 'An AI-driven platform that simulates interviews and evaluates communication, technical depth and improvement areas.', `${sampleImage}/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80`],
  ['ATS-Compatible Resume Checker - AI Resume Analyzer', 'This tool analyzes resumes for formatting, keywords, sections and overall ATS readiness with instant feedback.', `${sampleImage}/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80`],
]

const technologies = [
  ['n8n', ''],
  ['Gemini (Google AI)', ''],
  ['OpenAI (GPT Models)', ''],
  ['Vapi', ''],
  ['Deepgram', ''],
]

const blogs = [
  ['Custom Analytics Dashboards: 7 Powerful Benefits for 2026', 'custom-analytics-dashboards-business-guide/', `${sampleImage}/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80`],
  ['7 Proven CRO Strategy Tips to Skyrocket Digital Product Sales', 'cro-strategy-digital-products/', `${sampleImage}/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80`],
  ['UX Optimization Strategy: 9 Data-Backed Secrets for 2026', 'ux-optimization-strategy-data-ai-guide/', `${sampleImage}/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80`],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="announcement"><span>Since 1995</span><span>Delhi · India</span><span>AI automation, web & app development</span><a href="tel:+919899524524">+91 9899 524 524</a></div>
      <header className="header">
        <a className="logo" href="#top" aria-label="Panalinks home"><img src={`${imageBase}/2024/05/Panalink-New-Logo-Upscaled.jpg`} alt="Panalink Infotech Limited" /></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <button onClick={() => goTo('services')}>What we do</button>
          <button onClick={() => goTo('work')}>Our work</button>
          <button onClick={() => goTo('about')}>About us</button>
          <button onClick={() => goTo('insights')}>Insights</button>
          <button className="mobile-contact" onClick={() => goTo('contact')}>Start a project <ArrowUpRight size={16} /></button>
        </nav>
        <button className="header-cta" onClick={() => goTo('contact')}>Start a project <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-content">
            <div className="eyebrow light"><Sparkles size={15} /> Panalink Infotech Limited</div>
            <h1>AI Automation, Workflow Automation, <em>Web & App Development</em> Company in India</h1>
            <p className="hero-copy">We design intelligent digital systems that help businesses save time, reduce costs, and move forward with confidence.</p>
            <div className="hero-actions"><button className="button button-primary" onClick={() => goTo('contact')}>Start a conversation <ArrowUpRight size={17} /></button><button className="watch-link" onClick={() => goTo('services')}>Explore what we do <ChevronRight size={17} /></button></div>
          </div>
          <div className="hero-art" aria-label="Sample digital product dashboard graphic"><div className="product-window"><div className="window-bar"><span /><span /><span /><b>panalinks / workspace</b><i>•••</i></div><div className="window-body"><aside><strong>◎</strong><span /><span /><span /><span /><span /></aside><div className="window-content"><div className="content-heading"><small>OVERVIEW</small><b>Good morning, team</b><em>Live system status</em></div><div className="mini-stats"><div><small>Active workflows</small><b>24</b><strong>+18%</strong></div><div><small>Tasks automated</small><b>1,284</b><strong>+32%</strong></div></div><div className="chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="activity"><i /><span /><span /><span /></div></div></div></div><div className="floating-card floating-status"><span>●</span><b>All systems<br />operational</b></div><div className="floating-card floating-ai"><small>AI AGENT</small><b>Working quietly<br />in the background</b><i>↗</i></div></div>
        </section>

        <section className="client-strip"><div className="section-intro compact"><span className="eyebrow">Client relationships</span><h2>We love<br /><em>our clients.</em></h2><p>Good work travels further when it is built together.</p></div><div className="client-marquee"><div className="client-track">{[...clients, ...clients].map(([name, src], index) => <div className="client-logo" key={`${name}-${index}`}>{src ? <img src={src} alt={name} /> : <span>{name}</span>}</div>)}</div></div></section>

        <section className="services section" id="services"><div className="section-heading"><div><span className="eyebrow">What we do</span><h2>Complex problems.<br /><em>Clear solutions.</em></h2></div><p>From a first spark to a fully connected operation, our team brings strategy, design and technology into one conversation.</p></div><div className="service-grid">{services.map((service) => <article className={`service-card ${service.color}`} key={service.number}><span className="service-number">{service.number}</span><div className="service-icon"><Sparkles size={21} /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Explore service <ArrowUpRight size={16} /></a></article>)}</div></section>

        <section className="marquee"><div>AI AGENTS <span>✦</span> WORKFLOW AUTOMATION <span>✦</span> DIGITAL PRODUCTS <span>✦</span> AI AGENTS <span>✦</span></div></section>

        <section className="ai-work section"><div className="section-heading"><div><span className="eyebrow">Our AI work</span><h2>AI Agents Created<br /><em>By Panalinks.</em></h2></div><p>Practical AI tools that solve everyday business and career problems with thoughtful automation.</p></div><div className="ai-work-grid">{aiWork.map(([title, description, image], index) => <article className="ai-work-card" key={title}><div className="ai-work-image"><img src={image} alt={title} /><span>0{index + 1}</span></div><div><h3>{title}</h3><p>{description}</p><a href="#contact">Explore the work <ArrowUpRight size={16} /></a></div></article>)}</div></section>

        <section className="work section" id="work"><div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>Work that earns<br /><em>attention.</em></h2></div><a className="text-link" href="#contact">View all projects <ArrowUpRight size={17} /></a></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-index">0{index + 1}</span></div><div className="project-info"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><a href="#contact">Read case study <ChevronRight size={17} /></a></div></article>)}</div></section>

        <section className="about section" id="about"><div className="about-image sample-image sample-about"><div className="sample-badge">SAMPLE GRAPHIC / REPLACE LATER</div><div className="sample-window"><span /><span /><span /><b>workflow<br />in motion</b></div><div className="image-note"><span>01</span><b>Less busywork.<br />More possibility.</b></div></div><div className="about-copy"><span className="eyebrow">About us</span><h2>AI Automation, Workflow Automation, Web & App Development Company in India - Since 1995</h2><p>Founded in 1995 and incorporated as Panalink Infotech Limited in 2001, we are a Delhi-based technology company serving clients across India and worldwide. Over 25 years, we have evolved from website development and offshore software to become a full-service AI automation, workflow automation, and business process automation company. Today we build AI agents, n8n workflow automation systems, intelligent automation pipelines, mobile apps, ecommerce websites, WordPress websites and web portals delivering end-to-end digital transformation for businesses of all sizes.</p><div className="about-metrics"><div><strong>25+</strong><span>years of experience</span></div><div><strong>5k+</strong><span>customers supported</span></div><div><strong>1k+</strong><span>projects delivered</span></div></div><a className="text-link" href="#contact">Learn more about us <ArrowUpRight size={17} /></a></div></section>

        <section className="process section"><div className="section-heading"><div><span className="eyebrow">How we work</span><h2>A better way<br />from <em>idea to impact.</em></h2></div><p>Good work starts with listening. Our process keeps decisions clear, momentum visible and the final product grounded in what your business needs.</p></div><div className="process-list">{['Defining scope', 'UI/UX design', 'Development', 'Deployment'].map((step, index) => <div className={`process-step step-${index + 1}`} key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{['We get close to the challenge and agree what success looks like.', 'We make the future tangible, useful and easy to choose.', 'We build in thoughtful increments, with the right technology.', 'We launch, learn and stay close as your needs evolve.'][index]}</p><ArrowUpRight size={20} /></div>)}</div></section>

        <section className="technology section"><div className="section-heading"><div><span className="eyebrow">Our technologies</span><h2>We use<br /><em>technologies.</em></h2></div><p>The right tools for intelligent automation, reliable products and experiences that are ready for what comes next.</p></div><div className="technology-grid">{technologies.map(([name, image]) => <div className="technology-card" key={name}>{image ? <img src={image} alt={name} /> : <span className="technology-placeholder">{name.slice(0, 2).toUpperCase()}</span>}<h3>{name}</h3></div>)}</div></section>

        <section className="testimonial-band"><div className="testimonial-label"><span className="eyebrow light">A few kind words</span><strong>5,000+ customers<br />win deals with us.</strong><div className="testimonial-controls"><button onClick={() => setTestimonialIndex((testimonialIndex + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">←</button><button onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)} aria-label="Next testimonial">→</button></div></div><div className="testimonial-card"><div className="quote-mark">“</div><p>{testimonials[testimonialIndex].quote}</p><div className="testimonial-person"><span className="avatar">{testimonials[testimonialIndex].name.charAt(0)}</span><span><b>{testimonials[testimonialIndex].name}</b><small>{testimonials[testimonialIndex].role}</small></span></div><div className="testimonial-count">0{testimonialIndex + 1} / 0{testimonials.length}</div></div></section>

        <section className="faq section" id="insights"><div className="section-heading"><div><span className="eyebrow">Good to know</span><h2>Questions,<br /><em>answered.</em></h2></div><p>Still curious? Send us a note and a real person from our team will get back to you.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'is-active' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><ChevronDown size={20} /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></section>

        <section className="blogs section"><div className="section-heading"><div><span className="eyebrow">Our articles</span><h2>Latest<br /><em>blogs.</em></h2></div><a className="text-link" href="https://www.panalinks.com/blog/">View all blogs <ArrowUpRight size={17} /></a></div><div className="blog-grid">{blogs.map(([title, slug, image]) => <article className="blog-card" key={title}><a href={`https://www.panalinks.com/blog/${slug}`}><div className="blog-image"><img src={image} alt="" /></div><span>INSIGHTS / 2026</span><h3>{title}</h3><ArrowUpRight size={18} /></a></article>)}</div></section>

        <section className="contact" id="contact"><div><span className="eyebrow light">Let's start and let's connect</span><h2>Send us a<br /><em>message.</em></h2><p>Send us a message, and we'll promptly discuss your project with you.</p><div className="contact-details"><a href="tel:+919899524524">+91-9899524524</a><a href="mailto:contactus@panalinks.com">contactus@panalinks.com</a><span>Delhi, India</span></div></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Your name<input required name="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" placeholder="you@company.com" /></label><label>Tell us about your project<textarea required name="message" rows="4" placeholder="What can we help you build?" /></label><button className="button button-primary" type="submit">Send request <ArrowUpRight size={17} /></button></form></section>
      </main>

      <footer className="footer"><div className="footer-top"><div className="footer-brand"><a className="logo footer-logo" href="#top"><img src={`${imageBase}/2024/05/Panalink-New-Logo-Upscaled.jpg`} alt="Panalink Infotech Limited" /></a><p>Founded in 1995, Panalinks specializes in AI automation, workflow automation, business process automation, and n8n-powered intelligent automation for businesses in India and Delhi.</p><div className="footer-contact"><a href="tel:+919899524524">+91-9899-524-524</a><a href="mailto:contactus@panalinks.com">contactus@panalinks.com</a></div></div><div className="footer-column"><h3>Quick links</h3><a href="#top">Home</a><a href="#about">About Us</a><a href="#insights">Blogs</a><a href="#contact">Contact Us</a></div><div className="footer-column"><h3>Services</h3><a href="#services">AI & AI Agent Development</a><a href="#services">Automation With n8n</a><a href="#services">Website Development</a><a href="#services">Mobile App Development</a><a href="#services">PHP / Laravel Development</a></div><div className="footer-column"><h3>Follow us on</h3><a href="https://www.facebook.com/panalink">Facebook</a><a href="https://www.linkedin.com/company/panalink-infotech-ltd">LinkedIn</a><a href="https://www.instagram.com/panalinkinfotech/">Instagram</a><a href="https://wa.me/919899524524">WhatsApp</a></div></div><div className="footer-bottom"><span>Copyright © 2026 Panalink Infotech Limited | All rights reserved.</span><div><a href="https://www.panalinks.com/terms-and-conditions/">Terms & Conditions</a><a href="https://www.panalinks.com/privacy-policy/">Privacy Policy</a><a className="back-top" href="#top">Back to top <MoveUpRight size={16} /></a></div></div></footer>
    </div>
  )
}

export default App
