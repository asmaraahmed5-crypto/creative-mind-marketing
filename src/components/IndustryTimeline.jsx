import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function IndustryTimeline({ items }) {
  const [active, setActive] = useState(0)
  const item = items[active]

  return (
    <div className="itl">
      <div className="itl__rail" role="tablist" aria-label="Industries">
        {items.map((it, i) => (
          <button
            key={it.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`itl__pill${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            <span className="itl__pill-num">{String(i + 1).padStart(2, '0')}</span>
            {it.title}
          </button>
        ))}
      </div>

      <div className="itl__stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            className="itl__panel"
            style={{ '--c': item.color }}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            role="tabpanel"
          >
            <div className="itl__text">
              <span className="itl__badge">Industry</span>
              <div className="itl__big">{String(active + 1).padStart(2, '0')}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#contact" className="itl__link">
                Plan your campaign <ArrowRight size={16} />
              </a>
            </div>
            <div className="itl__media">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
