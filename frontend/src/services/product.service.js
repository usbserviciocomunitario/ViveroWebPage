import { api } from "./config/axios.config";

export const productService = {
  getProducts: async (token) => {
    const response = await api.request({
      url: `/product`,
      headers: { session_token: token },
      method: "GET",
    });
    return response;
  },
  getProduct: async (token, id) => {
    const response = await api.request({
      url: `/product/${id}`,
      headers: { session_token: token },
      method: "GET",
    });
    return response;
  },
};
