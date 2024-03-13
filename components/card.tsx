import { FC } from "react";

export interface CardProps {
  name: string;
  description: string;
  image: string;
}

const Card: FC<CardProps> = () => {
  return <div></div>;
};

export default Card;
