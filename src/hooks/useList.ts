import { useContext } from "react";
import { FileContext } from "../contexts/fileContext";

function useList() {
    return useContext(FileContext);
}

export default useList;