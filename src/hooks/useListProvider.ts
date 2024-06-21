import { useState } from "react";

import ListType from "../types/listType";

function useListProvider() {
    const [cartList, setCartList] = useState<ListType[]>([]);
    const [openSnack, setOpenSnack] = useState<boolean>(false);

    return {
        cartList,
        setCartList,
        openSnack,
        setOpenSnack
    }
}

export default useListProvider;