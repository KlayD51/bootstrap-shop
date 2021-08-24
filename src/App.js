import 'bootstrap/dist/css/bootstrap.css'
import NavbarComp from './components/NavbarComp'
import LandingPage from './components/LandingPage'
import CardSection from './components/CardSection'
import ItalianSection from './components/italianSection'
import JamaicanSection from './components/JamaicanSection'
import ColumbianCourse from './components/ColumbianCourse'
import IndianSection from './components/IndianSection'
import Promo from './components/Promo'
import Footer from './components/Footer'
import Contact from './components/Contact'
import italianSection from './components/italianSection'


function App() {
  return (
    <div className='app'>

      
      <NavbarComp />
    

      <LandingPage />
      <CardSection />
      <ItalianSection />
      <JamaicanSection />
      <ColumbianCourse />
      <IndianSection />
      <br></br>
      <Promo />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
