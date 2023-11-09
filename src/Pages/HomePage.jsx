import { Helmet } from "react-helmet";

import HomeHero from "Components/HomeHero/HomeHero";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Adverts Cars</title>
      </Helmet>
      <HomeHero />
    </>
  );
};

export default HomePage;
