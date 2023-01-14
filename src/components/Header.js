import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {

    const isHeader = true;

    return (
    <header className="header">
        <NavBar isHeader={isHeader} id="gg"/>
        <div className="header__img">
            <Link to="/"><img src="/img/logo.svg" alt="kpoppies" /></Link>
            </div>
    </header>
    )
}

export default Header;