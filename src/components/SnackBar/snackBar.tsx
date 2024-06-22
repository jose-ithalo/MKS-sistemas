import Snackbar from '@mui/material/Snackbar';

import useList from '../../hooks/useList';
import ListType from '../../types/listType';

export default function AutohideSnackbar() {

    const { openSnack, setOpenSnack } = useList() as ListType;

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    return (
        <div>
            <Snackbar
                open={openSnack}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Este produto já foi adicionado ao carrinho."
            />
        </div>
    );
}
