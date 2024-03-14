"use client";
import Image from "next/image";
import logo from "@/public/images/logo-image.png";
import { useRef, useState } from "react";
import BurgerButton from "./ui/burger-button";

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
  const [burgerToggle, setBurgerToggle] = useState(false);

  const onBurgerButtonClick = () => {
    setBurgerToggle(!burgerToggle);
  };

  return (
    <div>
      <BurgerButton onClick={onBurgerButtonClick} />

      <div
        className={`bg-gray-300 h-[100vh] laptop:w-full  col-start-1 col-end-2 flex flex-col items-center 
        laptop:sticky top-0 fixed left-0  w-[90%] tablet:w-[70%] ${
          burgerToggle ? `hidden` : `block`
        } laptop:block text-center`}
      >
        <Image src={logo} alt="logo" />
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
