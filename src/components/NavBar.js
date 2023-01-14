import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = (props) => {

    if (props.isHeader) {
        return (
            <div className="header__buttons">
                <NavLink to="/checkout"><CartWidget /></NavLink>
                <nav className="header__links">
                <ul>
                    <li><NavLink to="/"> <span className="material-icons">&#xe88a;</span> HOME</NavLink></li>
                    <li><NavLink to="/shop/all"> <span className="material-icons">&#xf1cc;</span> SHOP</NavLink></li>
                    <li><NavLink to="/shop/bg"> <span className="material-icons">&#xf1cc;</span> BGS</NavLink></li>
                    <li><NavLink to="/shop/gg"> <span className="material-icons">&#xf05b;</span> GGS</NavLink></li>
                </ul>
                </nav>

            </div>
        )
    } else {
        return (<nav>
            <ul>
                <li><a href={props.hrefLinkFooter}>{props.textLinkFooter}</a></li>
            </ul>
            </nav>)
    }
}

export default NavBar;