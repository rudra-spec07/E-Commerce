import { apiClient } from "./apiClient";

export const getProducts = () => {
  return apiClient("/api/products");
};
