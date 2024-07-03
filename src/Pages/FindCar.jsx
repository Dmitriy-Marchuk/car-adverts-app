import { Helmet } from "react-helmet";

import SearchForm from "Components/SearchForm/SearchForm";
import CarCollection from "Components/CarCollection/CarCollection";

import { CarCollectionWrapper, Section } from "styles/common/general.styled";

const FindCar = () => {
  return (
    <>
      <Helmet>
        <title>Find Car</title>
      </Helmet>
      <Section>
        <CarCollectionWrapper>
          <SearchForm />
          <CarCollection />
        </CarCollectionWrapper>
      </Section>
    </>
  );
};

export default FindCar;
