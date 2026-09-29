import { motion } from 'motion/react'

const BLUE = '#264d94', GREEN = '#62b65d', CORAL = '#e05f52', YELLOW = '#b9b72a'

const services = [
  { id: 'digital', c: BLUE, ic: '📈', title: 'Digital Marketing, SEO & Content', tag: 'Get Found by the People Looking for You.',
    body: ["Being online isn't enough. Your customers need to find you, notice you and have a reason to click.", "We create digital marketing campaigns designed around your business goals — whether that's more leads, sales, enquiries, bookings or brand awareness."],
    list: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'SEO', 'Social media management', 'Content creation', 'Campaign strategy'],
    get: 'More visibility, stronger online presence and marketing focused on business results — not just likes and impressions.', cta: 'Grow Your Online Presence' },
  { id: 'branding', c: CORAL, ic: '🎨', title: 'Branding, Design & Media Production', tag: 'Look Good. Feel Professional. Be Remembered.',
    body: ['Your brand is often the first thing people see — and first impressions matter.', 'We create memorable visual identities, packaging, social content, UI/UX designs and videos that help your business look professional and stand out from the crowd.'],
    list: [],
    get: 'A consistent brand people can recognize across your website, social media, packaging, advertising and physical spaces.', cta: 'Make My Brand Stand Out' },
  { id: 'web', c: GREEN, ic: '💻', title: 'Website, Software & E-Commerce', tag: 'Turn Browsers Into Buyers.',
    body: ["Your website shouldn't just sit there looking pretty.", 'It should help people understand what you offer, trust your business and take the next step.'],
    list: ['Business websites', 'E-commerce stores', 'Shopify stores', 'WooCommerce stores', 'Mobile applications', 'Custom web applications', 'React websites', 'Flutter applications'],
    get: 'Fast, user-friendly digital experiences designed to make it easier for customers to discover, explore and buy from you.', cta: 'Build Something Great' },
  { id: 'games', c: YELLOW, ic: '🎮', title: 'Game Design & Development', tag: "Have an Idea for a Game? Let's Bring It to Life.",
    body: ['From an exciting concept to a game people can actually download and play, we handle the journey from start to finish.'],
    list: ['2D & 3D games', 'AR/VR experiences', 'Multiplayer games', 'Cross-platform games', 'Game monetization', 'Analytics'],
    get: 'A complete game development experience with creativity, technology and business goals working together.', cta: "Let's Create a Game" },
  { id: 'ai', c: BLUE, ic: '🤖', title: 'AI Automation & AI Agents', tag: 'Let Technology Do the Repetitive Work.',
    body: ['Still spending hours copying information, sending repetitive messages or jumping between different tools?', "Let's automate it. We create AI agents and smart automations that connect the tools your business already uses.", 'Using technologies such as n8n, Make, Zapier, OpenAI and Claude, we can help automate repetitive workflows and reduce unnecessary manual work.'],
    list: [],
    get: 'Less repetitive work, smoother processes and more time for your team to focus on customers and growth.', cta: 'Automate My Business' },
]

const activations = [
  ['🛍', 'Shopper Enhancements', 'Make the shopping experience more engaging and memorable.'],
  ['🏪', 'Speciality & Free-Standing Displays', "Put your product where people can't miss it."],
  ['🛒', 'Shelf Branding', 'Turn ordinary shelves into attention-grabbing brand spaces.'],
  ['🎯', 'Mall & Brand Activations', 'Take your campaign into the real world and create experiences people want to talk about.'],
  ['🥤', 'Tasting & Sampling', 'Let customers experience your product before they buy it.'],
  ['📍', 'Outdoor Advertising & Signage', 'Put your brand where your audience actually is.'],
]

const industries = [
  ['🍔', 'Food & Beverage', 'Make people stop scrolling, start craving and walk through your doors.'],
  ['🛍', 'Retail & E-Commerce', 'Turn product discovery into clicks, carts and purchases.'],
  ['📱', 'Consumer Electronics', 'Make product benefits easy to understand and exciting to explore.'],
  ['👗', 'Fashion & Lifestyle', 'Create a recognizable visual identity and a social presence people want to follow.'],
  ['🏨', 'Hospitality', 'Turn your location, atmosphere and experience into content that makes people want to visit.'],
  ['🏢', 'Business & Professional Services', 'Explain what you do in a simple, compelling way — and give potential customers a reason to choose you.'],
]

const why = [
  ['🎯', 'Clear Direction', "Know what we're doing and, more importantly, why we're doing it."],
  ['💡', 'Ideas Built Around Your Business', "No cookie-cutter campaigns copied from someone else's playbook."],
  ['📣', 'Consistent Brand Communication', 'Your website, social media, advertising and physical presence all feel like the same brand.'],
  ['📊', 'Marketing With Purpose', 'We focus on the actions that matter to your business — leads, enquiries, sales, bookings and growth.'],
  ['🤝', 'Clear Communication', "You'll know what's happening, what's next and when you can expect it."],
  ['✅', 'Quality Before Delivery', 'Everything gets reviewed before it reaches your customers.'],
  ['🚀', 'From Idea to Execution', 'Strategy is great. Ideas are great. But we also make sure things actually get done.'],
]

const steps = [
  ['Tell Us What You Need', "We'll learn about your business, audience, goals and what's currently driving you crazy."],
  ['We Build the Plan', "You'll receive a clear scope, timeline and pricing — so you know exactly what you're getting."],
  ["Let's Get Creative", 'Our team develops the strategy, concepts, designs and content needed to bring your idea to life.'],
  ['You Stay in the Loop', 'We share progress, collect your feedback and keep everything moving without the endless back-and-forth.'],
  ['Launch Time!', 'Your campaign, website, content or activation goes live.'],
  ['Keep Growing', "We look at what's working, what isn't and where we can improve the next move."],
]
const stepColors = [BLUE, GREEN, CORAL, YELLOW, BLUE, GREEN]

const clients = ['Switzella', 'Coco Dazzle', 'Noor Jewellers', '9Round Kickboxing Fitness', 'Legacy Fitness', 'Sizzler', 'Artistic Haul', 'Xperience Realty', 'Factory Cafe', "Burger O'Clock", 'Decent Interiors', 'Marsons Group']

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

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a href="#top" className="brand">
            <img src="/logo.png" alt="" />
            <span><b>CREATIVE HANDS</b><small>MARKETING SERVICES</small></span>
          </a>
          <nav><ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#activation">Activation</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul></nav>
          <a href="#contact" className="btn primary">Start Your Project</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <motion.div {...fade}>
              <p className="eyebrow">Digital Marketing &amp; Brand Activation Agency in Jeddah, Saudi Arabia</p>
              <h1>Your Brand Deserves More Than Just Attention. <span className="accent">It Deserves to Be Remembered.</span></h1>
              <p className="lead"><b>Got a great product but struggling to get people to notice it?</b> Launching a new business? Looking for more customers? Ready to give your brand a fresh look?</p>
              <p className="lead">Creative Hands Marketing Services helps businesses across Saudi Arabia turn ideas into brands people notice, trust and remember. From digital marketing and SEO to branding, content, technology and in-store brand activation, we bring everything together to help you attract the right audience and turn attention into action.</p>
              <div className="cta">
                <a href="#contact" className="btn primary">Let’s Build Your Brand</a>
                <a href="#clients" className="btn ghost">Explore Our Work</a>
              </div>
              <p className="arabic" lang="ar" dir="rtl">اليد المبدعة للخدمات التسويقية</p>
            </motion.div>
            <motion.div className="hero-art" initial={{ opacity: 0, scale: .9, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, ease: 'easeOut' }}>
              <motion.img src="/logo.png" alt="Creative Hands puzzle logo" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ borderRadius: 40 }} />
            </motion.div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <motion.div {...fade}>
              <p className="eyebrow">About Us</p>
              <h2>We Don't Just Market Your Business. <span className="accent">We Help People Choose It.</span></h2>
              <p className="lead">Let's face it — your customers have endless options. So why should they choose you? That's where we come in.</p>
              <p className="lead" style={{ marginTop: 14 }}>Creative Hands is a full-service marketing agency based in Jeddah, Saudi Arabia. We help businesses build stronger brands, reach the right people and create experiences that turn curious visitors into customers.</p>
            </motion.div>
            <div className="pillars">
              {[['🧠', 'Strategy', 'Know who you\'re talking to, what to say and where to say it.'], ['🎨', 'Creativity', 'Look different, sound different and give people a reason to remember you.'], ['🚀', 'Execution', 'Turn ideas into campaigns, content, websites and real-world experiences that actually get launched.']].map(([ic, t, d], i) => (
                <motion.div className="pillar" key={t} {...stagger(i)}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></motion.div>
              ))}
            </div>
            <p className="result">The result? A brand that's easier to discover, easier to understand and much harder to forget.</p>
          </div>
        </section>

        <section id="services" className="services">
          <div className="wrap">
            <motion.div className="center" {...fade}>
              <p className="eyebrow">Services</p>
              <h2>Everything You Need to Get Noticed, Get Chosen &amp; Grow.</h2>
              <p className="lead">You shouldn't have to work with five different companies to build one great brand. Creative Hands brings marketing, creativity and technology together under one roof.</p>
            </motion.div>
            <div className="svc-grid">
              {services.map((s, i) => (
                <motion.article key={s.id} className="card" style={{ '--c': s.c }} {...stagger(i)}>
                  <div className="ic">{s.ic}</div>
                  <h3>{s.title}</h3>
                  <div className="tag">{s.tag}</div>
                  {s.body.map((b) => <p key={b}>{b}</p>)}
                  {s.list.length > 0 && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
                  <p className="get"><b>What you get:</b> {s.get}</p>
                  <a href="#contact" className="link">{s.cta} →</a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="activation" className="activation">
          <div className="wrap">
            <motion.div {...fade}>
              <p className="eyebrow">Brand &amp; Shopper Activation</p>
              <h2>Your Customers Aren't Only Online.</h2>
              <div className="journey"><span>Discover on Instagram</span><span>→ See it on a shelf</span><span>→ Experience it in store</span><span>→ Decide to buy</span></div>
              <p className="lead">Every one of those moments matters. Our brand activation services help your business create memorable physical experiences where customers are already making buying decisions.</p>
            </motion.div>
            <div className="act-grid">
              {activations.map(([ic, t, d], i) => (
                <motion.div className="act" key={t} {...stagger(i)}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></motion.div>
              ))}
            </div>
            <p className="goal"><b>The goal?</b> More attention at the moment it matters — when customers are deciding what to buy.</p>
            <a href="#contact" className="btn light">Plan My Brand Activation →</a>
          </div>
        </section>

        <section id="industries">
          <div className="wrap">
            <motion.div className="center" {...fade}>
              <p className="eyebrow">Industries</p>
              <h2>Your Customers Are Different. Your Marketing Should Be Too.</h2>
              <p className="lead">A restaurant doesn't sell like a real estate company. A fashion brand doesn't communicate like a tech company. That's why we build campaigns around your audience, your product and the moment they make a buying decision.</p>
            </motion.div>
            <div className="ind-grid">
              {industries.map(([ic, t, d], i) => (
                <motion.div className="ind" key={t} {...stagger(i)}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="why">
          <div className="wrap">
            <motion.div {...fade}>
              <p className="eyebrow">Why Creative Hands</p>
              <h2>Because You Don't Need "More Marketing." You Need Marketing That Makes Sense.</h2>
              <p className="lead">You don't need endless meetings. You don't need complicated marketing jargon. And you definitely don't need to wonder what your agency is doing with your budget. You need a team that understands your business, your audience and your goals.</p>
            </motion.div>
            <div className="why-grid">
              {why.map(([ic, t, d], i) => (
                <motion.div className="why-item" key={t} {...stagger(i)}><div className="ic">{ic}</div><h3>{t}</h3><p>{d}</p></motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <motion.div className="center" {...fade}>
              <p className="eyebrow">Our Process</p>
              <h2>From "I Have an Idea" to "Look What We Built!"</h2>
              <p className="lead">Getting started shouldn't feel complicated.</p>
            </motion.div>
            <div className="steps">
              {steps.map(([t, d], i) => (
                <motion.div className="step" key={t} style={{ '--c': stepColors[i] }} {...stagger(i)}>
                  <div className="n">0{i + 1}</div><h3>{t}</h3><p>{d}</p>
                </motion.div>
              ))}
            </div>
            <p className="tagline center">Simple. Clear. No disappearing acts.</p>
          </div>
        </section>

        <section id="clients" className="clients">
          <div className="wrap center">
            <motion.div {...fade}>
              <p className="eyebrow">Clients</p>
              <h2>We've Helped Brands Get Noticed.</h2>
              <p className="lead">From food and fitness to retail, real estate, hospitality and lifestyle, we've had the opportunity to work with brands across different industries.</p>
            </motion.div>
            <div className="logos">{clients.map((c) => <span key={c}>{c}</span>)}<span>…and more</span></div>
            <p className="lead" style={{ marginBottom: 24 }}>Ready to see what we could do for your brand?</p>
            <a href="#contact" className="btn primary">View Our Work →</a>
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
            <div className="center"><a href="#contact" className="btn primary">Start Your Project →</a></div>
          </div>
        </section>

        <section id="contact" className="final">
          <div className="wrap">
            <motion.div {...fade}>
              <h2>Ready to Make Your Brand Stand Out?</h2>
              <p className="maybes">Maybe you need more customers. Maybe your brand needs a makeover.<br />Maybe your website isn't doing enough. Maybe you've got a campaign idea and just need the right team to make it happen.</p>
              <p className="lead">Whatever you're working on, let's turn the idea into something people notice.</p>
              <strong>Your next customer is out there. Let's help them find you.</strong>
              <div className="cta">
                <a href="#contact" className="btn light">Book a Discovery Call</a>
                <a href="#contact" className="btn outline-light">Start Your Project</a>
              </div>
              <div className="contact">
                <span>📍 Jeddah, Saudi Arabia</span><span>📞 [Phone]</span><span>✉️ [Email]</span><span>🌐 [Website]</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <div className="bar"><i style={{ background: BLUE }} /><i style={{ background: GREEN }} /><i style={{ background: CORAL }} /><i style={{ background: '#d8d652' }} /></div>
      <footer>
        <b>Creative Hands Marketing Services</b>
        Strategy. Creativity. Execution. All in one place.
      </footer>
    </>
  )
}
