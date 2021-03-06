import logo from "../../assets/Logo/Cryptocurrency_Logo.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <Link className="header__links" to="/">
            <img className="header__logo" src={logo} alt="crypto logo" />
            <h1 className="header__title">Gemimine</h1>
          </Link>
        </div>
        <div className="header__links">
          <NavLink className="header__links-anchor" to="/About">
            <p className="header__links header__links--p">About</p>
          </NavLink>
          <NavLink className="header__links-anchor" to="/Contact">
            <p className="header__links header__links--p">Contact</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
