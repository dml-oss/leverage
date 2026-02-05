import FeaturedProperty from '@/components/Home/FeaturedProperty'
//import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
// import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import InteriorDesign from '@/components/Home/Interior-design'
import HHeroSection from '@/components/hero-section-four'
import { MarqueeDemo } from '@/components/Home/Hero'

export default function Home() {
  return (
    <main>
      {/* <HeroSection/> */}
      <HHeroSection/>
      <MarqueeDemo/>
      {/* <Hero /> */}
      <Services />
      
      <Properties />
      <FeaturedProperty />
      <InteriorDesign/>
      <Testimonial />
      {/* <BlogSmall /> */}
      <GetInTouch />
      <FAQ />
    </main>
  )
}
