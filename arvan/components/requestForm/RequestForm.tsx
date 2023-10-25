import Icon, { LeftArrowIcon } from "@/assets/svg";
import React, { useState, FormEvent } from "react";
import { Input } from "./Input";
import { BtnLoading } from "../shared/BtnLoading";
import { toast } from "react-toastify";
import { DocList, FormData, RowsData, TableList } from "@/utils/types";
import { InputFormData } from "@/utils/option";
import { formDataSchema } from "@/utils/validation";
import { getListDocs } from "@/api/getListDocs";
import { getTablesDoc } from "@/api/getTablesDoc";
import { insertTableRow } from "@/api/insertTableRow";
// import { validateFrom } from "@/utils/validateFrom";

export const RequestForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [checkValidation, setCheckValidation] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    selfPhoneNumber: "",
    phoneNumber: "",
    companyName: "",
    gender: "",
    email: "",
    message: "",
  });
  // const [error, setError] = useState<{ text: string; title: string }>({
  //   text: "",
  //   title: "",
  // }); // for manual validation

  const handleInputChange = (inputName: string, value: string) => {
    const { [inputName]: _, ...updatedErrors } = errors;
    setErrors(updatedErrors);
    setFormData((prevData) => ({ ...prevData, [inputName]: value }));
  };

  //Submit Form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setCheckValidation((state) => state + 1);
    setLoading(true);
    // for manual validation
    // const validationResult = validateFrom(formData);
    // validationResult === true ? sendDataToCoda() : setError(validationResult);
    try {
      await formDataSchema.validate(formData, { abortEarly: false });
      const docResponse: DocList = await getListDocs();
      const doc = docResponse.items.find(
        (item: any) => item.name === "Arvan from"
      );
      if (doc) {
        try {
          const tableREsponse: TableList = await getTablesDoc(doc?.id);
          const myTable = tableREsponse.items.find(
            (item: any) => item.name === "UserTable"
          );
          myTable && (await sendDataToCoda(doc.id, myTable.id));
        } catch (codaError) {
          console.error("Error while fetching tables:", codaError);
        }
      }
    } catch (validationErrors: any) {
      const newErrors: any = {};
      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    } finally {
      setLoading(false);
    }
  };

  //Send Data To Coda
  const sendDataToCoda = async (docId: string, myTableId: string) => {
    const data: RowsData[] = [
      {
        cells: Object.entries(formData).map(([column, value]) => ({
          column,
          value,
        })),
      },
    ];
    try {
      await insertTableRow({ docId: docId, tableId: myTableId }, data);
      toast.success("اطلاعات شما ذخیره شد.");
      setFormData({
        name: "",
        selfPhoneNumber: "",
        phoneNumber: "",
        companyName: "",
        gender: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("متاسفانه مشکلی بوجود امده است.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 w-full">
      <div className="flex grow flex-col gap-[14px] flex-wrap sm:flex-row">
        {InputFormData.map((input) => {
          return (
            <Input
              key={input.id}
              inputItem={input}
              error={errors}
              value={formData[input.id]}
              onChange={(value) => handleInputChange(input.id, value)}
              checkValidation={checkValidation}
            />
          );
        })}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center self-end h-10 min-w-[145px] gap-2 px-5 text-base font-medium rounded bg-customGreen-400 text-customGray-900 mt-14 sm:mt-11 sm:text-sm"
      >
        {!loading ? (
          <>
            ارسال درخواست
            <Icon icon={LeftArrowIcon()} />
          </>
        ) : (
          <BtnLoading />
        )}
      </button>
    </form>
  );
};
