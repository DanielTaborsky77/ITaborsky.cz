import "./Fullstack.css";
import BFullStack from '../Assets/bfullstack.png';
import Arrow from '../Assets/arrow.png';
import ArrowDown from '../Assets/arrowdown.png';
import Bdesign from '../Assets/bdesign.png';
import BCodeService from '../Assets/bcodeservice.png';
import BlackManagement from '../Assets/blackmanagement.png';
import Pdf from '../Assets/pdf.png';
import Fullstack from '../Assets/fullstack.png';
import FullStackPdf from '../Assets/Documents/ITaborsky_FULL-STACK.pdf';

const FullStack = (props) => {
    return(
        <div id="FULL-STACK" className='Full-Stack'>
                
            <div className='Full-Stack-Title'>
                <img src={BFullStack} alt="Stack_Icon" />
                <p>FULL-STACK</p>
            </div>
            <p className='Full-Stack-Subtitle'>Začínáte nový projekt od nuly? FULL-STACK řešení je přímo pro Vás.</p>
            <div className='Full-Stack-Scheme'>
                <div className='Full-Stack-Scheme-part'>
                    <img src={Bdesign} alt="UI/UX Desicgn" loading="lazy"/>
                    <p>Navrhnu</p>
                </div>

                <img className="Full-Stack-Arrow" src={Arrow} alt="Arrow" loading="lazy"/>
                <img className="Full-Stack-Arrow-Down" src={ArrowDown} alt="Arrow" loading="lazy"/>

                <div className='Full-Stack-Scheme-part'>
                    <img src={BCodeService} alt="Vývoj" loading="lazy"/>
                    <p>Naprogramuji</p>
                </div>
                
                <img className="Full-Stack-Arrow" src={Arrow} alt="Arrow" />
                <img className="Full-Stack-Arrow-Down" src={ArrowDown} alt="Správa" loading="lazy"/>

                <div className='Full-Stack-Scheme-part'>
                    <img src={BlackManagement} alt="Správa" loading="lazy"/>
                    <p>Spravuji</p>
                </div>
            </div>
            <div className='Full-Stack-Buttons'>
                <a href={FullStackPdf} target="_blank"><button className='Full-Stack-Buttons-Process'><img src={Pdf} alt="PDF" loading="lazy"/> Jak to probíhá?</button></a>
                <button className='Services-Details-Left-Full-Stack' onClick={() => props.handleButtonClick(props.Title)}><img src={Fullstack} alt="Fullstack-Demand"/>FULL-STACK Řešení</button>
            </div>
        </div>
    )
}

export default FullStack;