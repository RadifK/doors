import Advantages from "./advantages";
import Content from "./content";
import Navigation from "./navigation";

const Main = () => {
  return (
    <main className=" grid grid-cols-[1fr_3fr]  gap-x-[30px] custom-container">
      <Navigation />
      <Content />
      <Advantages />
    </main>
  );
};

export default Main;
