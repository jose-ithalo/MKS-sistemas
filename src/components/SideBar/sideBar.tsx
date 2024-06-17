
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CartItem from "../CartItem/cartItem";

import carIcon from "../../assets/car.svg";
import closeIcon from "../../assets/x-icon.svg";
import closeIconMobile from "../../assets/x-icon2.svg";

import useList from '../../hooks/useList';
import ListType from '../../types/listType';

import { motion } from 'framer-motion';
import { useState } from "react";

export default function SideBar() {
    const [open, setOpen] = useState(false);

    const { cartList } = useList() as ListType;

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ height: "100vh", backgroundColor: "#0F52BA", color: "#FFFFFF" }}
            role="presentation">
            <div className="shoppingCart">
                <div className='shoppingCart__header'>
                    <div>
                        <p>Carrinho</p>
                        <p>de Compras</p>
                    </div>
                    <button onClick={toggleDrawer(false)}>
                        <img className="button__close-desktop" src={closeIcon} alt="Fechar" />
                        <img className="button__close-mobile" src={closeIconMobile} alt="Fechar" />
                    </button>
                </div>
                <List>
                    {cartList.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <CartItem
                                itemIndex={item.id} itemName={item.name} itemPrice={item.price} itemPhoto={item.photo}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className="priceArea">
                <span>Total:</span>
                <span>R$798</span>
            </div>
            <button className='btnFinish'>
                Finalizar Compra
            </button>
        </Box>
    );

    return (
        <div>
            <motion.div className="purchaseArea" onClick={toggleDrawer(true)}
                initial={{ x: '100vw' }} animate={{ x: 0 }}
                transition={{ delay: 0.8, type: 'spring', mass: 0.8, stiffness: 80 }}
            >
                <img src={carIcon} alt="Carrinho" />
                <span>{cartList.length}</span>
            </motion.div>
            <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
