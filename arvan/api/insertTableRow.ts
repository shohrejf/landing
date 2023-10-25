import axiosClient from "@/utils/axios";
import { RowsData } from "@/utils/types";

export const insertTableRow = async (
  docInfo: { docId: string; tableId: string },
  data: RowsData[]
) => {
  try {
    const response = await axiosClient.post(
      `/docs/${docInfo.docId}/tables/${docInfo.tableId}/rows`,
      {
        rows: data,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error while sending the row:", error);
    throw error;
  }
};
