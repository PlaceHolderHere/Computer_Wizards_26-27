import "./ObjectiveCard.css";

interface objectiveProps{
    title: string;
    description: string;
    image: string;
}

function ObjectiveCard({title, description, image} : objectiveProps){
    return(
        <div className="objectiveCard">
            <img 
                className="objectiveImg"
                src={image}
                alt={title}>
            </img>
            <div className="objectiveText">
                <h4 className="objectiveTitle">{title}</h4>
                <p className="objective-description">{description}</p>
            </div>
        </div>
    )
}

export default ObjectiveCard;