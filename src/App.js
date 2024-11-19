import Navigation from "./Components/Navigation/Navigation";
import Homepage from "./Components/Homepage";
import SimpleParticles from './Components/SimpleParticles';
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <SimpleParticles />
      <Navigation />
      <Homepage />
      <Aboutme />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default App;
