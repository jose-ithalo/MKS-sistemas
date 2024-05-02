import "../../css/global.css";
import carIcon from "../../assets/car.svg";

function Header() {
    return (
        <header className='headerContainer'>
            <div className="headerTitle">
                <h1>MKS</h1>
                <span>Sistemas</span>
            </div>
            <div className="purchaseArea">
                <img src={carIcon} alt="Carrinho" />
                <span>0</span>
            </div>
        </header>
    )
}

export default Header;