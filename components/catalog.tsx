"use client";
import { useContext } from "react";
import Product from "./product";
import { DataContext } from "./main";

const Catalog = () => {
  const data = useContext(DataContext);

  return (
    <div className="mt-[30px] custom-container">
      <h3 className="text-[36px] font-bold text-main-green-dark">Каталог</h3>
      {data!.map((el) => (
        <Product
          image={el.image}
          key={el.name}
          name={el.name}
          complectation={el.complectation}
        />
      ))}
    </div>
  );
};

export default Catalog;
