import { useEffect, useRef } from 'react'

// Vertical word marquee. Words fade out towards the top and bottom edges.
export default function CtaMarquee({ items, speed = 26 }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const update = () => {
      const box = wrap.getBoundingClientRect()
      const cy = box.top + box.height / 2
      wrap.querySelectorAll('.ctam__item').forEach((el) => {
        const r = el.getBoundingClientRect()
        const d = Math.min(Math.abs(cy - (r.top + r.height / 2)) / (box.height / 2), 1)
        el.style.opacity = String(1 - d * 0.8)
      })
      if (!reduce) raf = requestAnimationFrame(update)
    }
    update()
    return () => cancelAnimationFrame(raf)
  }, [])

  const list = (hidden) => (
    <div className="ctam__list" aria-hidden={hidden ? 'true' : undefined}>
      {items.map((it) => (
        <div className="ctam__item" key={it.text} style={{ '--c': it.color }}>
          {it.text}
        </div>
      ))}
    </div>
  )

  return (
    <div className="ctam" ref={wrapRef} style={{ '--dur': `${speed}s` }}>
      <div className="ctam__track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  )
}
