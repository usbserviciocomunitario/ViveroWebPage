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
  readSession: async (token) => {
    const response = await api.request({
      url: `/session/${token}`,
      method: "GET",
    });
    return response;
  },
  logout: async (token) => {
    //console.log(token)
    const response = await api.request({
      url: `/session/logout`,
      headers: { session_token: token },
      method: "DELETE",
    });
    console.log(response)
    return response;
  },
};
