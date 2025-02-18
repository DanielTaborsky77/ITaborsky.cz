import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

import Rideaway from "../Assets/rideaway.png";
import Carentab from "../Assets/carentab.png";
import Icon from "../Assets/icon.png";

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
                        'Web je vytvořen pro půjčovnu automobilů CARENTAB v Karlovarském Kraji. ', 
                        'Jeho účelem je zákazníky informovat o společnosti, půjčovaných vozidlech (výbava, cena, vzhled - fotogalerie), a hlavně dát zákazníkovi možnost si vozidlo zarezervovat.',
                        'Jedná se o jednostránkový web, na kterém jsou použity prvky z React.js, CSS, JS a PHP. Klíčový je již zmíněný formulář pro rezervaci vozidel, který zpracovává a odesílá PHP API.',
                        'Web je plně responzivní na mobilní, desktopové a další zařízení. '
                    ]}
                />
                
                <PortfolioCard 
                    Img={Icon} 
                    Title={'ITaborsky.cz'} 
                    Description={'Osobní web s portfoliem a nabídkou služeb'}
                    Web={'https://itaborsky.cz/'}
                    Github={'https://github.com/DanielTaborsky77/ITaborsky.cz'}
                    Details={[
                        'Web je určen pro mou osobní prezentaci a ukázku mého portfolia.', 
                        'Stránka navíc obsahuje jednotlivé služby (a jak jednotlivě probíhají), které mohu potencionálním zákazníkům nabídnout. Nechybí možnost si o službu nezávazně zažádat pomocí formuláře, který odesílá e-maily pomocí JS API nahrané ve Firebase functions.',
                        'Aplikace je postavena na JS Frameworku Node.js a React.js. Prvky HTML a stylování CSS jsou samozřejmostí.', 
                        'Stránka je mimo jiné také responzivní na všechny typy zařízení.'
                    ]}
                />
            </div>
        </div>
    )
}

export default Portfolio;