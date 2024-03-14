import { FC } from "react";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton: FC<BurgerButtonProps> = (props) => {
  return (
    <button
      className="flex flex-col justify-center px-[3px] gap-[7px] rounded-sm bg-gray-400 laptop:hidden w-[40px] h-[40px] fixed top-[20px] left-[20px] z-10"
      {...props}
    >
      <div className="border-b-[4px] w-full border-white rounded-sm" />
      <div className="border-b-[4px] w-full border-white rounded-sm" />
      <div className="border-b-[4px] w-full border-white rounded-sm" />
    </button>
  );
};

export default BurgerButton;
