import axiosInstance from './axiosInstance';

const BASE_URL = '/user';

// [POST] Create a new user.
export const postRegister = async ({ email, password, captchaToken }) => {
  const response = await axiosInstance.post(`${BASE_URL}/register`, {
    email,
    password,
    captchaToken,
  });
  return response.data;
};

// [POST] User login.
export const postLogin = async ({ email, password }) => {
  const response = await axiosInstance.post(`${BASE_URL}/login`, {
    email,
    password,
  });
  return response.data;
};
