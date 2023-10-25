import React from "react";

interface Props {
  item: { name: string; id: number };
  selectItem: number;
  setSelectItem: (item: number) => void;
}
export const PropertyItem: React.FC<Props> = ({
  item,
  selectItem,
  setSelectItem,
}) => (
  <div
    className={`relative cursor-pointer flex justify-center items-center whitespace-nowrap border border-solid border-customGreen-700 text-customGray-800 text-sm font-bold rounded-2xl h-[33px] px-5 md:px-0 md:pb-4 md:h-auto md:bg-none md:flex-1 md:bg-white md:rounded-none md:text-customGray-600 md:text-lg md:font-black md:hover:text-customGreen-600 md:border-0
                ${
                  selectItem === item.id &&
                  "text-white bg-custom-gradient rounded-[20px] border-none md:text-customGreen-600 md:pb-4 md:rounded-none  md:border-b-2 md:border-solid md:border-b-customBlue-100"
                }`}
    onClick={() => setSelectItem(item.id)}
  >
    {item.name}
    {selectItem === item.id && (
      <div className="hidden bg-customGreen-700 absolute h-[2px] w-6/12 -bottom-0.5 right-0 md:block"></div>
    )}
  </div>
);
