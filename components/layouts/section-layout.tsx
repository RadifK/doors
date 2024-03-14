import { ReactNode } from "react";
import { FC } from "react";

interface SectionLayoutProps {
  title: string;
  children: ReactNode;
}

const SectionLayout: FC<SectionLayoutProps> = ({ title, children }) => {
  return (
    <div className="mt-[30px] border-b-[3px] [&:not(:last-child)]:border-gray-600 pb-[50px] col-start-1 laptop:col-start-2 ">
      <h3 className="font-bold text-[32px] text-gray-500 border-b-[2px] mb-[20px] pb-[20px] inline-block border-gray-500 pr-[20px]">
        {title}
      </h3>

      <div>{children}</div>
    </div>
  );
};

export default SectionLayout;
