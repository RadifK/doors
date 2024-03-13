import Image from "next/image";
import logo from "@/public/images/logo-image.png";

const navigationList = [
  {
    name: "о компании",
    link: "/#",
  },
  {
    name: "Каталог",
    link: "/#",
  },
  {
    name: "Преимущества",
    link: "/#",
  },
  {
    name: "Контакты",
    link: "/#",
  },
];

const Navigation = () => {
  return (
    <div className="relative w-full">
      <div className="bg-gray-300 h-[100vh] col-start-1 col-end-2 flex flex-col items-center fixed ">
        <Image src={logo} alt="logo" className="" />
        <h2 className="uppercase text-[30px] font-bold">входные двери</h2>
        <nav className="w-full">
          <ul className="flex flex-col mt-[20px]">
            {navigationList.map((el) => (
              <li
                key={el.name}
                className="uppercase font-bold text-[16px] px-[10px] py-[20px] text-center border-y-[1px] border-gray-100 "
              >
                {el.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
