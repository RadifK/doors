"use client";
import { useEffect } from "react";
import Image from "next/image";
import logo from "@/public/images/logo-image.png";
import { useState } from "react";
import BurgerButton from "./ui/burger-button";
import Link from "next/link";

const navigationList = [
  {
    name: "о компании",
    link: "/#",
    id: "section1",
  },
  {
    name: "Каталог",
    link: "/#",
    id: "section2",
  },
  {
    name: "Преимущества",
    link: "/#",
    id: "section3",
  },
  {
    name: "Контакты",
    link: "/#",
    id: "section4",
  },
];

const Navigation = () => {
  const [burgerToggle, setBurgerToggle] = useState(false);

  const onBurgerButtonClick = () => {
    setBurgerToggle(!burgerToggle);
  };
  const linkClick = () => {};

  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 750;
        console.log("top = ", top);
        const scrollPosition = window.scrollY;
        console.log("scrollPosition= ", scrollPosition);
        if (scrollPosition >= top) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <BurgerButton onClick={onBurgerButtonClick} burgerToggle={burgerToggle} />
      <div
        className={`bg-gray-300 h-[100vh] laptop:w-full  col-start-1 col-end-2 flex flex-col items-center 
        laptop:sticky top-0 fixed left-0  w-[90%] tablet:w-[70%] ${
          !burgerToggle ? `hidden  ` : `block `
        } laptop:flex laptop:flex-col text-center`}
      >
        <Image src={logo} alt="logo" />
        <h2 className="uppercase text-[30px] font-bold">входные двери</h2>
        <nav className="w-full">
          <ul className="flex flex-col mt-[20px]">
            {navigationList.map((el) => (
              <Link
                href={`/#${el.id}`}
                key={el.name}
                onClick={onBurgerButtonClick}
              >
                <li
                  className={`uppercase font-bold text-[16px] px-[10px] py-[20px] text-center border-y-[1px] border-gray-100 
                  ${activeSection === el.id ? `bg-white` : `bg-inherit`} `}
                >
                  {el.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
