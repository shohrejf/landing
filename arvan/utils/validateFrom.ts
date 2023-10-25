import { FormData } from "./types";

//this is a manual validation
export const validateFrom = (formData: FormData) => {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    formData.email
  );
  const isSelfPhoneNumberValid = /^09\d{9}$/.test(formData.selfPhoneNumber);

  if (!formData.name) {
    return { title: "name", text: "نام و نام‌خانوادگی را وارد کنید." };
  } else if (!formData.email) {
    return { title: "email", text: "ایمیل را وارد کنید." };
  } else if (formData.selfPhoneNumber && !isSelfPhoneNumberValid) {
    return {
      title: "selfPhoneNumber",
      text: "لطفاً یک شماره همراه معتبر وارد کنید.",
    };
  } else if (!isEmailValid) {
    return { title: "email", text: "لطفاً یک ایمیل معتبر وارد کنید." };
  } else if (!formData.companyName) {
    return { title: "companyName", text: "نام شرکت را وارد کنید." };
  } else if (!formData.message) {
    return { title: "message", text: "پیام را وارد کنید." };
  } else {
    return true;
  }
};
