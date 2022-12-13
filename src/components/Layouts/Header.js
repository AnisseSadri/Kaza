import logoHeader from "../../assets/logoHeader.png";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <img src={logoHeader} alt="logoHeader" />
      <nav>
        {location.pathname === "/accueil" ? (
          <NavLink className="liensite--active" to="/">
            Accueil
          </NavLink>
        ) : (
          <NavLink className="liensite" to="/">
            Accueil
          </NavLink>
        )}
        {location.pathname === "/a-propos" ? (
          <NavLink className="liensite--active" to="/a-propos">
            A Propos
          </NavLink>
        ) : (
          <NavLink className="liensite" to="/a-propos">
            A Propos
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Header;
