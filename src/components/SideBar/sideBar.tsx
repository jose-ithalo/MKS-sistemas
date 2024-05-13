
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CartItem from "../CartItem/cartItem";

import carIcon from "../../assets/car.svg";
import closeIcon from "../../assets/x-icon.svg";

import { useState } from "react";

export default function SideBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ height: "100vh", color: "#FFFFFF" }}
            role="presentation">
            <div className="shoppingCart">
                <div className="shoppingCart__products">
                    <p>Carrinho</p>
                    <p>de Compras</p>
                    <button className='btnClose' onClick={toggleDrawer(false)}>
                        <img src={closeIcon} alt="Fechar" />
                    </button>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            // <ListItem key={text} disablePadding>
                            //     <CartItem />
                            // </ListItem>
                            <div className='test'>
                                <h1>Teste</h1>
                            </div>
                        ))}
                    </List>
                </div>
                <div className="priceArea">
                    <span>Total:</span>
                    <span>R$798</span>
                </div>
            </div>
            <button className='btnFinish'>
                Finalizar Compra
            </button>
        </Box>
    );

    return (
        <div>
            <div className="purchaseArea" onClick={toggleDrawer(true)}>
                <img src={carIcon} alt="Carrinho" />
                <span>0</span>
            </div>
            <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
