import logoHeader from "../../assets/logoHeader.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logoHeader} alt="logoHeader" />
      <nav>
        <NavLink to="/accueil" className="lien-site lien-menu">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="lien-site lien-menu">
          À propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
