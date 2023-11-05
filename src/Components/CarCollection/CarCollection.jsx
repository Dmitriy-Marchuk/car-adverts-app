import { useEffect, useState } from "react";
import getFetchCollection from "services/getApi";
import CarItem from "Components/CarItem/CarItem";
import { CarCollectionWrapper } from "Components/CarCollection/CarCollection.styled";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  const perPage = 12;

  useEffect(() => {
    getFetchCollection(page, perPage).then((data) => {
      setCars(data);
      setTotalHits(data.length);
    });
  }, []);

  // const loadMoreCars = () => {
  //   const nextPage = page + 1;
  //   getFetchCollection(nextPage, perPage).then((data) => {
  //     setCars((prevCars) => [...prevCars, ...data]);
  //     setPage(nextPage);
  //   });
  // };
  const loadMoreCars = () => {
    const nextPage = page + 1;
    getFetchCollection(nextPage, perPage).then((data) => {
      if (data.length === 0) {
        setTotalHits(0);
      } else {
        setCars((prevCars) => [...prevCars, ...data]);
        setPage(nextPage);
      }
    });
  };

  return (
    <>
      <CarCollectionWrapper>
        {cars.map((car) => (
          <CarItem key={car.id + car.mileage} car={car} />
        ))}
      </CarCollectionWrapper>
      {totalHits > 0 && (
        <button onClick={() => loadMoreCars(page, perPage)}>Load More</button>
      )}
    </>
  );
};

export default CarCollection;
