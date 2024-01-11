import closeIcon from "images/close-icon.svg";
// import NoImage from "images/no-image.jpeg";

import {
  AdditionalModal,
  AdditionalTitle,
  CloseModalButton,
  ConditionsRental,
  DescriptionParagraph,
  ModalHead,
  ModalImage,
  ModalWrapped,
  RentalButton,
} from "./CarModal.styled";

const CarModal = ({ car, toggleModal }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    type,
    mileage,
    accessories,
    id,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    address,
  } = car;

  const addressParts = address.split(", ");

  const conditionsArray = rentalConditions.split("\n");
  const parsedConditions = conditionsArray.map((condition) => {
    const [key, value] = condition.split(": ");
    return { key, value };
  });

  return (
    <ModalWrapped
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          overflowY: "auto",
          padding: "20px 0",
        },
      }}
      isOpen={true}
      onRequestClose={toggleModal}
    >
      <CloseModalButton onClick={toggleModal}>
        <img src={closeIcon} alt="Close button" />
      </CloseModalButton>
      <ModalImage src={car.img || "NoImage"} />
      {/* <ModalImage src={NoImage} /> */}
      <ModalHead>
        {make} <span>{model}</span>, {year}
      </ModalHead>
      <AdditionalModal>
        <li>
          <p>{addressParts[1]}</p>
        </li>
        <li>
          <p>{addressParts[2]}</p>
        </li>
        <li>
          <p>id:{id}</p>
        </li>
        <li>
          <p>Year: {year}</p>
        </li>
        <li>
          <p>Type: {type}</p>
        </li>
      </AdditionalModal>
      <AdditionalModal>
        <li>
          <p>Fuel Consumption: {fuelConsumption}</p>
        </li>
        <li>
          <p>Engine Size: {engineSize}</p>
        </li>
      </AdditionalModal>
      <DescriptionParagraph>{description}</DescriptionParagraph>
      <AdditionalTitle>Accessories and functionalities:</AdditionalTitle>
      <AdditionalModal>
        {accessories.map((acc, index) => (
          <li key={index}>
            <p>{acc}</p>
          </li>
        ))}
      </AdditionalModal>
      <AdditionalModal>
        {functionalities.map((func, index) => (
          <li key={index}>
            <p>{func}</p>
          </li>
        ))}
      </AdditionalModal>
      <AdditionalTitle>Rental Conditions: </AdditionalTitle>
      <ConditionsRental>
        {parsedConditions.map((condition, index) => (
          <li key={index}>
            <p>
              {condition.value ? (
                <>
                  {condition.key}: <span>{condition.value}</span>
                </>
              ) : (
                condition.key
              )}
            </p>
          </li>
        ))}
        <li>
          <p>
            Mileage:<span> {mileage}</span>
          </p>
        </li>
        <li>
          <p>
            Price:<span> {rentalPrice}</span>
          </p>
        </li>
      </ConditionsRental>
      <RentalButton href="tel:+380730000000">Rental car</RentalButton>
    </ModalWrapped>
  );
};

export default CarModal;
