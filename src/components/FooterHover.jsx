import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'

// Large outlined wordmark; a brand-colour gradient is revealed under the cursor.
function TextHoverEffect({ text, duration = 0.15 }) {
  const uid = useId().replace(/:/g, '')
  const svgRef = useRef(null)
  const [cursor, setCursor] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [mask, setMask] = useState({ cx: '50%', cy: '50%' })

  useEffect(() => {
    if (!svgRef.current || !cursor) return
    const r = svgRef.current.getBoundingClientRect()
    setMask({
      cx: `${((cursor.x - r.left) / r.width) * 100}%`,
      cy: `${((cursor.y - r.top) / r.height) * 100}%`,
    })
  }, [cursor])

  const common = {
    x: '50%', y: '54%', textAnchor: 'middle', dominantBaseline: 'middle',
    strokeWidth: 0.5, fill: 'transparent',
    style: { fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif", fontWeight: 400, fontSize: 104, letterSpacing: '0.01em' },
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 600 120"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="fh__svg"
      role="img"
      aria-label={text}
    >
      <defs>
        <linearGradient id={`g${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="600" y2="0">
          <stop offset="0%" stopColor="#35b8f0" />
          <stop offset="35%" stopColor="#62b65d" />
          <stop offset="68%" stopColor="#ff8b7e" />
          <stop offset="100%" stopColor="#e9e76a" />
        </linearGradient>
        <motion.radialGradient
          id={`r${uid}`}
          gradientUnits="userSpaceOnUse"
          r="22%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={mask}
          transition={{ duration, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={`m${uid}`}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#r${uid})`} />
        </mask>
      </defs>

      {/* faint static outline, brighter while hovered */}
      <text {...common} stroke="#ffffff" style={{ ...common.style, opacity: hovered ? 0.35 : 0.12, transition: 'opacity .3s' }}>{text}</text>

      {/* one-time draw-in */}
      <motion.text
        {...common}
        stroke="#35b8f0"
        initial={{ strokeDashoffset: 1400, strokeDasharray: 1400 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1400 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        style={{ ...common.style, opacity: 0.55 }}
      >
        {text}
      </motion.text>

      {/* cursor-revealed gradient */}
      <text {...common} stroke={`url(#g${uid})`} strokeWidth={0.9} mask={`url(#m${uid})`} style={{ ...common.style, opacity: hovered ? 1 : 0, transition: 'opacity .3s' }}>{text}</text>
    </svg>
  )
}

export default function FooterHover({ logo, brandName, arabicName, tagline, columns, location }) {
  return (
    <footer className="fh">
      <div className="fh__bg" aria-hidden="true" />
      <div className="wrap fh__inner">
        <div className="fh__grid">
          <div className="fh__brand">
            <a href="#top" className="fh__logo">
              <img src={logo} alt="" />
              <span>
                <b>CREATIVE HANDS</b>
                <small>MARKETING SERVICES</small>
              </span>
            </a>
            <p>{tagline}</p>
            <p className="fh__ar" lang="ar" dir="rtl">{arabicName}</p>
          </div>

          {columns.map((col) => (
            <div className="fh__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="fh__col">
            <h4>Contact Us</h4>
            <ul>
              <li className="fh__loc"><MapPin size={18} /> <span>{location}</span></li>
              <li>
                <a href="#contact" className="btn fh__cta">Get a Quote Today!</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fh__bottom">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          <p>Strategy. Creativity. Execution.</p>
        </div>
      </div>

      <div className="fh__word" aria-hidden="true">
        <TextHoverEffect text="CREATIVE HANDS" />
      </div>
    </footer>
  )
}
