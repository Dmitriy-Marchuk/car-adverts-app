import { Helmet } from "react-helmet";

import SearchForm from "Components/SearchForm/SearchForm";
import CarCollection from "Components/CarCollection/CarCollection";

import { FindCarWrapper, Section } from "styles/common/general.styled";

const FindCar = () => {
  return (
    <>
      <Helmet>
        <title>Find Car</title>
      </Helmet>
      <Section>
        <FindCarWrapper>
          <SearchForm />
          <CarCollection />
        </FindCarWrapper>
      </Section>
    </>
  );
};

export default FindCar;
