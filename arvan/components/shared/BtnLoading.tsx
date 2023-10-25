import "../../styles/btnLoading.css";

export const BtnLoading: React.FC = () => (
  <div className="flex items-center justify-center h-5">
    <div className="w-[2px] my-0 mx-[2px] rounded-3xl align-middle bg-customGreen-900 h-2 line line1"></div>
    <div className="w-[2px] my-0 mx-[2px] rounded-3xl align-middle bg-customGreen-900 h-3 line line2"></div>
    <div className="w-[2px] my-0 mx-[2px] rounded-3xl align-middle bg-customGreen-900 h-4 line line3"></div>
    <div className="w-[2px] my-0 mx-[2px] rounded-3xl align-middle bg-customGreen-900 h-3 line line4"></div>
    <div className="w-[2px] my-0 mx-[2px] rounded-3xl align-middle bg-customGreen-900 h-2 line line5"></div>
  </div>
);
