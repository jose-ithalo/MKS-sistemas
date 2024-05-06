import shopBag from "../../assets/shopping-bag.svg";
import appWatch from "../../assets/apple-watch.png";

function Card() {
    return (
        <div className="card">
            <div className="card__info">
                <img src={appWatch} alt="Produto" />
                <div>
                    <h2>Apple Watch Series 4 GPS</h2>
                    <h3>R$399</h3>
                </div>
                <p>Redesigned from scratch and completely revised.</p>
            </div>
            <div className="card__bottom">
                <img src={shopBag} alt="Sacola" />
                <span>COMPRAR</span>
            </div>
        </div>
    )
}

export default Card;