import closeIcon from "../../assets/x-icon.svg";
import closeIconMobile from "../../assets/x-icon3.svg";

import useList from "../../hooks/useList";
import CartType from "../../types/cartType";
import ListType from "../../types/listType";

import { useState } from "react";
import { motion } from "framer-motion";


function CartItem({ itemIndex, itemName, itemPrice, itemPhoto }: CartType) {

    const { cartList, setCartList } = useList() as ListType;

    const [baseItem, setBaseItem] = useState<number | string>(0);
    let [quantItem, setQuantItem] = useState<number>(1);
    let [totalPrice, setTotalPrice] = useState<number>(Number(itemPrice));

    function removeItem() {

        const copyList = [...cartList];

        const newList = copyList.filter(function (item) {
            return item.id !== itemIndex
        });

        setBaseItem('-100vw');

        setTimeout(() => {
            setCartList(newList);
        }, 500);
    }

    function increaseItem() {
        setQuantItem(quantItem += 1);

        setTotalPrice(quantItem * Number(itemPrice));

        console.log(quantItem * Number(itemPrice));
    }

    function decreaseItem() {
        if (quantItem === 1) {
            return
        };

        setQuantItem(quantItem -= 1);
    }

    return (
        <motion.div className="cartItem"
            animate={{ x: baseItem }} transition={{ duration: 1 }}
        >
            <button className="cartItem__removeBtn" onClick={removeItem}>
                <img src={closeIcon} alt="Remover" />
            </button>
            <button className="cartItem__removeBtn__mobile" onClick={removeItem}>
                <img src={closeIconMobile} alt="Remover" />
            </button>
            <img className="cartItem__img" src={itemPhoto} alt="Produto" />
            <div className="cartItem__finalPart">
                <p>{itemName}</p>
                <div className="orderArea">
                    <div className="qtdBox">
                        <span>Qtd:</span>
                        <button onClick={decreaseItem}>-</button>
                        <h3>{quantItem}</h3>
                        <button onClick={increaseItem}>+</button>
                    </div>
                    <h2>R${totalPrice}</h2>
                </div>
            </div>
        </motion.div>
    );
}

export default CartItem;