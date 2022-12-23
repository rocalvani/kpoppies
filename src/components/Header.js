import NavBar from "./NavBar";

const Header = () => {

    const isHeader = true;

    return (
    <header className="header">
        <NavBar isHeader={isHeader}/>
        <div className="header__img"><img src="/img/logo.svg" alt="kpoppies" /></div>
    </header>
    )
}

export default Header;