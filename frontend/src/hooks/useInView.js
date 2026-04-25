import { useEffect, useRef } from 'react'

/**
 * useInView(threshold?)
 * Adds "visible" class when element scrolls into viewport.
 * Works with: .reveal  .reveal-left  .reveal-right  .reveal-scale
 */
export default function useInView(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!window.IntersectionObserver) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
