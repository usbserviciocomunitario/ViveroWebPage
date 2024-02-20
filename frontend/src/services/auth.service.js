import { api } from "./config/axios.config";

export const authService = {
  login: async (data) => {
    const response = await api.request({
      url: `/session/login`,
      data,
      method: "POST",
    });
    return response;
  },
  register: async (data) => {
    const response = await api.request({
      url: `/user/register`,
      data,
      method: "POST",
    });
    return response;
  },
};
