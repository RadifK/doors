import Image from "next/image";
import { FC } from "react";
interface Complectation {
  name: string;
  content: string;
}

export interface ProductProps {
  name: string;
  image: string;
  complectation: Complectation[];
}

const Product: FC<ProductProps> = ({ name, complectation, image }) => {
  return (
    <div className="grid grid-cols-1  laptop:grid-cols-[2fr_1fr]  gap-x-[20px] border-b-[1px] border-gray-300 pb-[30px] mt-[30px]">
      <div>
        <h4 className="text-[28px] mb-[8px] font-bold text-gray-800">{name}</h4>
        <div>
          <div className="text-[26px] font-bold text-gray-600">
            {" "}
            Комплектация
          </div>
          {complectation.map((el) => (
            <div key={el.name} className="leading-7">
              <span className="font-bold text-gray-700"> {el.name}:</span>
              <span className="text-gray-600 ml-3 font-light">
                {el.content}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="laptop:justify-self-end justify-self-center mt-[15px]">
        <Image src={image} width={270} height={300} alt="image" />
      </div>
    </div>
  );
};

export default Product;
