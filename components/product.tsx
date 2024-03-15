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

const icons = [1, 2, 3, 4];

const Product: FC<ProductProps> = ({ name, complectation, image }) => {
  return (
    <div className="grid grid-cols-1  laptop:grid-cols-[2fr_1fr]  gap-x-[50px] border-b-[1px] border-gray-300 pb-[30px] mt-[30px]">
      <div className="laptop:max-w-[500px]">
        <h4 className="text-[28px] mb-[8px] font-bold text-gray-800">{name}</h4>
        <div>
          <div className="text-[26px] font-bold text-main-green-dark">
            Комплектация
          </div>
          {complectation.map((el) => (
            <div key={el.name} className="leading-8">
              <span className="font-bold text-main-green-dark text-[18px]">
                {el.name}:
              </span>
              <span className="text-main-green-dark ml-3 font-light">
                {el.content}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="laptop:justify-self-end tablet:justify-self-start justify-self-center  flex flex-col items-start gap-[10px]">
        <div className="flex flex-col gap-[10px] tablet:flex-row laptop:flex-col">
          <Image
            src={image}
            width={370}
            height={400}
            alt="image"
            className="laptop:min-w-[370px]  "
          />
          <div>
            {icons.map((el) => (
              <div key={el} className="flex items-center gap-[10px]">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={"images/hexagon.svg"}
                    width={60}
                    height={60}
                    className="min-w-[60px]"
                    alt="hexagon"
                  />
                  <div className="absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[18px] text-white font-bold flex flex-col justify-center items-center leading-4">
                    <p>24</p>
                    <p>см</p>
                  </div>
                </div>
                <span className="text-[16px] font-medium">
                  терморазрыв на полотне и коробе
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
