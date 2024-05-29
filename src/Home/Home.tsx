import "../css/global.css";

import { FileProvider } from "../contexts/fileContext";
import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";

import { useQuery } from "react-query";
import axios from "axios";
import { motion } from "framer-motion";

const itemsList: string[] = ['Watch', "Watch2", "Watch3", "Watch4", "Watch5", "Watch6", "Watch7", "Watch8"];

function Home() {

    const urlApi = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC";

    const { data, isLoading } = useQuery("items", async () => {
        const response = await axios.get(`${urlApi}`);
        return response.data.products;
    });

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    console.log(data);

    return (
        <FileProvider>
            <div className="containerHome">
                <Header />
                <motion.main className="productsArea"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                >
                    {itemsList.map((item, index) => (
                        <Card key={index} />
                    ))}
                </motion.main>
                <Footer />
            </div>
        </FileProvider>
    );
}

export default Home; 