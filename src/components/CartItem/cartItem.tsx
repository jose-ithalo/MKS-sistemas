import closeIcon from "../../assets/x-icon.svg";
import closeIconMobile from "../../assets/x-icon3.svg";
import appWatch from "../../assets/apple-watch.png";

import useList from "../../hooks/useList";
import CartType from "../../types/cartType";
import ListType from "../../types/listType";

import { useState, useRef } from "react";
import { motion } from "framer-motion";


function CartItem({ itemIndex }: CartType) {

    const { cartList, setCartList } = useList() as ListType;

    const [baseItem, setBaseItem] = useState<number | string>(0);
    const itemRef = useRef<HTMLDivElement>(null);

    function removeItem() {

        const newList = [...cartList];

        newList.splice(itemIndex, 1);

        setBaseItem('-100vw');

        setTimeout(() => {
            itemRef.current!.style.display = 'none';
            setCartList(newList);
        }, 500);
    }

    return (
        <motion.div className="cartItem" ref={itemRef}
            animate={{ x: baseItem }} transition={{ duration: 1 }}
        >
            <button className="cartItem__removeBtn" onClick={removeItem}>
                <img src={closeIcon} alt="Remover" />
            </button>
            <button className="cartItem__removeBtn__mobile" onClick={removeItem}>
                <img src={closeIconMobile} alt="Remover" />
            </button>
            <img className="cartItem__img" src={appWatch} alt="Produto" />
            <div className="cartItem__finalPart">
                <p>Apple Watch Series 4 GPS</p>
                <div className="orderArea">
                    <div className="qtdBox">
                        <span>Qtd:</span>
                        <button>-</button>
                        <h3>1</h3>
                        <button>+</button>
                    </div>
                    <h2>R$399</h2>
                </div>
            </div>
        </motion.div>
    );
}

export default CartItem;