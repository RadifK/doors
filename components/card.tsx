import Image from "next/image";
import { FC } from "react";

export interface CardProps {
  name: string;
  description: string;
  image: string;
}

const Card: FC<CardProps> = ({ name, description, image }) => {
  return (
    <div className="flex flex-col justify-between bg-gray-200 p-[25px] rounded-[5px] max-w-[480px] hover:bg-gray-100 duration-75 hover:cursor-pointer">
      <Image
        src={image}
        width={150}
        height={150}
        className="w-[150px] h-[150px] object-contain basis-[150px]"
        alt="image"
      />
      <p className="font-bold text-[26px] ">{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
