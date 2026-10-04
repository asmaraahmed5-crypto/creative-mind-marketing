import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function ServiceCard({ service, index }) {
  const { Icon } = service
  return (
    <motion.article
      className="svc-card"
      style={{ '--c': service.c }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="svc-card__img" style={{ backgroundImage: `url(/services/${service.id}.jpg)` }} aria-hidden="true" />
      <div className="svc-card__top">
        <span className="svc-card__num">( {String(index + 1).padStart(3, '0')} )</span>
        <div className="svc-card__icon"><Icon size={26} strokeWidth={2} /></div>
      </div>
      <div className="svc-card__body">
        <div className="svc-card__head">
          <h3>{service.title}</h3>
          <p className="svc-card__tag">{service.tag}</p>
        </div>
        <div className="svc-card__text">{service.body.map((b) => <p key={b}>{b}</p>)}</div>
        <p className="svc-card__get"><b>What you get:</b> {service.get}</p>
        <a href="#contact" className="svc-card__link">{service.cta} <ArrowRight size={16} /></a>
      </div>
    </motion.article>
  )
}

export default function ServiceCarousel({ services }) {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'start', loop: true })
  const [canPrev, setCanPrev] = useState(true)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!embla) return
    onSelect(embla)
    embla.on('select', onSelect).on('reInit', onSelect)
    return () => { embla.off('select', onSelect).off('reInit', onSelect) }
  }, [embla, onSelect])

  return (
    <div className="svc-carousel" role="region" aria-roledescription="carousel" aria-label="Our services">
      <div className="svc-ctrl">
        <button type="button" onClick={() => embla?.scrollPrev()} disabled={!canPrev} aria-label="Previous service"><ArrowLeft size={18} /></button>
        <button type="button" onClick={() => embla?.scrollNext()} disabled={!canNext} aria-label="Next service"><ArrowRight size={18} /></button>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {services.map((s, i) => (
            <div className="embla__slide" key={s.id} role="group" aria-roledescription="slide">
              <ServiceCard service={s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
