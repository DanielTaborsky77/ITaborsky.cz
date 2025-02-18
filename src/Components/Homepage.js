import './Homepage.css';
import Instagram from '../Assets/instagram.png'
import Github from '../Assets/github.png'
import Linkedin from '../Assets/linkedin.png'
import MeIcon2 from '../Assets/meicon2.png';
import Work from '../Assets/work.png';
import CodeService from '../Assets/codeservice.png';
import Logo from '../Assets/logo.png';

import { useState } from 'react';

const Homepage = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="Homepage" id='Homepage'>
            
            <div className='Homepage-Logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='Homepage-Photo-Titles'>
            <div className="Me-Photo">

            </div>
                <p className='Homepage-Title-1'>Daniel Táborský</p>
                <p className='Homepage-Title-2'>WEBOVÉ STRÁNKY A APLIKACE</p>
                <p className='Homepage-Title-1-Responzive'>Daniel Táborský</p>
                <p className='Homepage-Title-2-Responzive'>WEBOVÉ STRÁNKY<br></br>A APLIKACE</p>
            </div>
            <div className='Homepage-Buttons'>
                
                <a href="#Portfolio"><button><img src={Work} alt="My Work"/> Portfolio</button></a>
                <a href="#Services"><button><img src={CodeService} alt="Services"/> Služby</button></a>
                <a href="#Aboutme"><button><img src={MeIcon2} alt="About me"/> O mně</button></a>
            </div>
            <div className='Homepage-Buttons-Responzive'>
                <a href="#Portfolio"><button><img src={Work} alt="My Work"/></button></a>
                <a href="#Services"><button><img src={CodeService} alt="Services"/></button></a>
                <a href="#Aboutme"><button><img src={MeIcon2} alt="About me"/></button></a>
            </div>
            <div className='Homepage-Socials'>
                <a href="https://www.instagram.com/itaborsky.cz/"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://github.com/DanielTaborsky77"><img src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/daniel-t%C3%A1borsk%C3%BD-ab31aa294/"><img src={Linkedin} alt="LinkedIn" /></a>
            </div>

        </div>
    )
}

export default Homepage;