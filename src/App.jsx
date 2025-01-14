import './App.css'
import Navbar from './Pages/Navbar/Navbar';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Work from './Pages/work/work';
import Services from './Pages/Services/Services';
import TestimonialSection from './Pages/TestimonialSection/TestimonialSection';
import Footer from './Pages/Footer/Footer'
import PortfolioGallery from './Pages/Portfolio/PortfolioGallery';
import PricingSection from './Pages/Packages/PricingSection';
function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <PortfolioGallery/>        
        <Work/>
        <PricingSection/>       
        <Footer/>
      </div>      
    </>
  )
}

export default App
