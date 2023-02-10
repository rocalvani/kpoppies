import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="header__buttons">
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
      <nav className="header__links">
        <ul>
          <li>
            <NavLink to="/">
              <span className="material-icons">&#xe88a;</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/all">
              <span className="material-icons">&#xf1cc;</span> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/bg">
              <span className="material-icons">&#xe58e;</span> BGS
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/gg">
              <span className="material-icons">&#xe590;</span> GGS
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/solo">
              <span className="material-icons">&#xe87d;</span> SOLO
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
