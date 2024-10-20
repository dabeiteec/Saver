import "../../global/css/button.scss";

const Card = (cardImg, cardAlt, cardText) => {
    return (
        <div className="flex">
            <img alt={cardAlt} src={cardImg} />
            <div className="column">
                <span>{cardText}</span>
                <button className="gradient-button">Сохранить</button>
            </div>
        </div>
    );
};
export default Card;
