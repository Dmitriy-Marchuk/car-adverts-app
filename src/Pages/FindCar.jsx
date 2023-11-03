import { Helmet } from "react-helmet";
import { Section } from "../../src/styles/common/general.styled";
import SearchForm from "../Components/SearchForm/SearchForm";

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
          <div>WrapperSearch</div>
        </div>
      </Section>
    </>
  );
};

export default FindCar;
