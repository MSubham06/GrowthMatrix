import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import TrustedBy    from './components/TrustedBy'
import PainPoints   from './components/PainPoints'
import Services     from './components/Services'
import Process      from './components/Process'
import Testimonials from './components/Testimonials'
import About        from './components/About'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import Privacy      from './components/Privacy'
import Terms        from './components/Terms'
import Cookies      from './components/Cookies'

/* ── Scroll to top on every route change ── */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/* ── Main landing page ── */
function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <PainPoints />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms"   element={<Terms />}   />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}