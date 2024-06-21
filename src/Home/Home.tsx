import "../css/global.css";

import { FileProvider } from "../contexts/fileContext";
import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";
import AutohideSnackbar from "../components/SnackBar/snackBar";

import ItemType from "../types/itemType";

import { useQuery } from "react-query";
import axios from "axios";
import { motion } from "framer-motion";

function Home() {

    const urlApi = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

    const { data, error, isLoading } = useQuery("items", async () => {
        const response = await axios.get(`${urlApi}`);
        const itemList: ItemType[] = response.data.products;
        return itemList;
    }, {
        retry: 3,
        refetchOnWindowFocus: false
    });

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro!</div>
    }

    return (
        <FileProvider>
            <div className="containerHome">
                <Header />
                <AutohideSnackbar />
                <motion.main className="productsArea"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                >
                    {data!.map((item, index) => (
                        <Card key={index} id={item.id} name={item.name} description={item.description}
                            photo={item.photo} price={item.price} />
                    ))}
                </motion.main>
                <Footer />
            </div>
        </FileProvider>
    );
}

export default Home; 