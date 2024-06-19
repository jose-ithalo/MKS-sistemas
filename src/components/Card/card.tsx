import shopBag from "../../assets/shopping-bag.svg";

import useList from "../../hooks/useList";

import ItemType from "../../types/itemType";
import ListType from "../../types/listType";
import showDescType from "../../types/showDescType";

import { motion } from "framer-motion";
import { useState } from "react";

function Card({ id, name, description, photo, price }: ItemType) {

    const { cartList, setCartList } = useList() as ListType;

    const [move, setMove] = useState<number[]>([0]);
    const [showDesc, setShowDesc] = useState<showDescType>({
        height: '',
        duration: 0,
        display: ''
    });

    function addProduct
        () {

        type Keys = 'id' | 'name' | 'price' | 'photo';

        const newItem: Pick<ItemType, Keys> = {
            id,
            name,
            price,
            photo
        }

        const newCartList = [...cartList];

        const repeatedItem = newCartList.find(function (item) {
            return item.id === id
        });

        if (repeatedItem) {
            console.log('Repetido!');
            return
        }

        newCartList.push(newItem);

        setCartList(newCartList);

        setMove([0, 360, 0]);

        setTimeout(() => {
            setMove([0]);
        }, 1000);
    }

    function showDescription() {
        setShowDesc({
            height: "60px",
            duration: 1.3,
            display: 'unset'
        });
    }

    function hideDescription() {
        setShowDesc({
            height: '28px',
            duration: 1.1,
            display: '-webkit-box'
        });
    }

    return (
        <motion.div className="card" onClick={addProduct

        }
            onMouseEnter={showDescription} onMouseLeave={hideDescription}
        >
            <div className="card__info">
                <img src={photo} alt="Produto" />
                <div>
                    <h2>{name}</h2>
                    <h3>R${price}</h3>
                </div>
                <motion.p className="card__desc"
                    animate={{ display: showDesc.display, height: showDesc.height }}
                    transition={{ duration: showDesc.duration }}
                >
                    {description}
                </motion.p>
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