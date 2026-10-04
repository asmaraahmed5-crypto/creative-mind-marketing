import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Compass, Lightbulb, Rocket, TrendingUp, Palette, Code, Gamepad2, Bot, MessagesSquare, ClipboardList, RefreshCw } from 'lucide-react'
import ServiceCarousel from './components/ServiceCarousel'
import ActivationAccordion from './components/ActivationAccordion'
import IndustryTimeline from './components/IndustryTimeline'
import ProcessScroll from './components/ProcessScroll'
import ClientMarquee from './components/ClientMarquee'
import WhyList from './components/WhyList'
import CtaMarquee from './components/CtaMarquee'
import FooterHover from './components/FooterHover'
import GlowMenu from './components/GlowMenu'
import BeamsBackground from './components/BeamsBackground'


const BLUE = '#264d94', GREEN = '#62b65d', CORAL = '#e05f52', YELLOW = '#b9b72a'

const services = [
  { id: 'digital', c: BLUE, Icon: TrendingUp, title: 'Digital Marketing, SEO & Content', tag: 'Get Found by the People Looking for You.',
    body: ["Your customers need to find you, notice you and have a reason to click."],
    list: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'SEO', 'Social media management', 'Content creation', 'Campaign strategy'],
    get: 'More visibility and marketing built for results, not just likes.', cta: 'Grow Your Online Presence' },
  { id: 'branding', c: CORAL, Icon: Palette, title: 'Branding, Design & Media Production', tag: 'Look Good. Feel Professional. Be Remembered.',
    body: ['First impressions matter. We create identities, packaging, content and videos that make you stand out.'],
    list: [],
    get: 'A consistent brand people recognize everywhere.', cta: 'Make My Brand Stand Out' },
  { id: 'web', c: GREEN, Icon: Code, title: 'Website, Software & E-Commerce', tag: 'Turn Browsers Into Buyers.',
    body: ['Your website should help people understand, trust and buy from you.'],
    list: ['Business websites', 'E-commerce stores', 'Shopify stores', 'WooCommerce stores', 'Mobile applications', 'Custom web applications', 'React websites', 'Flutter applications'],
    get: 'Fast, easy-to-use experiences that turn visitors into buyers.', cta: 'Build Something Great' },
  { id: 'games', c: YELLOW, Icon: Gamepad2, title: 'Game Design & Development', tag: "Have an Idea for a Game? Let's Bring It to Life.",
    body: ['From concept to a game people can download and play, we handle it end to end.'],
    list: ['2D & 3D games', 'AR/VR experiences', 'Multiplayer games', 'Cross-platform games', 'Game monetization', 'Analytics'],
    get: 'Creativity, technology and business goals working together.', cta: "Let's Create a Game" },
  { id: 'ai', c: '#009edb', Icon: Bot, title: 'AI Automation & AI Agents', tag: 'Let Technology Do the Repetitive Work.',
    body: ['We build AI agents and automations that connect the tools you already use.'],
    list: [],
    get: 'Less repetitive work, more time for customers and growth.', cta: 'Automate My Business' },
]

const activations = [
  { title: 'Shopper Enhancements', desc: 'Make the shopping experience more engaging and memorable.', image: '/activation/shopper.jpg', color: BLUE },
  { title: 'Speciality & Free-Standing Displays', desc: "Put your product where people can't miss it.", image: '/activation/displays.jpg', color: CORAL },
  { title: 'Shelf Branding', desc: 'Turn ordinary shelves into attention-grabbing brand spaces.', image: '/activation/shelf.jpg', color: GREEN },
  { title: 'Mall & Brand Activations', desc: 'Take your campaign into the real world and create experiences people want to talk about.', image: '/activation/mall.jpg', color: '#009edb' },
  { title: 'Tasting & Sampling', desc: 'Let customers experience your product before they buy it.', image: '/activation/tasting.jpg', color: YELLOW },
  { title: 'Outdoor Advertising & Signage', desc: 'Put your brand where your audience actually is.', image: '/activation/outdoor.jpg', color: CORAL },
]

const industries = [
  { title: 'Food & Beverage', desc: 'Make people stop scrolling, start craving and walk through your doors.', image: '/industries/food.jpg', color: CORAL },
  { title: 'Retail & E-Commerce', desc: 'Turn product discovery into clicks, carts and purchases.', image: '/industries/retail.jpg', color: BLUE },
  { title: 'Consumer Electronics', desc: 'Make product benefits easy to understand and exciting to explore.', image: '/industries/electronics.jpg', color: '#009edb' },
  { title: 'Fashion & Lifestyle', desc: 'Create a recognizable visual identity and a social presence people want to follow.', image: '/industries/fashion.jpg', color: GREEN },
  { title: 'Hospitality', desc: 'Turn your location, atmosphere and experience into content that makes people want to visit.', image: '/industries/hospitality.jpg', color: YELLOW },
  { title: 'Business & Professional Services', desc: 'Explain what you do in a simple, compelling way — and give potential customers a reason to choose you.', image: '/industries/business.jpg', color: BLUE },
]

const footerColumns = [
  { title: 'Explore', links: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Brand Activation', href: '#activation' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ] },
  { title: 'Services', links: [
    { label: 'Digital Marketing & SEO', href: '#services' },
    { label: 'Branding & Design', href: '#services' },
    { label: 'Websites & E-Commerce', href: '#services' },
    { label: 'Game Development', href: '#services' },
    { label: 'AI Automation', href: '#services' },
  ] },
]

const ctaWords = [
  { text: 'Digital Marketing', color: BLUE },
  { text: 'Branding & Design', color: CORAL },
  { text: 'Websites & E-Commerce', color: GREEN },
  { text: 'Brand Activation', color: '#009edb' },
  { text: 'Game Development', color: YELLOW },
  { text: 'AI Automation', color: BLUE },
]

const why = [
  { title: 'Clear Direction', desc: "Know what we're doing and, more importantly, why we're doing it.", image: '/why/direction.jpg', color: '#35b8f0' },
  { title: 'Ideas Built Around Your Business', desc: "No cookie-cutter campaigns copied from someone else's playbook.", image: '/why/ideas.jpg', color: '#ff8b7e' },
  { title: 'Consistent Brand Communication', desc: 'Your website, social media, advertising and physical presence all feel like the same brand.', image: '/why/brand.jpg', color: '#62b65d' },
  { title: 'Marketing With Purpose', desc: 'We focus on the actions that matter to your business — leads, enquiries, sales, bookings and growth.', image: '/why/purpose.jpg', color: '#e9e76a' },
  { title: 'Clear Communication', desc: "You'll know what's happening, what's next and when you can expect it.", image: '/why/communication.jpg', color: '#35b8f0' },
  { title: 'Quality Before Delivery', desc: 'Everything gets reviewed before it reaches your customers.', image: '/why/quality.jpg', color: '#62b65d' },
  { title: 'From Idea to Execution', desc: 'Strategy is great. Ideas are great. But we also make sure things actually get done.', image: '/why/execution.jpg', color: '#ff8b7e' },
]

const steps = [
  { title: 'Tell Us What You Need', desc: "We'll learn about your business, audience, goals and what's currently driving you crazy.", Icon: MessagesSquare, color: BLUE },
  { title: 'We Build the Plan', desc: "You'll receive a clear scope, timeline and pricing — so you know exactly what you're getting.", Icon: ClipboardList, color: GREEN },
  { title: "Let's Get Creative", desc: 'Our team develops the strategy, concepts, designs and content needed to bring your idea to life.', Icon: Lightbulb, color: CORAL },
  { title: 'You Stay in the Loop', desc: 'We share progress, collect your feedback and keep everything moving without the endless back-and-forth.', Icon: RefreshCw, color: YELLOW },
  { title: 'Launch Time!', desc: 'Your campaign, website, content or activation goes live.', Icon: Rocket, color: '#009edb' },
  { title: 'Keep Growing', desc: "We look at what's working, what isn't and where we can improve the next move.", Icon: TrendingUp, color: BLUE },
]

const clients = [
  { name: 'Shell', logo: 'shell' },
  { name: 'Mayar', logo: 'mayar' },
  { name: 'Aujan Coca-Cola', logo: 'aujan-coca-cola' },
  { name: 'Michelin', logo: 'michelin' },
  { name: 'Castrol', logo: 'castrol' },
  { name: 'Gento', logo: 'gento' },
  { name: 'Moulinex', logo: 'moulinex' },
  { name: 'Abbott', logo: 'abbott' },
  { name: 'Afia', logo: 'afia' },
  { name: 'Noor', logo: 'noor' },
  { name: 'Abdul Latif Jameel', logo: 'abdul-latif-jameel' },
  { name: 'Sunbulah Food Services', logo: 'sunbulah' },
  { name: 'Keeta Keemart', logo: 'keeta-keemart' },
  { name: 'Alcatel onetouch', logo: 'alcatel-onetouch' },
]

const faqs = [
  ['What does Creative Hands Marketing Services do?', "Creative Hands is a full-service marketing agency in Jeddah, Saudi Arabia. We offer digital marketing, SEO, social media, content creation, branding, design, media production, brand activation, website development, e-commerce, mobile apps, game development and AI automation."],
  ['Do you only work with businesses in Jeddah?', "No. We're based in Jeddah, but we work with businesses across Saudi Arabia and beyond. Whether you're in Riyadh, Jeddah, Dammam or another part of the Kingdom, we can help with your marketing, branding, digital and activation needs."],
  ['Can you manage our complete marketing?', 'Yes. If you need help with strategy, branding, social media, advertising, content, website development and physical brand activation, we can bring those services together into one connected marketing plan. That means less juggling between different agencies and a more consistent customer experience.'],
  ['Do you help small and growing businesses?', "Absolutely. You don't need to be a huge company to have great marketing. We work with businesses at different stages and build solutions around their goals, audience and available budget."],
  ['Can you help us get more customers?', "That's the goal. Depending on your business, we can use SEO, paid advertising, social media, content, conversion-focused websites, e-commerce and brand activation to help you attract and convert more of the right audience. The exact strategy depends on your business, customers and objectives."],
  ['Do you offer both online and offline marketing?', 'Yes. We can help you connect your digital presence with real-world customer experiences. That includes digital campaigns, social media and SEO alongside retail displays, shelf branding, sampling, outdoor advertising and mall activations.'],
  ['Can you create a website and handle our marketing too?', 'Yes. We can build your website or online store and then help you promote it through SEO, paid advertising, social media and content marketing. This creates a more connected journey from "I found you" → "I trust you" → "I bought from you."'],
  ['Do you provide AI automation for businesses?', 'Yes. We build AI-powered workflows and agents that can help businesses reduce repetitive manual tasks, connect different tools and streamline everyday processes. We work with technologies including n8n, Make, Zapier, OpenAI and Claude.'],
  ['How long does a marketing project take?', "It depends on what you're building. A branding project, website, digital campaign and full brand activation can all have different timelines. During the discovery stage, we'll define the scope and provide a clear estimated timeline before work begins."],
  ['How much do your services cost?', "There isn't a one-size-fits-all price. Your investment depends on the service, project size, goals, audience and scope. We'll provide a clear proposal and pricing before the project starts, so you know exactly what you're investing in."],
  ['How do I get started with Creative Hands?', "It's easy. Tell us a little about your business, what you're trying to achieve and where you need help. We'll take it from there."],
]

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}
const stagger = (i) => ({ ...fade, transition: { ...fade.transition, delay: (i % 3) * 0.08 } })

const pillars = [
  { Icon: Compass, title: 'Strategy', desc: "Know who you're talking to, what to say and where to say it.", color: BLUE },
  { Icon: Lightbulb, title: 'Creativity', desc: 'Look different, sound different and give people a reason to remember you.', color: CORAL, highlight: true },
  { Icon: Rocket, title: 'Execution', desc: 'Turn ideas into campaigns, content, websites and real-world experiences that actually get launched.', color: GREEN },
]

const glow = (rgb) => `radial-gradient(circle, rgba(${rgb},0.34) 0%, rgba(${rgb},0.14) 50%, rgba(${rgb},0) 100%)`
const menuItems = [
  { label: 'About', href: '#about', color: BLUE, gradient: glow('38,77,148') },
  { label: 'Services', href: '#services', color: GREEN, gradient: glow('98,182,93') },
  { label: 'Activation', href: '#activation', color: CORAL, gradient: glow('224,95,82') },
  { label: 'Process', href: '#process', color: YELLOW, gradient: glow('216,214,82') },
  { label: 'FAQ', href: '#faq', color: BLUE, gradient: glow('38,77,148') },
]

export default function App() {
  const [active, setActive] = useState('')
  const [navHot, setNavHot] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [spot, setSpot] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth > 900 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const targets = menuItems.map((m) => document.querySelector(m.href))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(menuItems.find((m) => m.href === `#${e.target.id}`)?.label ?? '')
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    targets.forEach((t) => t && io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header className={`nav${menuOpen ? ' is-open' : ''}`} onMouseEnter={() => setNavHot(true)} onMouseLeave={() => { setNavHot(false); setSpot(null) }}>
        <div className="nav__fx" aria-hidden="true">
          <motion.div className="nav__aura" initial={false} animate={{ opacity: navHot || menuOpen ? 1 : 0 }} transition={{ duration: 0.5 }} />
          <motion.div
            className="nav__spot"
            initial={false}
            animate={{ opacity: spot ? 1 : 0, x: spot ? spot.x - 300 : 0 }}
            transition={{ opacity: { duration: 0.4 }, x: { type: 'spring', stiffness: 160, damping: 22 } }}
            style={{ background: spot ? spot.gradient : 'none' }}
          />
        </div>
        <div className="wrap">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
            <motion.img src="/logo.png" alt="" whileHover={{ rotate: -10, scale: 1.12 }} transition={{ type: 'spring', stiffness: 300, damping: 14 }} />
            <span><b>CREATIVE HANDS</b><small>MARKETING SERVICES</small></span>
          </a>
          <GlowMenu
            items={menuItems}
            activeItem={active}
            onItemClick={setActive}
            onItemHover={(item, r) => setSpot(item ? { x: r.left + r.width / 2, gradient: item.gradient } : null)}
            className="nav-menu"
          />
          <motion.a href="#contact" className="btn primary nav-cta" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>Get a Quote Today!</motion.a>
          <button
            type="button"
            className="nav-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

        <nav id="mobile-menu" className="nav-panel" aria-label="Mobile">
          <ul>
            {menuItems.map((m) => (
              <li key={m.label}>
                <a
                  href={m.href}
                  className={active === m.label ? 'is-active' : ''}
                  style={{ '--c': m.color }}
                  onClick={() => { setActive(m.label); setMenuOpen(false) }}
                >
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn primary nav-panel__cta" onClick={() => setMenuOpen(false)}>Get a Quote Today!</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <BeamsBackground className="hero__gl" />
          <div className="hero__shade" />
          <div className="wrap hero__inner">
            <motion.div className="hero__content" {...fade}>
              <span className="hero__badge">
                <img src="/logo.png" alt="" />
                Digital Marketing &amp; Brand Activation Agency in Jeddah, Saudi Arabia
              </span>
              <h1>
                Your <span className="hw-yellow">Brand</span> Deserves More Than Just <span className="hw-coral">Attention.</span>
                <span className="hw-grad">It Deserves to Be Remembered.</span>
              </h1>
              <p className="hero__lead"><b>Got a great product but struggling to get people to notice it?</b> Launching a new business? Looking for more customers? Ready to give your brand a fresh look?</p>
              <p className="hero__lead">Creative Hands Marketing Services helps businesses across Saudi Arabia turn ideas into brands people notice, trust and remember. From digital marketing and SEO to branding, content, technology and in-store brand activation, we bring everything together to help you attract the right audience and turn attention into action.</p>
              <div className="cta">
                <a href="#contact" className="btn light hero__btn">Let’s Build Your Brand</a>
                <a href="#clients" className="btn glass hero__btn">Explore Our Work</a>
              </div>
              <p className="arabic" lang="ar" dir="rtl">اليد المبدعة للخدمات التسويقية</p>
            </motion.div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="about__pattern" />
          <div className="about__glow" />
          <div className="wrap about__inner">
            <motion.div {...fade}>
              <p className="eyebrow">About Us</p>
              <h2>We Don't Just Market Your Business.<br /><span className="accent">We Help People Choose It.</span></h2>
              <p className="lead">Let's face it — your customers have endless options. So why should they choose you? That's where we come in.</p>
              <p className="lead">Creative Hands is a full-service marketing agency based in Jeddah, Saudi Arabia. We help businesses build stronger brands, reach the right people and create experiences that turn curious visitors into customers.</p>
            </motion.div>
            <div className="pillars">
              {pillars.map(({ Icon, title, desc, color, highlight }, i) => (
                <motion.div className={`pillar${highlight ? ' pillar--hl' : ''}`} key={title} style={{ '--c': color }} {...stagger(i)}>
                  <div className="pillar__icon"><Icon size={24} strokeWidth={2.2} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.p className="result" {...fade}><b>The result?</b> A brand that's easier to discover, easier to understand and much harder to forget.</motion.p>
          </div>
        </section>

        <section id="services" className="services">
          <div className="wrap">
            <motion.div className="svc-head" {...fade}>
              <p className="eyebrow">Services</p>
              <h2>Everything You Need to Get Noticed, Get Chosen &amp; Grow.</h2>
              <p className="lead">One team for marketing, creativity and technology — no need to juggle five agencies.</p>
            </motion.div>
            <ServiceCarousel services={services} />
          </div>
        </section>

        <section id="activation" className="activation">
          <div className="about__pattern" />
          <div className="about__glow" />
          <div className="wrap activation__inner">
            <motion.div className="activation__text" {...fade}>
              <p className="eyebrow">Brand &amp; Shopper Activation</p>
              <h2>Your Customers Aren't <span className="accent">Only Online.</span></h2>
              <p className="lead">Every one of those moments matters. Our brand activation services help your business create memorable physical experiences where customers are already making buying decisions.</p>
              <p className="goal"><b>The goal?</b> More attention at the moment it matters — when customers are deciding what to buy.</p>
              <a href="#contact" className="btn primary">Plan My Brand Activation</a>
            </motion.div>
            <motion.div className="activation__acc" {...fade}>
              <ActivationAccordion items={activations} />
            </motion.div>
          </div>
        </section>

        <section id="industries">
          <div className="wrap">
            <motion.div className="center" {...fade}>
              <p className="eyebrow">Industries</p>
              <h2>Your Customers Are Different. Your Marketing Should Be Too.</h2>
              <p className="lead">A restaurant doesn't sell like a real estate company. A fashion brand doesn't communicate like a tech company. That's why we build campaigns around your audience, your product and the moment they make a buying decision.</p>
            </motion.div>
            <IndustryTimeline items={industries} />
          </div>
        </section>

        <section id="why" className="why">
          <div className="wrap">
            <motion.div {...fade}>
              <p className="eyebrow">Why Creative Hands</p>
              <h2>Because You Don't Need "More Marketing." You Need Marketing That Makes Sense.</h2>
              <p className="lead">You don't need endless meetings. You don't need complicated marketing jargon. And you definitely don't need to wonder what your agency is doing with your budget. You need a team that understands your business, your audience and your goals.</p>
            </motion.div>
            <WhyList items={why} />
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <motion.div className="center" {...fade}>
              <p className="eyebrow">Our Process</p>
              <h2>From "I Have an Idea" to "Look What We Built!"</h2>
              <p className="lead">Getting started shouldn't feel complicated.</p>
            </motion.div>
            <ProcessScroll steps={steps} />
          </div>
        </section>

        <section id="clients" className="clients">
          <div className="about__pattern" />
          <div className="about__glow" />
          <div className="wrap clients__inner">
            <motion.div {...fade}>
              <ClientMarquee
                title="We've Helped Brands Get Noticed."
                description="From food and fitness to retail, real estate, hospitality and lifestyle, we've had the opportunity to work with brands across different industries."
                logos={clients.map((c) => ({ name: c.name, src: `/clients/${c.logo}.png` }))}
              />
              <div className="clients__cta">
                <a href="#contact" className="btn primary">Ready to see what we could do for your brand?</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="final">
          <div className="about__pattern" />
          <div className="about__glow" />
          <div className="wrap final__grid">
            <motion.div className="final__text" {...fade}>
              <h2>Ready to Make Your Brand <span className="accent">Stand Out?</span></h2>
              <p className="final__maybes">Maybe you need more customers. Maybe your brand needs a makeover. Maybe your website isn't doing enough. Maybe you've got a campaign idea and just need the right team to make it happen.</p>
              <p className="final__lead">Whatever you're working on, let's turn the idea into something people notice.</p>
              <strong className="final__strong">Your next customer is out there. Let's help them find you.</strong>
              <div className="final__btns">
                <a href="#contact" className="btn primary">Book a Discovery Call</a>
                <a href="#contact" className="btn ghost">Start Your Project</a>
              </div>
            </motion.div>
            <motion.div className="final__marquee" {...fade}>
              <CtaMarquee items={ctaWords} />
            </motion.div>
          </div>
        </section>

        <section id="faq">
          <div className="wrap">
            <motion.div className="center" {...fade}>
              <p className="eyebrow">FAQ</p>
              <h2>Frequently Asked Questions</h2>
            </motion.div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="bar"><i style={{ background: BLUE }} /><i style={{ background: GREEN }} /><i style={{ background: CORAL }} /><i style={{ background: '#d8d652' }} /></div>
      <FooterHover
        logo="/logo.png"
        brandName="Creative Hands Marketing Services"
        arabicName="اليد المبدعة للخدمات التسويقية"
        tagline="Strategy. Creativity. Execution. All in one place."
        location="Jeddah, Saudi Arabia"
        columns={footerColumns}
      />
    </>
  )
}
