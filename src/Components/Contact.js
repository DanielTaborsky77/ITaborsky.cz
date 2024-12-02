import './Contact.css';

import Phone from '../Assets/phone.png';
import Mail from '../Assets/mail.png';
import MyWeb from '../Assets/myweb.png';
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
                            <img src={Phone} alt="" />
                            <a href="tel:+420731124827">+420 731 124 827</a>
                        </div>
                        <div className='Contact-Card-Info'>
                            <img src={Mail} alt="" />
                            <a href="mailto:taborsky@itaborsky.cz">Taborsky@ITaborsky.cz</a>
                        </div>
                        <div className='Contact-Card-Info'>
                            <img src={MyWeb} alt="" />
                            <a href='https://www.ITaborsky.cz'>www.ITaborsky.cz</a>
                        </div>
                    </div>
                </div>
                <div className='Contact-Card-Right'>
                    <img src={Me2} alt="" />
                </div>


            </div>
        </div>
    )
}

export default Contact;