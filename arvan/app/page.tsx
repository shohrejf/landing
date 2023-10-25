"use client";
import { Header } from "@/components/header/Header";
import { Possibilities } from "@/components/possibilities/Possibilities";
import { EnterpriseRequest } from "@/components/requestForm/EnterpriseRequest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        <Header />
        <Possibilities />
        <EnterpriseRequest />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
