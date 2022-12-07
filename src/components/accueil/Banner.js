function Banner({ imgbanner, children }) {
  return (
    <div className="banner">
      <img src={imgbanner} alt="banner" />
      {children}
    </div>
  );
}

export default Banner;
