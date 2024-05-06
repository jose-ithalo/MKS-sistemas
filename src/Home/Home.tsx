import "../css/global.css";

import Header from "../components/Header/header";
import Card from "../components/Card/card";
import Footer from "../components/Footer/footer";

function Home() {
    return (
        <div className="containerHome">
            <Header></Header>
            <div className="productsArea">
                <Card></Card>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home; 