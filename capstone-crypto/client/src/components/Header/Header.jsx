
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        {/* <Link to="/warehouses">
          <img className="header__logo" src={Logo} alt="instock logo" />
        </Link> */}
        <div className="header__links">
          <NavLink className="header__links-anchor" to="/List">
            <p className="header__links header__links--p">Top Rated</p>
          </NavLink>
          {/* <NavLink className="header__links-anchor" to="/inventories">
            <p className="header__links header__links--p">Inventory</p>
          </NavLink> */}
        </div>
      </div>
    </header>
  );
}

export default Header;