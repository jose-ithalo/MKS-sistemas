import closeIcon from "../../assets/x-icon.svg";
import appWatch from "../../assets/apple-watch.png";

function CartItem() {
    return (
        <div className="cartItem">
            <button>
                <img src={closeIcon} alt="Fechar" />
            </button>
            <img src={appWatch} alt="Produto" />
            <p>Apple Watch Series 4 GPS</p>
            <h2>R$399</h2>
        </div>
    );
}

export default CartItem;