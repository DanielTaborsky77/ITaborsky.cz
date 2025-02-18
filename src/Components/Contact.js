import './Contact.css';

import Phone from '../Assets/phone.png';
import Mail from '../Assets/mail.png';
import BlackWeb from '../Assets/blackweb.png';
import Me2 from '../Assets/me2.png';

const Contact = () => {
    return(
        <div id='Contact' className='Contact'>
            <p className='Contact-Title'>Kontakt</p>
            <div className='Contact-Card'>
                <div className='Contact-Card-Left'>
                    <div className='Contact-Card-Left-Top'>
                        <p className='Contact-Card-Title'>Daniel Táborský</p>
                        <p className='Contact-Card-Subtitle'>FULL-STACK Webový vývojář</p>
                    </div>
                    <div className='Contact-Card-Bottom'>
                        <div className='Contact-Card-Info'>
                            <img src={Phone} alt="Tel." loading="lazy"/>
                            <a href="tel:+420731124827">+420 731 124 827</a>
                        </div>
                        <div className='Contact-Card-Info'>
                            <img src={Mail} alt="E-mail" loading="lazy"/>
                            <a href="mailto:taborsky@itaborsky.cz">taborsky@itaborsky.cz</a>
                        </div>
                        <div className='Contact-Card-Info'>
                            <img src={BlackWeb} alt="My-Web" loading="lazy"/>
                            <a href='https://ITaborsky.cz'>https://ITaborsky.cz</a>
                        </div>
                    </div>
                </div>
                <div className='Contact-Card-Right'>
                    <img src={"https://cdn.itaborsky.cz/me2.webp"} alt="Daniel_Taborsky" loading="lazy"/>
                </div>


            </div>
        </div>
    )
}

export default Contact;