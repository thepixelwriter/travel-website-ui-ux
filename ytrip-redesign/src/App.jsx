import { useState } from 'react'
import './App.css'

const benefits = [
  {
    icon: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80',
    title: 'Best Price Guaranteed',
    copy: 'With 1200+ suppliers, Yuva Trip delivers the smartest fares for every trip.',
  },
  {
    icon: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=80&q=80',
    title: '24*7*365 Support',
    copy: 'Our team is always ready to help with queries, changes and travel assistance.',
  },
  {
    icon: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=80&q=80',
    title: 'Fast and Easy Booking',
    copy: 'A smooth 3-step process keeps bookings simple, clear and stress-free.',
  },
  {
    icon: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=80&q=80',
    title: '100% Safe & Secure',
    copy: 'Protected payments and trustworthy service keep your getaway worry-free.',
  },
]

const offers = [
  {
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
    title: 'Global Flight Deals',
    code: 'EXTRADEAL',
    copy: 'Book premium fares and discover better routes for every destination.',
    tag: 'Flights',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    title: '5000 Off on International Trips',
    code: 'YUAF2',
    copy: 'Save more on your next getaway with exclusive seasonal flight discounts.',
    tag: 'Flights',
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    title: 'Exclusive Holiday Packages',
    code: 'DEAL',
    copy: 'Handpicked experiences that turn weekends into unforgettable adventures.',
    tag: 'Holidays',
  },
  {
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    title: 'Find Cheap Hotel Deals',
    code: 'YUAH32',
    copy: 'Stay in comfort with curated rates, offers and city-center savings.',
    tag: 'Hotels',
  },
]

const destinations = [
  { city: 'Bali', country: 'Indonesia', price: 'From ₹12,999', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80' },
  { city: 'Paris', country: 'France', price: 'From ₹18,499', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80' },
  { city: 'Dubai', country: 'UAE', price: 'From ₹14,399', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80' },
  { city: 'Goa', country: 'India', price: 'From ₹6,799', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80' },
]

const tools = [
  { image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=500&q=80', title: 'World Atlas' },
  { image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80', title: 'World Currency' },
  { image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80', title: 'World Weather' },
  { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80', title: 'World Clock' },
]

const posts = [
  {
    title: 'Planning your next trip: travel made easy',
    copy: 'Smart packing, flexible dates and realistic budgets make every journey smoother.',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Budget travel tips for domestic holidays',
    copy: 'Discover simple ways to stretch your plan without compromising comfort or style.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'What to check before booking your next flight',
    copy: 'From baggage to fare comparison, a little prep goes a long way on international routes.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
  },
]

const infoPages = {
  about: {
    kicker: 'About Yuva Trip',
    title: 'About Us',
    summary: 'We help travellers plan simpler, smarter and more memorable journeys across domestic and international destinations.',
    sections: [
      {
        title: 'Our story',
        body: [
          'Yuva Trip was created to make travel planning feel less stressful and more personal. Our mission is to help travellers choose the best flights, stays and holiday experiences with clarity and confidence.',
          'From short city breaks to long-haul escapes, we guide customers through every stage of the process with transparent pricing, responsive support and thoughtfully curated offers.',
        ],
      },
      {
        title: 'Why travellers choose us',
        body: [
          'We offer a broad network of domestic and international flight options, budget-friendly hotel deals and destination-guided holiday packages designed around real-world needs.',
          'Our approach blends convenience, affordability and human support so every booking feels easy and secure.',
        ],
      },
    ],
  },
  contact: {
    kicker: 'Get in touch',
    title: 'Contact Us',
    summary: 'Connect with our travel support team for bookings, assistance, or destination guidance.',
    sections: [
      {
        title: 'Support',
        body: [
          'Email: support@yuvagroup.com / holidays@ytrip.in',
          'Phone: +91 9289894977 / +91 9560057858',
          'Address: Plot No 64, Patparganj Industrial Area, East Delhi, New Delhi, India (110092)',
        ],
      },
      {
        title: 'Working hours',
        body: [
          'Our support desk is available round the clock for urgent travel assistance and booking related help.',
          'We are committed to responding quickly and resolving booking issues with a customer-first approach.',
        ],
      },
    ],
  },
  privacy: {
    kicker: 'Policy details',
    title: 'Privacy Policy',
    summary: 'Your trust matters. We protect your personal information and use it responsibly for bookings, support and service optimisation.',
    sections: [
      {
        title: 'Information we collect',
        body: [
          'We collect booking information, contact details, travel preferences and communication data needed to provide a smooth travel experience.',
          'This information may be used to confirm reservations, support customer requests and improve the quality of our services.',
        ],
      },
      {
        title: 'How we use it',
        body: [
          'Your information helps us send confirmations, follow up on bookings, protect against fraud and personalise travel recommendations.',
          'We do not sell personal data and only share it with relevant service providers when required for your booking.',
        ],
      },
    ],
  },
  terms: {
    kicker: 'Terms and conditions',
    title: 'Terms & Conditions',
    summary: 'By using Yuva Trip, you agree to the terms of booking, travel support and payment processing described below.',
    sections: [
      {
        title: 'Booking responsibility',
        body: [
          'Customers are responsible for checking all booking details, including destination, travel dates, fare conditions and passenger information before final confirmation.',
          'Yuva Trip acts as a booking facilitator and is not liable for changes, discontinuation or service issues outside our operational control.',
        ],
      },
      {
        title: 'Payment and confirmations',
        body: [
          'All pricing and inclusions should be reviewed before completing a booking. Additional taxes, changes in supplier policy or airport regulations may apply.',
          'Payment confirmation and travel vouchers should be retained for all bookings and shared with service providers where needed.',
        ],
      },
    ],
  },
  cancellation: {
    kicker: 'Travel support',
    title: 'Cancellation Policy',
    summary: 'Cancellation rules vary by product, supplier and fare type. We recommend reviewing the right policy before finalising travel plans.',
    sections: [
      {
        title: 'General rules',
        body: [
          'Most bookings are subject to supplier-specific cancellation terms. Some fares may be non-refundable or have limited change flexibility.',
          'If a cancellation request is made after confirmation, the applicable refund or penalty will be calculated based on the original booking terms.',
        ],
      },
      {
        title: 'How we assist',
        body: [
          'Our support team can explain the available options and help communicate with suppliers when a cancellation or reschedule request is needed.',
          'For urgent changes, we recommend contacting us early to improve the chances of a better outcome.',
        ],
      },
    ],
  },
  refund: {
    kicker: 'Customer care',
    title: 'Refund & Return Policy',
    summary: 'Refund eligibility depends on the travel product, timing of the request and policy of the relevant supplier.',
    sections: [
      {
        title: 'Refund process',
        body: [
          'Approved refunds are typically processed back to the original payment method after supplier confirmation and verification of all booking details.',
          'The processing time may vary based on the bank, card issuer or travel provider involved.',
        ],
      },
      {
        title: 'Support during disputes',
        body: [
          'If a booking issue arises, customers can contact our support team for a review and assistance with the next steps.',
          'We aim to resolve concerns clearly and promptly while keeping the customer informed throughout the process.',
        ],
      },
    ],
  },
  'print-ticket': {
    kicker: 'Booking services',
    title: 'Print Ticket',
    summary: 'Keep your itinerary ready for travel with quick access to your confirmed ticket and booking details.',
    sections: [
      {
        title: 'Retrieve your ticket',
        body: [
          'Use your booking reference and passenger details to locate a confirmed reservation and review the itinerary.',
          'Keep a digital or printed copy available when required by the airline, hotel or transport provider.',
        ],
      },
      {
        title: 'Need assistance?',
        body: [
          'If you cannot locate your booking confirmation, contact our support team with the email address or phone number used during booking.',
          'We can help verify the reservation and guide you through the next steps.',
        ],
      },
    ],
  },
  'web-checking': {
    kicker: 'Before you fly',
    title: 'Web Checking',
    summary: 'Prepare for departure with online check-in guidance and the information you need before reaching the airport.',
    sections: [
      {
        title: 'Before check-in',
        body: [
          'Keep your booking reference, passenger name and valid identity document ready before starting online check-in.',
          'Check the airline instructions for opening times, baggage limits and airport reporting requirements.',
        ],
      },
      {
        title: 'Travel day support',
        body: [
          'Online check-in availability and seat selection depend on the airline and fare type.',
          'Contact our support team if you need help understanding your airline instructions or booking details.',
        ],
      },
    ],
  },
}

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'contact', label: 'Contact Us' },
  { key: 'offers', label: 'Offers' },
  { key: 'destinations', label: 'Destinations' },
  { key: 'tools', label: 'Travel Tools' },
  { key: 'blogs', label: 'Travel Blogs' },
]

function renderInfoPage(pageKey) {
  const page = infoPages[pageKey]

  if (!page) return null

  return (
    <section className="info-page">
      <div className="container info-shell">
        <div className="info-hero">
          <p className="eyebrow eyebrow-dark">{page.kicker}</p>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
        </div>

        <div className="info-grid">
          {page.sections.map((section) => (
            <article className="info-card" key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={`${section.title}-${paragraph.substring(0, 14)}`}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('Flights')
  const [from, setFrom] = useState('Delhi')
  const [to, setTo] = useState('Mumbai')
  const [status, setStatus] = useState('')
  const [travellerOpen, setTravellerOpen] = useState(false)
  const [activePage, setActivePage] = useState('home')

  const swapLocations = () => {
    setFrom(to)
    setTo(from)
  }

  const submitSearch = (event) => {
    event.preventDefault()
    setStatus(`Searching ${activeTab.toLowerCase()} from ${from} to ${to}`)
  }

  const goToPage = (pageKey) => {
    setActivePage(pageKey)
    if (pageKey === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="page-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Yuva Trip - your journey, simplified</span>
          <span>support@yuvagroup.com / holidays@ytrip.in | +91 9289894977 / 9560057858</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <button type="button" className="brand brand-button" onClick={() => goToPage('home')} aria-label="Yuva Trip home">
            <span className="brand-mark">Y</span>
            <span className="brand-text">
              <strong>Yuva</strong>Trip
              <small>TRAVEL MADE EASY</small>
            </span>
          </button>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={activePage === item.key ? 'nav-button active' : 'nav-button'}
                onClick={() => goToPage(item.key === 'offers' ? 'home' : item.key)}
              >
                {item.label}
              </button>
            ))}
            <button type="button" className="login-link nav-button" onClick={() => goToPage('contact')}>Login</button>
          </nav>
        </div>
      </header>

      <main>
        {activePage === 'home' ? (
          <>
            <section className="hero-section" id="booking">
              <div className="container hero-layout">
                <div className="hero-copy">
                  <p className="eyebrow">Plan less. Travel more.</p>
                  <h1>Dream trips, simpler planning.</h1>
                  <p className="lead">
                    Fly farther, stay better and book smarter with a travel experience built around comfort,
                    value and clarity.
                  </p>
                  <div className="hero-badges">
                    <span>Best Price Guarantee</span>
                    <span>1200+ Suppliers</span>
                    <span>Secure Booking</span>
                  </div>
                </div>

                <div className="hero-visual" aria-label="Travel destination highlights">
                  <div className="hero-card hero-card-large">
                    <img
                      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
                      alt="Scenic mountain destination"
                    />
                    <div className="hero-card-copy">
                      <small>Featured escape</small>
                      <strong>Swiss Alps</strong>
                      <span>From ₹21,599</span>
                    </div>
                  </div>
                  <div className="hero-mini-card">
                    <span>14k+ happy travellers</span>
                    <strong>4.8 / 5 rating</strong>
                  </div>
                </div>
              </div>

              <div className="container search-shell">
                <form className="search-panel" onSubmit={submitSearch}>
                  <div className="search-tabs">
                    {['Flights', 'Hotels', 'Packages'].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="trip-toggle">
                    <label><input type="radio" name="trip" defaultChecked /> OneWay</label>
                    <label><input type="radio" name="trip" /> Round Trip</label>
                    <label><input type="radio" name="trip" /> Multi City</label>
                  </div>

                  <div className="search-grid">
                    <label className="field">
                      <span>From</span>
                      <input value={from} onChange={(event) => setFrom(event.target.value)} />
                      <small>DEL · New Delhi</small>
                    </label>

                    <button className="swap-button" type="button" onClick={swapLocations} aria-label="Swap locations">
                      ⇄
                    </button>

                    <label className="field">
                      <span>To</span>
                      <input value={to} onChange={(event) => setTo(event.target.value)} />
                      <small>BOM · Mumbai</small>
                    </label>

                    <label className="field compact">
                      <span>Departure</span>
                      <input type="text" defaultValue="14 Sep 2026" />
                      <small>Monday</small>
                    </label>

                    <label className="field compact">
                      <span>Return</span>
                      <input type="text" defaultValue="15 Sep 2026" />
                      <small>Tuesday</small>
                    </label>

                    <div className="field traveller-field">
                      <button type="button" onClick={() => setTravellerOpen((value) => !value)}>
                        <span>Traveller & Class</span>
                        <strong>1 Traveller</strong>
                        <small>Economy</small>
                      </button>

                      {travellerOpen && (
                        <div className="traveller-popover">
                          <label>
                            Adults
                            <select defaultValue="1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                          </label>
                          <label>
                            Children
                            <select defaultValue="0">
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </label>
                          <label>
                            Class
                            <select defaultValue="Economy">
                              <option>Economy</option>
                              <option>Premium Economy</option>
                              <option>Business</option>
                            </select>
                          </label>
                          <button className="popover-done" type="button" onClick={() => setTravellerOpen(false)}>
                            Done
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="search-footer">
                    <span>{status || 'Search flights, hotels and holiday packages tailored to your plans.'}</span>
                    <button className="primary-button" type="submit">Search {activeTab}</button>
                  </div>
                </form>
              </div>
            </section>

            <section className="benefits-section">
              <div className="container benefit-grid">
                {benefits.map((benefit) => (
                  <article className="benefit-card" key={benefit.title}>
                    <img src={benefit.icon} alt="" />
                    <div>
                      <h2>{benefit.title}</h2>
                      <p>{benefit.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="offers-section" id="offers">
              <div className="container">
                <div className="section-head">
                  <div>
                    <p className="eyebrow eyebrow-dark">Make your next move</p>
                    <h2>Special offers</h2>
                  </div>
                  <a href="#offers">View all offers</a>
                </div>

                <div className="offer-grid">
                  {offers.map((offer) => (
                    <article className="offer-card" key={offer.title}>
                      <div className="offer-image" style={{ backgroundImage: `url(${offer.image})` }}>
                        <span>{offer.code}</span>
                      </div>
                      <div className="offer-body">
                        <p className="card-tag">{offer.tag}</p>
                        <h3>{offer.title}</h3>
                        <p>{offer.copy}</p>
                        <a href="#offers">View offer</a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="destinations-section" id="destinations">
              <div className="container">
                <div className="section-head">
                  <div>
                    <p className="eyebrow eyebrow-dark">Trending escapes</p>
                    <h2>Explore popular destinations</h2>
                  </div>
                  <a href="#booking">Plan my trip</a>
                </div>

                <div className="destination-grid">
                  {destinations.map((destination) => (
                    <article className="destination-card" key={destination.city}>
                      <img src={destination.image} alt={destination.city} />
                      <div className="destination-overlay">
                        <div>
                          <strong>{destination.city}</strong>
                          <span>{destination.country}</span>
                        </div>
                        <em>{destination.price}</em>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="tools-section" id="tools">
              <div className="container">
                <div className="section-head section-head-inline">
                  <div>
                    <p className="eyebrow eyebrow-dark">Travel smart</p>
                    <h2>Travel tools</h2>
                  </div>
                  <span>Everything you need before takeoff.</span>
                </div>

                <div className="tool-grid">
                  {tools.map((tool) => (
                    <a href="#booking" className="tool-card" key={tool.title}>
                      <img src={tool.image} alt={tool.title} />
                      <span>{tool.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="stories-section" id="blogs">
              <div className="container stories-layout">
                <div className="stories-copy">
                  <p className="eyebrow eyebrow-dark">Real trips. Real stories.</p>
                  <h2>Travel inspiration from people who booked with us.</h2>
                </div>

                <div className="story-list">
                  {posts.map((post) => (
                    <article className="story-card" key={post.title}>
                      <img src={post.image} alt={post.title} />
                      <div>
                        <h3>{post.title}</h3>
                        <p>{post.copy}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          renderInfoPage(activePage)
        )}
      </main>

      <footer className="site-footer" id="support">
        <div className="container footer-grid">
          <div className="footer-brand">
            <button type="button" className="brand footer-brand-link brand-button" onClick={() => goToPage('home')}>
              <span className="brand-mark">Y</span>
              <span className="brand-text">
                <strong>Yuva</strong>Trip
                <small>TRAVEL MADE EASY</small>
              </span>
            </button>
            <p>PLOT NO 64, PATPARGANJ INDUSTRIAL AREA, East Delhi, New Delhi, India (110092)</p>
          </div>

          <div>
            <h3>Quick link</h3>
            <button type="button" className="footer-link-button" onClick={() => goToPage('home')}>Home</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('about')}>About Us</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('contact')}>Contact Us</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('print-ticket')}>Print Ticket</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('web-checking')}>Web Checking</button>
          </div>

          <div>
            <h3>Service</h3>
            <button type="button" className="footer-link-button" onClick={() => goToPage('home')}>Flight</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('home')}>Hotel</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('home')}>Bus</button>
          </div>

          <div>
            <h3>Important link</h3>
            <button type="button" className="footer-link-button" onClick={() => goToPage('cancellation')}>Cancellation Policy</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('terms')}>Terms & Conditions</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('privacy')}>Privacy Policy</button>
            <button type="button" className="footer-link-button" onClick={() => goToPage('refund')}>Refund Policy</button>
          </div>

          <div className="footer-contact">
            <h3>Get in touch</h3>
            <p><span aria-hidden="true">⌖</span> PLOT NO 64, PATPARGANJ INDUSTRIAL AREA, East Delhi, New Delhi, India (110092)</p>
            <p><span aria-hidden="true">☎</span> +91 9289894977 / 9560057858</p>
            <p><span aria-hidden="true">✉</span> support@yuvagroup.com / holidays@ytrip.in</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>We Accept Visa • Mastercard • RuPay</span>
          <span>support@yuvagroup.com / holidays@ytrip.in</span>
        </div>
      </footer>
    </div>
  )
}

export default App
