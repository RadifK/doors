import Hero from "./hero";
import Catalog from "./catalog";
import Advantages from "./advantages";
import Contatcs from "./contacts";

const Content = () => {
  return (
    <div className="col-start-1 laptop:col-start-2">
      <Hero />
      <Catalog />
      <Advantages />
      <Contatcs />
    </div>
  );
};

export default Content;
