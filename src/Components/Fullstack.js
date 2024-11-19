import "./Fullstack.css";
import BFullStack from '../Assets/bfullstack.png';
import Arrow from '../Assets/arrow.png';
import ArrowDown from '../Assets/arrowdown.png';
import Bdesign from '../Assets/bdesign.png';
import BCodeService from '../Assets/bcodeservice.png';
import BlackManagement from '../Assets/blackmanagement.png';

const FullStack = (props) => {
    return(
        <div id="FULL-STACK" className='Full-Stack'>
            <div className='Full-Stack-Title'>
                <img src={BFullStack} alt="" />
                <p>FULL-STACK</p>
            </div>
            <p className='Full-Stack-Subtitle'>Začínáte nový projekt od nuly? FULL-STACK řešení je přímo pro Vás.</p>
            <div className='Full-Stack-Scheme'>
                <div className='Full-Stack-Scheme-part'>
                    <img src={Bdesign} alt="" />
                    <p>Navrhnu</p>
                </div>

                <img className="Full-Stack-Arrow" src={Arrow} alt="" />
                <img className="Full-Stack-Arrow-Down" src={ArrowDown} alt="" />

                <div className='Full-Stack-Scheme-part'>
                    <img src={BCodeService} alt="" />
                    <p>Naprogramuji</p>
                </div>
                
                <img className="Full-Stack-Arrow" src={Arrow} alt="" />
                <img className="Full-Stack-Arrow-Down" src={ArrowDown} alt="" />

                <div className='Full-Stack-Scheme-part'>
                    <img src={BlackManagement} alt="" />
                    <p>Spravuji</p>
                </div>
            </div>
            <div className='Full-Stack-Buttons'>
                <button className='Full-Stack-Buttons-Demand' onClick={() => props.handleButtonClick(props.Title)}>Poptat službu</button>
                <a href="#UI/UX"><button className='Full-Stack-Buttons-Process'>Jak to probíhá?</button></a>
            </div>
        </div>
    )
}

export default FullStack;