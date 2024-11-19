import './Aboutme.css'
import Me2 from '../Assets/me.png';
import Work from '../Assets/work.png';
import CodeService from '../Assets/codeservice.png';
const Aboutme = () => {
    return (
        <div className='Aboutme' id='Aboutme'>
            <p className='Aboutme-Title'>O mně</p>
            <div className='Aboutme-content'>
                
                <div className='Aboutme-Left'>
                    <p className='Aboutme-Paragraph'>
                        Jmenuji se Daniel Táborský a je mi 20 let. Věnuji se IT a programování už od mých 15ti let,
                        kdy jsem nastoupil na SPŠ Ostrov obor Informační Technologie.
                    </p>
                    <p className='Aboutme-Paragraph'>
                        Programování je můj koníček, protože se zde kreativitě meze nekladou. Rád weby navrhuji 
                        a poté přetvářím do funkčního digitálního prostředí. Přirovnávám to k tvorbě vysněného domu 
                        – nejprve jej nakreslíte na papír a poté krok po kroku stavíte od základů až po finální detaily.
                    </p>
                    <p className='Aboutme-Paragraph'>
                        Mé znalosti sahají od úplných základů jako je HTML, CSS až do složitějšího PHP, JavaScriptu,
                        a také velmi populárního JS Frameworku React.JS.
                    </p>
                    <p className='Aboutme-Paragraph'>
                        Dokázal bych o sobě tvrdit, že jsem velmi precizní ve své práci a projekty dotahuji do konce,
                        proto pokud si objednáte jakoukoliv z mých služeb nebudete litovat.
                    </p>
                </div>
                <div className='Aboutme-Right'>
                    <img className='Aboutme-Photo' src={Me2} alt="" />
                    <a href="#Portfolio"><button className='Aboutme-Portfolio-Button'><img src={Work} alt="" /> Portfolio</button></a>
                    <a href="#Services"><button className='Aboutme-Services-Button'><img src={CodeService} alt="" /> Služby</button></a>
                </div>
            </div>
        </div>
    )
} 

export default Aboutme;