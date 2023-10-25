import axiosClient from "@/utils/axios";

export const getListDocs = async () => {
  try {
    const response = await axiosClient.get("/docs", {
      params: { query: "Arvan from" },
    });
    return response.data;
  } catch (error) {
    console.error("Error while getting doc list:", error);
    throw error;
  }
};
