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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <PainPoints />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}