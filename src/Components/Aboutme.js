import './Aboutme.css'
import Me2 from '../Assets/me.png';
import BlueWork from '../Assets/bluework.png';
import BCodeService from '../Assets/bcodeservice.png'

const Aboutme = () => {
    return (
        <div className='Aboutme' id='Aboutme'>
            <p className='Aboutme-Title'>O mně</p>
            <div className='Aboutme-content'>
                
                <div className='Aboutme-Left'>
                    <p className='Aboutme-Paragraph'>
                        Jmenuji se Daniel Táborský, je mi 21 let a jsem FULL-STACK webový vývojář.
                        Vystudoval jsem Střední průmyslovou školu v Ostrově a teď se
                        věnuji designu, programování a správě webových stránek/aplikací.
                    </p>
                    <p className='Aboutme-Paragraph'>
                        Mám za sebou řadu projektů, které si můžete prohlédnout v mém portfoliu a pokud Vás zaujme má práce, 
                        mohu také Vám pomoci s realizací Vašeho projektu. Stačí si zažádat o některou z mých služeb nebo mě zkontaktovat...
                    </p>
                    <div className='Aboutme-Buttons'>
                        <a href="#Portfolio"><button className='Aboutme-Portfolio-Button'><img src={BlueWork} alt="My work" /> Portfolio</button></a>
                        <a href="#Services"><button className='Aboutme-Services-Button'><img src={BCodeService} alt="Services" /> Služby</button></a>
                    </div>
                </div>
                <div className='Aboutme-Right'>
                    <img className='Aboutme-Photo' src={"https://cdn.itaborsky.cz/me.webp"} alt="Daniel Táborský" loading="lazy"/>
                </div>
            </div>
        </div>
    )
} 

export default Aboutme;