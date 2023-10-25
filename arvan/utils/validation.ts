import * as Yup from "yup";

export const formDataSchema = Yup.object().shape({
  name: Yup.string().required("لطفاً نام و نام‌خانوادگی را وارد کنید."),
  email: Yup.string()
    .email("لطفاً یک ایمیل معتبر وارد کنید.")
    .required("لطفاً  ایمیل را وارد کنید."),
  selfPhoneNumber: Yup.string().test(
    "is-valid-self-phone",
    "لطفاً یک شماره همراه معتبر وارد کنید.",
    (value) => {
      if (!value) return true;
      return /^09\d{9}$/.test(value);
    }
  ),
  companyName: Yup.string().required("لطفاً نام شرکت را وارد کنید."),
  phoneNumber: Yup.string().test(
    "is-valid-phone",
    "لطفاً یک شماره معتبر وارد کنید.",
    (value) => {
      if (!value) return true;
      return /^0\d{10}$/.test(value);
    }
  ),
  message: Yup.string().required("لطفاً پیام را وارد کنید."),
});
