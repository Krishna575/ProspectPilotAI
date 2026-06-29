import api from "./api";

export const reportService = {
  getAll: async (params = {}) => {
    const response = await api.get("/reports", { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/reports/${id}`);
    return response.data;
  },

  download: async (id, format = "pdf") => {
    const response = await api.get(`/reports/${id}/download`, {
      params: { format },
      responseType: "blob",
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/reports/${id}`);
    return response.data;
  },
};