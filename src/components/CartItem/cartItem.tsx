import closeIcon from "../../assets/x-icon.svg";
import appWatch from "../../assets/apple-watch.png";

function CartItem() {
    return (
        <div className="cartItem">
            <button className="cartItem__removeBtn">
                <img src={closeIcon} alt="Remover" />
            </button>
            <img src={appWatch} alt="Produto" />
            <p>Apple Watch Series 4 GPS</p>
            <div className="qtdBox">
                <span>Qtd:</span>
                <button>-</button>
                <h3>1</h3>
                <button>+</button>
            </div>
            <h2>R$399</h2>
        </div>
    );
}

export default CartItem;