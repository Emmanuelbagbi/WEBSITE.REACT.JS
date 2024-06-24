import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import HeroSection from './Components/HeroSection.jsx'
import { TbMarquee } from 'react-icons/tb';
import Advert from './Components/Advert.jsx'
import FeatCard from './Components/FeatCard.jsx';
import Footer from './Components/Footer.jsx';
import MainFooter from './Components/MainFooter.jsx';
import { BsTwitter } from 'react-icons/bs';
import EndGame from './Components/EndGame.jsx';





function App() {
    
    return(
      <>
        <Header/>
        <Slider/>
        <HeroSection/>
        <TbMarquee/>
        <Advert/>
        <FeatCard/>
        <Footer/>
        <MainFooter/>
        <EndGame/>
      </>
    );
}
export default App
