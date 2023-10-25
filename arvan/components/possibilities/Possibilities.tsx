import { StorePossibilitiesList, possibilitiesList } from "@/utils/option";
import React, { useState } from "react";
import Icon, {
  BigTickIcon,
  LeftArrowIcon,
  SmallTickIcon,
  BigStoreIcon,
  SmallStoreIcon,
} from "@/assets/svg";
import { PropertyItem } from "./PropertyItem";

export const Possibilities: React.FC = () => {
  const [selectItem, setSelectItem] = useState<number>(0);

  return (
    <div className="flex flex-col items-start w-full py-24 px-4 md:py-32 md:px-[15%]">
      <div className="text-sm font-bold text-customGreen-600 md:text-lg">
        راهکارها
      </div>
      <div className="mt-3 text-title-28 text-customGray-800 md:text-customGray-900 md:mt-6 md:text-title-40">
        امکانات مختلف برای نیازهای متفاوت
      </div>
      <div className="mt-[46px] w-full flex flex-wrap items-center gap-3 md:mt-16 md:pr-[20px]">
        {possibilitiesList.map((item) => {
          return (
            <PropertyItem
              key={item.id}
              item={item}
              selectItem={selectItem}
              setSelectItem={(value) => setSelectItem(value)}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-between gap-8 mt-10 md:mt-16 xl:flex-row xl:gap-12 md:items-center">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-customGray-600 md:text-lg md:text-customGray-800">
            با استفاده از نسل جدید سرورهای ابری آروان می‌توانید، بدون نیاز به
            خرید یا نگهداری سخت‌افزار‌های گران‌قیمت، زیرساخت فروشگاه آنلاین خود
            را با هزینه‌ای مقرون به‌صرفه توسعه دهید و به‌شکل امن و پایدار خدمات
            و کالاهای خود را به کاربران‌تان بفروشید.
          </p>
          <p className="text-sm font-medium text-customGray-600 md:text-lg md:text-customGray-800">
            علاوه‌بر این، ویژگی مقیاس‌پذیری فناوری‌های ابری باعث می‌شود تا
            بتوانید زیرساخت و منابع خود را در زمان‌های افزایش نرخ فروش یا
            برگزاری کمپین‌های فصلی و به‌طور لحظه‌ای ارتقا دهید.
          </p>
          <div className="mt-4 md:mt-16">
            {StorePossibilitiesList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 mb-3 text-sm font-bold text-customGray-800 md:text-base md:font-bold md:text-customGray-900"
                >
                  <Icon icon={SmallTickIcon()} className="md:hidden" />
                  <Icon icon={BigTickIcon()} className="hidden md:flex" />
                  {item.name}
                </div>
              );
            })}
          </div>
          <button className="items-center justify-start hidden h-auto gap-3 pr-3 mt-12 text-base font-bold border-r-2 btn text-customGreen-600 border-r-solids border-customGreen-700 md:flex">
            راهکار فروشگاه‌های آنلاین
            <Icon icon={LeftArrowIcon()} className="hidden md:block" />
          </button>
        </div>
        <div>
          <Icon icon={SmallStoreIcon()} className="md:hidden" />
          <Icon icon={BigStoreIcon()} className="hidden md:flex" />
          <button className="btn flex items-center justify-center h-10 gap-3 text-customGreen-600 mt-[30px] text-base font-bold border border-solid w-full border-customGreen-600 rounded-lg md:hidden">
            راهکار فروشگاه‌های آنلاین
            <Icon icon={LeftArrowIcon()} className="hidden md:block" />
          </button>
        </div>
      </div>
    </div>
  );
};
