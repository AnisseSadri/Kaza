import Houses from "../../datas/homes";
import { NavLink } from "react-router-dom";

function Homes() {
  return (
    <div className="appartements">
      {Houses.map((house) => (
        <NavLink key={house.id} to={"/home/" + house.id}>
          <div className="house">
            <img src={house.cover} alt="bannerAccueil" />
            <h3>{house.title}</h3>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Homes;
