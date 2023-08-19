import "../components/IconMeaningItem.scss"

interface IconMeaningItemProps {
    iconMeaningItemImgae: string;
    iconMeaningItemName: string;
}

function IconMeaningItem(props: IconMeaningItemProps){
    return(
        <div className="icon-meaning-container">
            <img src={props.iconMeaningItemImgae} alt={props.iconMeaningItemName} className="icon-meaning-item" />
            <p>{props.iconMeaningItemName}</p>
        </div>
    );
}

export default IconMeaningItem;