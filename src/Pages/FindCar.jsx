import { Helmet } from "react-helmet";

import SearchForm from "Components/SearchForm/SearchForm";
import CarCollection from "Components/CarCollection/CarCollection";

import { Section } from "styles/common/general.styled";

const FindCar = () => {
  return (
    <>
      <Helmet>
        <title>Find Car</title>
      </Helmet>
      <Section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <SearchForm />
          <CarCollection />
        </div>
      </Section>
    </>
  );
};

export default FindCar;
