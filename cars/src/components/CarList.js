import React from "react";
import { useSelector } from "react-redux";

function CarList() {
  const cars = useSelector((state) => state.cars.data);
  const handleCarDelete = (car) => {};

  const renderedCars = cars.map((car) => (
    <div key={car.id} className="panel">
      <p>
        {car.name} - ${car.cost}
      </p>
      <button onClick={() => handleCarDelete(car)} className="button is-danger">
        Delete
      </button>
    </div>
  ));

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
