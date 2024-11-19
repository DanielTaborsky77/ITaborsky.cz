import "./ServicesDetails.css";
import FullStack from "../Assets/fullstack.png";

const ServicesDetails = (props) => {
    return(
        <div id={props.ServicesDetailsId} className={props.Orientation === "Left" ? 'Services-Details-Left-Oriented' : 'Services-Details-Right-Oriented'}>
        <div className='Services-Details-Left'>
            <div className='Services-Details-Left-Name'>
                <img src={props.LeftTitleImg} alt="" />
                <p className='Services-Details-Left-Title'>{props.LeftTitle}</p>
            </div>
            <div className='Services-Details-Left-Paragraphs'>
                {props.LeftParagraphs.map((Paragraph, index) => (
                    <p className='Services-Details-Left-Paragraph' key={index}>{Paragraph}</p>
                ))}
            </div>
            <div className="Services-Details-Left-Demand">
                <button className='Services-Details-Left-Button' style={{backgroundColor: props.ButtonColor}} onClick={() => props.handleButtonClick(props.LeftTitle)}><img src={props.ButtonImg} alt="" />{props.ButtonText}</button>
                <button className='Services-Details-Left-Full-Stack' onClick={() => props.handleButtonClick("FULL-STACK")}><img src={FullStack} alt="" />Poptat FULL-STACK</button>
            </div>
        </div>
        <div className='Services-Details-Right' style={{backgroundColor: props.RightColor}}>
            <div className='Services-Details-Right-Name'>
                <img src={props.RightTitleImg} alt="" />
                <p className='Services-Details-Right-Title'>{props.RightTitle}</p>
            </div>
            <div className='Services-Details-Right-Paragraphs'>
    {props.RightParagraphsTitles.map((Title, index) => (
        <div className='Services-Details-Right-Paragraph' key={index}>
            <div className='Services-Details-Right-Paragraph-Title'>
                <img src={props.RightParagraphTitleImg} alt="" />
                <p>{Title}</p>
            </div>
            <p className="Services-Details-Right-Paragraph-Content">{props.RightParagraphs[index]}</p>

            {props.RightSubtitlesTitle === Title && (
                <div className="Services-Details-Right-Subtitles">
                    {props.RightSubtitles.map((Subtitle, subIndex) => (
                        <div className="Services-Details-Right-Subtitle">
                            <img src={props.RightParagraphTitleImg} alt="" />
                            <p key={subIndex}>{Subtitle}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    ))}
</div>
        </div>
    </div>
    )
}

export default ServicesDetails;