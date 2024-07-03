import { CarCollectionWrapper } from "Components/CarCollection/CarCollection.styled";
import FavoritesCollection from "Components/FavoritesCollection/FavoritesCollection";
import { Helmet } from "react-helmet";
import { Section } from "styles/common/general.styled";

const Favorites = () => {
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <Section>
        <CarCollectionWrapper>
          <FavoritesCollection />
        </CarCollectionWrapper>
      </Section>
    </>
  );
};

export default Favorites;
