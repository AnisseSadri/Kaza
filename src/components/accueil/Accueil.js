import BannerAccueil from "./BannerAccueil";
import Appartements from "./Appartements";
import Layout from "../Layouts/Layout";

function Accueil() {
  return (
    <>
      <Layout>
        <BannerAccueil />
        <Appartements />
      </Layout>
    </>
  );
}

export default Accueil;
