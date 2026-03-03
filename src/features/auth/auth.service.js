import { authAxios } from "../../services/axios";

export const logoutUser = async () => {
  const res = await authAxios.post(`/api/v1/auth/logout`, {});
  return res.data;
};

export const getUserDetails = async () => {
  const res = await authAxios.get(`/api/v1/auth/me`);
  return res.data;
};
