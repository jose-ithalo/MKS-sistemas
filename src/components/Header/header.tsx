import "../../css/global.css";

import SideBar from "../SideBar/sideBar";

function Header() {
    return (
        <header className='headerContainer'>
            <div className="headerTitle">
                <h1>MKS</h1>
                <span>Sistemas</span>
            </div>
            <SideBar />
        </header>
    )
}

export default Header;