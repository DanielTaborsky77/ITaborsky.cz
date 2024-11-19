import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

import Rideaway from "../Assets/rideaway.png";
import Carentab from "../Assets/carentab.png";
import Cross from "../Assets/cross.png";

const Portfolio = () => {
    return(
        <div className="Portfolio" id="Portfolio">
            <p className="Portfolio-Title">Portfolio</p>
            <p className="Portfolio-Subtitle">Pokud Vás má práce zaujala, kontaktujte mě a domluvíme se na další spolupráci.</p>
            <div className="Portfolio-Cards">
                <PortfolioCard 
                    Img={Rideaway} 
                    Title={'Rideaway-moto.cz'} 
                    Description={'Půjčovna motocyklů Klášterec nad Ohří'}
                    Web={'https://rideaway-moto.cz/'}
                    Github={'https://github.com/DanielTaborsky77/Rideaway-moto.cz'}
                    Details={[
                        'Web je vytvořen pro půjčovnu motocyklů v Klášterci nad ohří. ', 
                        'Jeho účelem je zákazníky informovat o společnosti, půjčovaných motocyklech (výbava, cena, vzhled - fotogalerie), a hlavně dát zákazníkovi možnost si motorku zarezervovat.',
                        'Jedná se o jednostránkový web, na kterém jsou použity prvky z HTML5, CSS3, JS, a PHP. Klíčový je již zmíněný PHP formulář pro rezervaci motocyklů.',
                        'Web je plně responzivní na všechny typy zařízení. '
                    ]}
                />

                <PortfolioCard 
                    Img={Carentab} 
                    Title={'Carentab.com'} 
                    Description={'Půjčovna automobilů Karlovarského kraje'}
                    Web={'https://carentab.com/'}
                    Github={'https://github.com/DanielTaborsky77/Carentab.com'}
                    Details={[
                        'Web je vytvořen pro půjčovnu automobilů v Karlovarském Kraji. ', 
                        'Jeho účelem je zákazníky informovat o společnosti, půjčovaných vozidlech (výbava, cena, vzhled - fotogalerie), a hlavně dát zákazníkovi možnost si vozidlo zarezervovat.',
                        'Jedná se o jednostránkový web, na kterém jsou použity prvky z React.js, CSS, JS a PHP. Klíčový je již zmíněný PHP formulář pro rezervaci vozidel.',
                        'Web je plně responzivní na všechny typy zařízení. '
                    ]}
                />
                
                <PortfolioCard 
                    Img={Cross} 
                    Title={'Bjbas.cz'} 
                    Description={'Bratrská jednota Baptistů v Aši'}
                    Web={''}
                    Github={''}
                    Details={[
                        'Web je stále ve vývoji...', 
                    ]}
                />
            </div>
        </div>
    )
}

export default Portfolio;