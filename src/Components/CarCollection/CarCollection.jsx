import { useEffect, useState } from "react";
import getFetchCollection from "services/getApi";
import CarItem from "Components/CarItem/CarItem";
import {
  CarCollectionWrapper,
  LoadMoreBtn,
} from "Components/CarCollection/CarCollection.styled";
import { useSelector } from "react-redux";
import {
  selectModel,
  selectPricePerHour,
  setMaxMileage,
  setMinMileage,
} from "redux/carFilters/selectors";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;

  // const selectedModel = useSelector(selectModel);
  // const selectedPricePerHour = useSelector(selectPricePerHour);
  // const settedMinMileage = useSelector(setMinMileage);
  // const settedMaxMileage = useSelector(setMaxMileage);

  useEffect(() => {
    getFetchCollection(page, perPage).then((data) => {
      setCars(data);
    });
  }, []);

  // useEffect(() => {
  //   console.log("Effect in CarCollection triggered");
  //   console.log("Selected Model in CarCollection:", selectedModel);
  // }, [selectedModel]);

  const loadMoreCars = () => {
    const nextPage = page + 1;
    getFetchCollection(nextPage, perPage).then((data) => {
      setCars((prevCars) => [...prevCars, ...data]);
      setPage(nextPage);
    });
  };

  const pricePerHour = useSelector(selectPricePerHour);
  const model = useSelector(selectModel);
  const minMileage = useSelector(setMinMileage);
  const maxMileage = useSelector(setMaxMileage);

  useEffect(() => {
    console.log("Price Per Hour:", pricePerHour);
    console.log("Model:", model);
    console.log("Min Mileage:", minMileage);
    console.log("Max Mileage:", maxMileage);
  }, [pricePerHour, model, minMileage, maxMileage]);

  // getFiltredCars = () => {
  //   const filtredCars = cars.filter();

  //   // return filtredCars;
  //   return cars;
  // };

  return (
    <>
      <CarCollectionWrapper>
        {cars.map((car) => (
          <CarItem key={car.id + car.mileage} car={car} />
        ))}
      </CarCollectionWrapper>
      {cars.length !== null && cars.length > 0 && cars.length % 12 === 0 && (
        <LoadMoreBtn onClick={() => loadMoreCars(page, perPage)}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CarCollection;
