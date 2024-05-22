import SideBar from "../SideBar/sideBar";

import { motion } from "framer-motion";

function Header() {
    return (
        <header className='headerContainer'>
            <motion.div className="headerTitle"
                initial={{ x: '-100vw' }} animate={{ x: 0 }}
                transition={{ type: 'spring', mass: 0.8, stiffness: 80 }}
            >
                <h1>MKS</h1>
                <span>Sistemas</span>
            </motion.div>
            <SideBar />
        </header>
    )
}

export default Header;