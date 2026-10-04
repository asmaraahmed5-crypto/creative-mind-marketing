import { forwardRef } from 'react'
import { motion } from 'motion/react'

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}
const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}
const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.6,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { type: 'spring', stiffness: 300, damping: 25 },
    },
  },
}
const flip = { type: 'spring', stiffness: 100, damping: 20 }

/**
 * items: [{ label, href, gradient, color }]
 */
const GlowMenu = forwardRef(function GlowMenu({ items, activeItem, onItemClick, onItemHover, className = '' }, ref) {
  return (
    <motion.nav ref={ref} className={`glow-menu ${className}`} initial="initial" whileHover="hover" aria-label="Main" onMouseLeave={() => onItemHover?.(null)}>
      <ul className="glow-menu__list">
        {items.map((item) => {
          const isActive = item.label === activeItem
          return (
            <li key={item.label}>
              <a href={item.href} className="glow-menu__link" onMouseEnter={(e) => onItemHover?.(item, e.currentTarget.getBoundingClientRect())} onClick={() => onItemClick?.(item.label)} aria-current={isActive ? 'true' : undefined}>
                <motion.span className="glow-menu__cell" style={{ '--c': item.color, perspective: 600 }} whileHover="hover" initial="initial">
                  <motion.span
                    className="glow-menu__glow"
                    variants={glowVariants}
                    animate={isActive ? 'hover' : 'initial'}
                    style={{ background: item.gradient }}
                  />
                  <motion.span
                    className={`glow-menu__label ${isActive ? 'is-active' : ''}`}
                    variants={itemVariants}
                    transition={flip}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'center bottom' }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.span
                    className={`glow-menu__label glow-menu__label--back ${isActive ? 'is-active' : ''}`}
                    variants={backVariants}
                    transition={flip}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'center top', rotateX: 90 }}
                    aria-hidden="true"
                  >
                    {item.label}
                  </motion.span>
                </motion.span>
              </a>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
})

export default GlowMenu
