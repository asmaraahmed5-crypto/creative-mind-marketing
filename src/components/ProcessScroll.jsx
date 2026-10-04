import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

export default function ProcessScroll({ steps }) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  const n = steps.length

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(clamp(v)))

  const activeIndex = Math.min(n - 1, Math.floor(progress * n))

  return (
    <div className="ps" ref={ref} style={{ height: `${n * 70 + 30}vh` }}>
      <div className="ps__sticky">
        <div className="ps__grid">
          <div className="ps__list">
            {steps.map((s, i) => {
              const start = i / n
              const end = (i + 1) / n
              const fill = clamp((progress - start) / (end - start)) * 100
              const isActive = progress > start || (i === 0)
              return (
                <div key={s.title} className={`ps__item${isActive ? ' is-on' : ''}`} style={{ '--c': s.color }}>
                  <div className="ps__bar"><span style={{ height: `${fill}%` }} /></div>
                  <div className="ps__copy">
                    <span className="ps__num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="ps__visual" aria-hidden="true">
            {steps.map((s, i) => {
              const { Icon } = s
              return (
                <div key={s.title} className={`ps__card${i === activeIndex ? ' is-on' : ''}`} style={{ '--c': s.color }}>
                  <span className="ps__ghost">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ps__icon"><Icon size={56} strokeWidth={1.6} /></div>
                  <div className="ps__cap">
                    <span>Step {i + 1} of {n}</span>
                    <strong>{s.title}</strong>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
