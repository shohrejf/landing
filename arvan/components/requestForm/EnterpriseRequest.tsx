import React from "react";
import { RequestForm } from "./RequestForm";

export const EnterpriseRequest: React.FC = () => (
  <div className="bg-header flex flex-col items-center w-full py-24 px-4 gap-14 bg-black md:py-24 md:px-[15%] xl:gap-28 xl:flex-row xl:items-start">
    <div className="flex flex-col flex-1">
      <div className="font-bold text-customGreen-400 md:text-lg">
        ارسال درخواست
      </div>

      <div className="mt-4 text-white text-title-28 md:text-title-38">
        ثبت درخواست قرارداد سازمانی
      </div>
      <p className="mt-10 text-sm font-medium text-customGray-100 md:mt-8 md:text-customBlue-100 md:text-base">
        پروکسی لایه ۴ به شما کمک می‌کند تا سرویس‌ها یا اپلیکیشن‌های مبتنی بر TCP
        خود را با استفاده از امن‌ترین روش‌ها در اختیار کاربران‌تان قرار دهید.
        اگر کسب‌وکار یا سازمانی بزرگ هستید، می‌توانید در کم‌تر از چند ثانیه
        درخواست خود را برای استفاده از این ویژگی کاربردی در فرم مقابل ثبت کنید.
      </p>
    </div>

    <RequestForm />
  </div>
);
