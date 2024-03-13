import { ReactNode } from "react";
import { FC } from "react";

interface SectionLayoutProps {
  title: string;
  children: ReactNode;
}

const SectionLayout: FC<SectionLayoutProps> = ({ title, children }) => {
  return (
    <div className="mt-[30px] border-b-[2px] border-gray-600 pb-[50px] col-start-2 ">
      <h3 className="font-bold text-[32px] text-gray-600">{title}</h3>
      <hr className="border-[2px] my-[15px] w-[400px] border-gray-500" />
      <div>{children}</div>
    </div>
  );
};

export default SectionLayout;
