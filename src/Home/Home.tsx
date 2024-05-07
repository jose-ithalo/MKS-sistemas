import "../css/global.css";

import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";

const itemsList: string[] = ['Watch', "Watch2", "Watch3", "Watch4", "Watch5", "Watch6", "Watch7", "Watch8"];

function Home() {
    return (
        <div className="containerHome">
            <Header />
            <div className="productsArea">
                {itemsList.map((item, index) => (
                    <Card key={index} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home; 