import { useEffect } from "react";

import Navigation from "./Components/Navigation/Navigation";
import Cookies from "./Components/Cookies";
import Homepage from "./Components/Homepage";
import SimpleParticles from './Components/SimpleParticles';
import Aboutme from "./Components/Aboutme";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import sendIndexNowRequest from "./Components/indexNow";
const App = () => {
  useEffect(() => {
    sendIndexNowRequest(); // Zavolá funkci při každém načtení stránky
  }, []);
  return (
    <div>
      <Cookies />
      <SimpleParticles />
      <Navigation />
      <Homepage />
      <Portfolio />
      <Services />
      <Aboutme />
      <Contact />
    </div>
  )
}

export default App;