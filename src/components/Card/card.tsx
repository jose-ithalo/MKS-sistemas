import shopBag from "../../assets/shopping-bag.svg";
import appWatch from "../../assets/apple-watch.png";

import { motion } from "framer-motion";
import { useState } from "react";

function Card() {

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
                    <h2>Apple Watch Series 4 GPS</h2>
                    <h3>R$399</h3>
                </div>
                <p>Redesigned from scratch and completely revised.</p>
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