import { useState } from 'react'

export default function ActivationAccordion({ items }) {
  const [active, setActive] = useState(0)

  return (
    <div className="acc" role="list">
      {items.map((item, i) => {
        const isActive = i === active
        return (
          <div
            key={item.title}
            role="listitem"
            tabIndex={0}
            className={`acc__item${isActive ? ' is-active' : ''}`}
            style={{ '--c': item.color }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={item.title}
          >
            <img src={item.image} alt="" loading="lazy" />
            <div className="acc__shade" />
            <span className="acc__label">{item.title}</span>
            <div className="acc__body">
              <span className="acc__num">( {String(i + 1).padStart(2, '0')} )</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
