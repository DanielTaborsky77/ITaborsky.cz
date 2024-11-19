import './ServicesCard.css';
const ServicesCard = (props) => {

    return(
        
        <div className='ServicesCard' style={{ backgroundColor: props.Color }}>
            <img src={props.Image} alt="" />

            <p className='ServicesCard-Title'>{props.Title}</p>
            <p className='ServicesCard-Subtitle'>{props.Subtitle}</p>
            <button className='ServicesCard-Button' style={{ backgroundColor: props.ButtonColor, color: props.ButtontextColor}}
            
            onClick={() => props.handleButtonClick(props.Title)}>
                Poptat službu
            </button>
            <a className="ServicesCard-Link" href={props.Link}>Zjistit více</a>
        </div>
    )
}

export default ServicesCard;