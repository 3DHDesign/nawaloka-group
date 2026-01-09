 
import HeroSlider from '../components/home/HeroSlider'
import AboutSection from '../components/home/AboutSection'
import ServicesCarousel from '../components/home/ServicesCarousel'
import SubsidiariesSection from '../components/home/SubsidiariesSection'
import VisionVideoSection from '../components/home/VisionVideoSection'
import LatestBlogSection from '../components/home/LatestBlogSection'

const Home = () => {
  return (
    <div>
         <div className="bg-[var(--bg)] text-[var(--text)]">
    
      <main id="home">
        <HeroSlider />
        <AboutSection/>
        <ServicesCarousel/>
        <SubsidiariesSection/>
        <VisionVideoSection/>
        <LatestBlogSection/>
        {/* next sections */}
      </main>
    </div>
    </div>
  )
}

export default Home