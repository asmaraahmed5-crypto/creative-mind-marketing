export default function WhyList({ items }) {
  return (
    <div className="wl">
      {items.map((item, i) => {
        return (
          <div className="wl__row" key={item.title} style={{ '--c': item.color }} tabIndex={0}>
            <span className="wl__num">{String(i + 1).padStart(2, '0')}</span>

            <div className="wl__roll">
              <div className="wl__roll-inner">
                <h3 className="wl__title">{item.title}</h3>
                <h3 className="wl__title wl__title--alt" aria-hidden="true">{item.title}</h3>
              </div>
            </div>

            <p className="wl__desc">{item.desc}</p>

            <div className="wl__reveal" aria-hidden="true">
              <img src={item.image} alt="" loading="lazy" />
              <span className="wl__tint" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
