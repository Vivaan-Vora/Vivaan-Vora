import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function SiteEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.18,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
    })

    let frameId = 0
    const raf = (time) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(raf)
    }

    frameId = window.requestAnimationFrame(raf)

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target, { offset: -80 })
      window.history.pushState(null, '', href)
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.cancelAnimationFrame(frameId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll('.reveal'))

    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-index', String(index % 5))
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  return null
}

export default SiteEffects
