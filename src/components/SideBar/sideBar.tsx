
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CartItem from "../CartItem/cartItem";

import carIcon from "../../assets/car.svg";
import closeIcon from "../../assets/x-icon.svg";

import { motion } from 'framer-motion';
import { useState } from "react";

export default function SideBar() {
    const [open, setOpen] = useState(false);

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
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                </div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <CartItem />
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
                transition={{ duration: 1, type: 'spring', mass: 0.8, stiffness: 80 }}
            >
                <img src={carIcon} alt="Carrinho" />
                <span>0</span>
            </motion.div>
            <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
