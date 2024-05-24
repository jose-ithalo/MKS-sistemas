import { createContext } from "react";

import useListProvider from "../hooks/useListProvider";

export const FileContext = createContext({});

export function FileProvider(props: any) {

    const listProvider = useListProvider();

    return (
        <FileContext.Provider value={listProvider}>{props.children}</FileContext.Provider>
    );
}