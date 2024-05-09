import closeIcon from "../../assets/x-icon.svg";

function CartItem() {
    return (
        <div className="cartItem">
            <button>
                <img src={closeIcon} alt="Fechar" />
            </button>
            <h1>Item</h1>
        </div>
    );
}

export default CartItem;