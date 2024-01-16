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
  const [filteredCars, setFilteredCars] = useState([]);

  const pricePerHour = useSelector(selectPricePerHour);
  const model = useSelector(selectModel);
  const minMileage = useSelector(setMinMileage);
  const maxMileage = useSelector(setMaxMileage);

  const perPage = 12;

  const {
    data: carsResponse,
    isLoading: isLoadingCars,
    isError: isErrorCars,
  } = useQuery({
    queryKey: ["cars", page],
    queryFn: () => getFetchCollection({ page, perPage }),

    select: (res) => {
      return res.data.map((car) => {
        return { ...car, isFavorite: false };
      });
    },
  });
  console.log(carsResponse);
  useEffect(() => {
    if (isLoadingCars || isErrorCars || !carsResponse?.length) return;

    setCars((prevCars) => [...prevCars, ...carsResponse]);
  }, [carsResponse, isErrorCars, isLoadingCars]);

  const loadMoreCars = () => {
    const nextPage = page + 1;

    setPage(nextPage);
  };

  useEffect(() => {
    updateFilteredCars();
  }, [cars, pricePerHour, model, minMileage, maxMileage, page]);

  const updateFilteredCars = () => {
    const filtered = cars.filter((car) => {
      const isModelMatch = !model || (model.value && car.make === model.value);
      const isPricePerHourMatch = !pricePerHour
        ? car.rentalPrice
        : Number(car.rentalPrice.substring(1)) <= Number(pricePerHour.value);
      const isFilteredByPrice =
        (!minMileage || car.mileage >= minMileage) &&
        (!maxMileage || car.mileage <= maxMileage);
      return isModelMatch && isPricePerHourMatch && isFilteredByPrice;
    });
    setFilteredCars(filtered);
  };

  const toggleFavoriteCar = (id) => {
    if (!cars.length) return;

    const filteredCars = cars.map((car) => {
      if (car.id !== id) return car;
      return { ...car, isFavorite: !car.isFavorite };
    });

    setCars(filteredCars);
  };

  console.log("cars", cars);
  return (
    <>
      <CarCollectionWrapper>
        {filteredCars.map((car) => (
          <CarItem
            key={car.id + car.mileage}
            car={car}
            toggleFavoriteCar={toggleFavoriteCar}
          />
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
