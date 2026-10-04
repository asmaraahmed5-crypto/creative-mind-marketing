// Brand-colour hover gradients, cycled across the logo cards.
const GRADIENTS = [
  ['#62d0ff', '#264d94', '#124a8f'],
  ['#8bd186', '#62b65d', '#3d8f4a'],
  ['#ff9d92', '#e05f52', '#b3402f'],
  ['#f1ef7a', '#d8d652', '#9fa22b'],
  ['#62d0ff', '#009edb', '#00688f'],
]

export default function ClientMarquee({ title, description, logos, duration = 70 }) {
  const loop = [...logos, ...logos]

  return (
    <section className="cm" aria-label={title}>
      <div className="cm__head">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="cm__viewport">
        <div className="cm__track" style={{ '--dur': `${duration}s` }}>
          {loop.map((logo, i) => {
            const [from, via, to] = GRADIENTS[i % GRADIENTS.length]
            return (
              <div
                className="cm__card"
                key={`${logo.name}-${i}`}
                aria-hidden={i >= logos.length ? 'true' : undefined}
                style={{ '--from': from, '--via': via, '--to': to }}
              >
                <span className="cm__glow" />
                <span className="cm__plate">
                  <img src={logo.src} alt={i < logos.length ? logo.name : ''} loading="lazy" draggable="false" />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
