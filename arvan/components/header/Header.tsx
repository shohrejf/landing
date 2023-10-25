import Icon, { LeftArrowIcon } from "@/assets/svg";
import React from "react";

export const Header: React.FC = () => (
  <div className="bg-header w-full h-auto bg-cover bg-center flex flex-col justify-center p-4 pb-24 pt-[50%] md:p-0 md:pr-[15%] md:min-h-[360px]">
    <div className="flex flex-col items-start w-full md:w-3/6">
      <div className="text-white text-title-32 md:text-title-40">
        توسعه به‌سادگی یک کلیک
      </div>
      <div className="mt-6 text-sm text-white md:font-medium md:text-base">
        با استفاده از ماشین حساب ابر آوران می‌توانید قبل از اقدام به خرید هر از
        محصولات ابری، برآورد دقیقی از هزینه‌های زیرساختی کسب‌وکار خود داشته
        باشید.
      </div>
      <button className="flex items-center justify-center w-full h-12 gap-2 text-base font-bold bg-white rounded-lg btn text-customGreen-900 mt-14 md:justify-start md:mt-12 md:text-sm md:w-auto md:px-6">
        شروع رایگان
        <Icon icon={LeftArrowIcon()} />
      </button>
      <button className="flex items-center justify-center w-full h-12 mt-4 text-base font-bold text-white border border-white border-solid rounded-lg btn shadow-customShadow md:hidden">
        تماس با فروش
      </button>
    </div>
  </div>
);
