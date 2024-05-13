
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
        <Box sx={{ height: "100vh", backgroundColor: "#0F52BA", color: "#FFFFFF" }}
            role="presentation">
            <div className="shoppingCart">
                <div className='shoppingCart__header'>
                    <div>
                        <p>Carrinho</p>
                        <p>de Compras</p>
                    </div>
                    <button className='btnClose' onClick={toggleDrawer(false)}>
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
