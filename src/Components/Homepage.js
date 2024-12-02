import './Homepage.css';
import Me from '../Assets/me2.png';
import Instagram from '../Assets/instagram.png'
import Github from '../Assets/github.png'
import Linkedin from '../Assets/linkedin.png'
import SimpleParticles from './SimpleParticles';

import MeIcon2 from '../Assets/meicon2.png';
import Work from '../Assets/work.png';
import CodeService from '../Assets/codeservice.png';
import Logo from '../Assets/logo.png';

const Homepage = () => {
    return (
        <div className="Homepage" id='Homepage'>
            <SimpleParticles />
            <div className='Homepage-Logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='Homepage-Photo-Titles'>
                <img className="Me-Photo" src={Me} alt="" />
                <p className='Homepage-Title-1'>Dobrý den, jmenuji se Daniel Táborský</p>
                <p className='Homepage-Title-2'>FULL-STACK WEBOVÝ VÝVOJÁŘ</p>
                <p className='Homepage-Title-1-Responzive'>Dobrý den, jmenuji se<br></br><p className='Homepage-Title-1-Responzive-Name'>Daniel Táborský</p></p>
                <p className='Homepage-Title-2-Responzive'>FULL-STACK<br></br>WEBOVÝ VÝVOJÁŘ</p>
            </div>
            <div className='Homepage-Buttons'>
                <a href="#Aboutme"><button><img src={MeIcon2} alt="" /> O mně</button></a>
                <a href="#Portfolio"><button><img src={Work} alt="" /> Portfolio</button></a>
                <a href="#Services"><button><img src={CodeService} alt="" /> Služby</button></a>
            </div>
            <div className='Homepage-Buttons-Responzive'>
                <a href="#Aboutme"><button><img src={MeIcon2} alt="" /></button></a>
                <a href="#Portfolio"><button><img src={Work} alt="" /></button></a>
                <a href="#Services"><button><img src={CodeService} alt="" /></button></a>
            </div>
            <div className='Homepage-Socials'>
                <a href="https://www.instagram.com/taborskyd/"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://github.com/DanielTaborsky77"><img src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/daniel-t%C3%A1borsk%C3%BD-ab31aa294/"><img src={Linkedin} alt="Linkedin" /></a>
            </div>

        </div>
    )
}

export default Homepage;