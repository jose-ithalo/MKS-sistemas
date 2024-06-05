import closeIcon from "../../assets/x-icon.svg";
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
            <img className="cartItem__img" src={appWatch} alt="Produto" />
            <p>Apple Watch Series 4 GPS</p>
            <div className="cartItem__finalPart">
                <div className="qtdBox">
                    <span>Qtd:</span>
                    <button>-</button>
                    <h3>1</h3>
                    <button>+</button>
                </div>
                <h2>R$399</h2>
            </div>
        </motion.div>
    );
}

export default CartItem;