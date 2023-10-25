import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://coda.io/apis/v1",
  headers: {
    Authorization: `Bearer c3c20f37-edac-48ea-aa34-7bdc88b39f61`,
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    console.error("axios error", error);
  }
);

export default axiosClient;
