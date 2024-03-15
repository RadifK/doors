"use client";
import { ProductProps } from "./product";
import { FC, createContext } from "react";
import Content from "./content";
import Navigation from "./navigation";

interface MainProps {
  data: ProductProps[];
}
export const DataContext = createContext<ProductProps[] | null>(null);
const Main: FC<MainProps> = ({ data }) => {
  return (
    <DataContext.Provider value={data}>
      <main className=" grid grid-cols-1 laptop:grid-cols-[1fr_3fr]   gap-x-[30px] ">
        <Navigation />
        <Content />
      </main>
    </DataContext.Provider>
  );
};

export default Main;
