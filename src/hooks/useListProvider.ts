import { useState } from "react";

function useListProvider() {
    const [cartList, setCartList] = useState<string[]>(['Inbox', 'Starred', 'Send email', 'Drafts']);

    return {
        cartList,
        setCartList
    }
}

export default useListProvider;