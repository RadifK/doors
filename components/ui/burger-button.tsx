import { FC } from "react";

interface BurgerButtonProps {
  onClick: () => void;
  burgerToggle: boolean;
}

const BurgerButton: FC<BurgerButtonProps> = (props) => {
  return (
    <button
      className="flex flex-col justify-center px-[3px] gap-[7px] rounded-sm bg-accent-orange-middle laptop:hidden w-[40px] h-[40px] fixed top-[20px] left-[20px] z-10  "
      {...props}
    >
      <div
        className={`${
          props.burgerToggle && `rotate-45 translate-y-[6px] duration-150`
        } border-b-[4px] w-full border-black rounded-sm`}
      />
      <div
        className={`${
          props.burgerToggle && `hidden duration-150`
        } border-b-[4px] w-full border-black rounded-sm`}
      />
      <div
        className={`${
          props.burgerToggle && `-rotate-45 translate-y-[-5px] duration-150`
        } border-b-[4px] w-full border-black rounded-sm`}
      />
    </button>
  );
};

export default BurgerButton;
