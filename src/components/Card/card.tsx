import shopBag from "../../assets/shopping-bag.svg";
import appWatch from "../../assets/apple-watch.png";

import ItemType from "../../types/itemType";

import { motion } from "framer-motion";
import { useState } from "react";

function Card({ name, description, photo, price }: ItemType) {

    const [move, setMove] = useState<number[]>([0]);

    function actionPurchase() {
        setMove([0, 360, 0]);

        setTimeout(() => {
            setMove([0]);
        }, 1000);
    }

    return (
        <motion.div className="card" onClick={actionPurchase} >
            <div className="card__info">
                <img src={appWatch} alt="Produto" />
                <div>
                    <h2>{name}</h2>
                    <h3>R${price}</h3>
                </div>
                <p>{description}</p>
            </div>
            <div className="card__bottom">
                <motion.img src={shopBag} alt="Sacola"
                    animate={{ rotate: move }}
                />
                <span>COMPRAR</span>
            </div>
        </motion.div>
    )
}

export default Card;