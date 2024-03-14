"use client";

import Content from "./content";
import Navigation from "./navigation";

const Main = () => {
  return (
    <main className=" grid grid-cols-1 laptop:grid-cols-[1fr_3fr]  gap-x-[30px] ">
      <Navigation />
      <Content />
    </main>
  );
};

export default Main;
