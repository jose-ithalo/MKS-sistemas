import "../../css/global.css";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

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
                <div className="shoppingCart__products">
                    <p>Carrinho</p>
                    <p>de Compras</p>
                    <img src={closeIcon} alt="Fechar" onClick={toggleDrawer(false)} />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <div>
                                        <h2>teste</h2>
                                    </div>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="priceArea">
                    <span>Total:</span>
                    <span>R$798</span>
                </div>
            </div>
            <button>
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
