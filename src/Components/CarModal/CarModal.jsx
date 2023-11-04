import { useEffect } from "react";
import {
  AccessoriesTitle,
  AdditionalModal,
  AdditionalTitle,
  Backdrop,
  ConditionsRental,
  DescriptionParagraph,
  HeadAdditionalModal,
  LocationModal,
  Modal,
  ModalHead,
  ModalImage,
  RentalButton,
} from "./CarModal.styled";

const CarModal = ({ car, toggleModal }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      toggleModal(); // Закрыть модальное окно при нажатии на Escape
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <button onClick={toggleModal}></button>
        {/* <ModalImage src={car.img || "/no-image.jpeg"} /> */}
        <ModalImage src={"/no-image.jpeg"} />
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
        <RentalButton>Rental car</RentalButton>
      </Modal>
    </Backdrop>
  );
};

export default CarModal;
