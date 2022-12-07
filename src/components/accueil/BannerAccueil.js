import bannerAccueil from "../../assets/bannerAccueil.png";
import Banner from "../accueil/Banner";

function BannerAccueil() {
  return (
    <Banner imgbanner={bannerAccueil}>
      <h2>Chez vous, partout et ailleurs</h2>
    </Banner>
  );
}

export default BannerAccueil;
