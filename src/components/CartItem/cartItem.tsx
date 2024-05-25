import closeIcon from "../../assets/x-icon.svg";
import appWatch from "../../assets/apple-watch.png";

import useList from "../../hooks/useList";
import ItemType from "../../types/itemType";
import ListType from "../../types/listType";


function CartItem({ itemIndex }: ItemType) {

    const { cartList, setCartList } = useList() as ListType;

    function removeItem() {

        const newList = [...cartList];

        newList.splice(itemIndex, 1);

        setCartList(newList);

    }

    return (
        <div className="cartItem">
            <button className="cartItem__removeBtn" onClick={removeItem}>
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