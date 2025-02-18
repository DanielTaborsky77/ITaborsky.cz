import './ServicesCard.css';
const ServicesCard = (props) => {

    return(
        
        <div className='ServicesCard' style={{ boxShadow: `10px 10px 30px ${props.Color}` }}>
            <img src={props.Image} alt="Služba" loading="lazy"/>

            <p className='ServicesCard-Title'>{props.Title}</p>
            <p className='ServicesCard-Subtitle'>{props.Subtitle}</p>
            <button className='ServicesCard-Button' style={{ backgroundColor: props.Color, color: props.ButtontextColor}}
            
            onClick={() => props.handleButtonClick(props.Title)}>
                Zaslat žádost
            </button>
            <a className="ServicesCard-Link" href={props.Link}>Zjistit více</a>
        </div>
    )
}

export default ServicesCard;