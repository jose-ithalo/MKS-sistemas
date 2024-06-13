import { useState } from "react";

import ListType from "../types/listType";

function useListProvider() {
    const [cartList, setCartList] = useState<ListType[]>([]);

    return {
        cartList,
        setCartList
    }
}

export default useListProvider;