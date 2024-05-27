import "../css/global.css";

import { FileProvider } from "../contexts/fileContext";
import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";

import { motion } from "framer-motion";

const itemsList: string[] = ['Watch', "Watch2", "Watch3", "Watch4", "Watch5", "Watch6", "Watch7", "Watch8"];

function Home() {
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