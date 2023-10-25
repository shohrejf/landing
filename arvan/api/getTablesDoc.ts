import axiosClient from "@/utils/axios";

export const getTablesDoc = async (docId: string) => {
  try {
    const response = await axiosClient.get(`/docs/${docId}/tables`);
    return response.data;
  } catch (error) {
    console.error("Error while getting table list:", error);
    throw error;
  }
};
