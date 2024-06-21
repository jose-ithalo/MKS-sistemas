import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import { useState } from "react";

export default function AutohideSnackbar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Este produto já foi adicionado ao carrinho."
            />
        </div>
    );
}
