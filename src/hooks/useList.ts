import { useState } from "react";

function useList() {
    const [cartList, setCartList] = useState<string[]>(['Inbox', 'Starred', 'Send email', 'Drafts']);

    return {
        cartList,
        setCartList
    }
}

export default useList;