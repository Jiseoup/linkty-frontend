import axiosInstance from './axiosInstance';

const BASE_URL = '/user';

// [POST] Create a new user.
export const postRegister = async ({ email, password }) => {
  const response = await axiosInstance.post(`${BASE_URL}/register`, {
    email,
    password,
  });
  return response.data;
};
