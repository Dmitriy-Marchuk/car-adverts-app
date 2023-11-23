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

import { useQuery } from "@tanstack/react-query";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const pricePerHour = useSelector(selectPricePerHour);
  const model = useSelector(selectModel);
  const minMileage = useSelector(setMinMileage);
  const maxMileage = useSelector(setMaxMileage);

  const [filteredCars, setFilteredCars] = useState([]);

  const perPage = 12;

  const {
    data: carsResponse,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getFetchCollection({ page, perPage }),

    select: (res) => res.data,
  });

  useEffect(() => {
    if (isLoadingCars || isErrorCars || !carsResponse?.length) return;

    setCars([...cars, ...carsResponse]);
  }, [carsResponse, isErrorCars, isLoadingCars]);

  const loadMoreCars = () => {
    const nextPage = page + 1;

    setPage(nextPage);
  };

  useEffect(() => {
    console.log("Price Per Hour:", pricePerHour);
    console.log("Model:", model);
    console.log("Min Mileage:", minMileage);
    console.log("Max Mileage:", maxMileage);
    updateFilteredCars();
  }, [pricePerHour, model, minMileage, maxMileage]);

  const updateFilteredCars = () => {
    const filtered = cars.filter((car) => {
      const isModelMatch = !model.value || car.make === model.value;
      const isPricePerHourMatch =
        !pricePerHour ||
        parseInt(car.rentalPrice, 10) === parseInt(pricePerHour.value, 10);

      return isModelMatch && isPricePerHourMatch;
    });
    setFilteredCars(filtered);
  };

  return (
    <>
      <CarCollectionWrapper>
        {filteredCars.map((car) => (
          <CarItem key={car.id + car.mileage} car={car} />
        ))}
      </CarCollectionWrapper>
      {filteredCars.length !== null &&
        filteredCars.length > 0 &&
        filteredCars.length % 12 === 0 && (
          <LoadMoreBtn onClick={() => loadMoreCars(page, perPage)}>
            Load More
          </LoadMoreBtn>
        )}
    </>
  );
};

export default CarCollection;
