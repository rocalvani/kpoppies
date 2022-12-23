import CartWidget from "./CartWidget";

const NavBar = (props) => {

    const {isHeader, textLinkFooter, hrefLinkFooter} = props

    if (props.isHeader) {
        return (
            <div className="header__buttons">
                <CartWidget />
                <nav className="header__links">
                <ul>
                    <li><a href="##"> <span className="material-icons">&#xe88a;</span> HOME</a></li>
                    <li><a href="##"> <span className="material-icons">&#xf1cc;</span> STORE</a></li>
                    <li><a href="##"> <span className="material-icons">&#xf05b;</span> SALE</a></li>
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