import "../components/Card.scss";

interface CardProps {
    cardImage: string;
    cardName: string;
    children?: React.ReactNode;
}

function Card(props: CardProps){
    return(
        <div className="card-container">
            <img 
                src={props.cardImage} 
                alt="Card Image"
                className="card-image"
            />
            <p className="card-name">{props.cardName} </p>
            {props.children}
        </div>
    );
}

export default Card;