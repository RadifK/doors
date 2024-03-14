"use client";
import Hero from "./hero";
import Catalog from "./catalog";
import Advantages from "./advantages";
import Contatcs from "./contacts";

const Content = () => {
  return (
    <div className="col-start-1 laptop:col-start-2">
      <section id="section1">
        <Hero />
      </section>
      <section id="section2">
        <Catalog />
      </section>
      <section id="section3">
        <Advantages />
      </section>
      <section id="section4">
        <Contatcs />
      </section>
    </div>
  );
};

export default Content;
