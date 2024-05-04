import "../css/global.css";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function Home() {
    return (
        <div className="containerHome">
            <Header></Header>
            <div className="productsArea">
                <div className="card">
                    <h1>Projeto</h1>
                    <div className="card__price">
                        <span>COMPRAR</span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home; 