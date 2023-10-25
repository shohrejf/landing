import Icon, { DeleteIcon, warningIcon } from "@/assets/svg";
import { genderType } from "@/utils/option";
import { FormData, TextInputProps } from "@/utils/types";
import React, { useState } from "react";

export const Input: React.FC<TextInputProps> = ({
  inputItem,
  value,
  onChange,
  error,
  checkValidation,
}) => {
  const { id, label, placeholder, type, status } = inputItem;
  const [selectItem, setSelectItem] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="relative flex-1 w-full basis-2/5">
      <div className={`${status !== "inactive" && "group"}`}>
        <div className="flex items-center justify-between mb-1">
          <label
            htmlFor={id}
            className={`text-xs font-medium ${
              status === "inactive" ? "text-customGray-500" : "text-white"
            }`}
          >
            {label}
          </label>
          <div className="relative">
            <div className={`tooltip tooltip`}>
              <div className="hidden text-xs font-medium text-white group-hover:block">
                راهنمای کوتاه
              </div>
              <div className="tooltipText">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </div>
            </div>
          </div>
        </div>

        {type === "select" ? (
          <div className="relative">
            <div
              onClick={() => setSelectItem(!selectItem)}
              className={`flex justify-start items-center w-full h-10 px-4 cursor-pointer text-xs text-white border border-solid rounded bg-customGreen-900
            ${
              checkValidation > 0
                ? error.hasOwnProperty(id)
                  ? "border-customRedd-500"
                  : value && "border-2"
                : null
            }
            ${
              status === "inactive"
                ? "border-customGray-500"
                : "border-customGreen-600"
            }
            `}
            >
              {selectedGender || "انتخاب"}
            </div>
            {selectItem && (
              <div className="absolute z-10 flex flex-col w-full h-auto border border-solid rounded-lg bg-customGreen-900 top-[46px] border-customGreen-800">
                {genderType.map((item, index) => {
                  return (
                    <label
                      key={item.id}
                      htmlFor={item.id}
                      className={`flex items-center justify-between p-3 cursor-pointer hover:bg-customGreen-700 
                ${index === 0 && "rounded-tl-md rounded-tr-md"}
                ${
                  index === genderType.length - 1 &&
                  "rounded-bl-lg rounded-br-lg"
                }`}
                    >
                      <div className="text-[13px] text-customGreen-400 font-medium">
                        {item.name}
                      </div>
                      <input
                        type="radio"
                        id={item.id}
                        name="gender"
                        value={item.name}
                        onChange={handleRadioChange}
                        checked={selectedGender === item.name}
                      />
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        ) : type === "textarea" ? (
          <textarea
            id="message"
            placeholder="متن پیام"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`resize-none w-full h-[130px] text-xs border border-solid rounded text-white placeholder-customGreen-700 bg-customGreen-900 px-4 py-2 focus:outline-none
            ${
              checkValidation > 0
                ? error.hasOwnProperty(id)
                  ? "border-customRedd-500"
                  : "border-2"
                : null
            }
            ${
              status === "inactive"
                ? "border-customGray-500"
                : "border-customGreen-600"
            }`}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            value={value}
            disabled={status === "inactive"}
            onChange={(e) => onChange(e.target.value)}
            className={`w-full h-10 px-4 text-xs text-white border border-solid rounded placeholder-customGreen-700  bg-customGreen-900 focus:bg-customGreen-900 focus:outline-none
            ${
              checkValidation > 0
                ? error.hasOwnProperty(id)
                  ? "border-customRedd-500"
                  : value && "border-2"
                : null
            }
            ${
              status === "inactive"
                ? "border-customGray-500"
                : "border-customGreen-600"
            }
            `}
            onInput={() => console.log("dfg")}
          />
        )}
      </div>

      {value && (
        <>
          <div
            className="absolute top-[38px] left-2 cursor-pointer"
            onClick={() => {
              onChange("");
              setSelectedGender("");
            }}
          >
            <Icon icon={DeleteIcon()} />
          </div>
        </>
      )}

      <div
        className={`flex items-center gap-1 ${
          type === "textarea" ? "mt-0" : "mt-2"
        }`}
      >
        {!error.hasOwnProperty(id) ? (
          <div
            className={`text-xs font-medium  ${
              status === "inactive" ? "text-customGray-500" : "text-white"
            }`}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          </div>
        ) : (
          <>
            <Icon icon={warningIcon()} />
            <div className="text-xs font-bold text-customRedd-500">
              {error[id as keyof FormData]}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
