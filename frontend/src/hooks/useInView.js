import { useEffect, useRef } from 'react'

/**
 * useInView
 * Adds "visible" class when the element scrolls into view.
 * Pair with className="reveal" in your JSX.
 *
 * Usage:
 *   const ref = useInView()
 *   <div ref={ref} className="reveal"> ... </div>
 */
export default function useInView(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

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