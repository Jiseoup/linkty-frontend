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

// [DELETE] Delete user.
export const deleteWithdraw = async ({ password }) => {
  const response = await axiosInstance.delete(`${BASE_URL}/withdraw`, {
    data: { password },
  });
  return response.data;
};

// [POST] User login.
export const postLogin = async ({ email, password, rememberMe }) => {
  const response = await axiosInstance.post(`${BASE_URL}/login`, {
    email,
    password,
    rememberMe,
  });
  return response.data;
};

// [POST] User logout.
export const postLogout = async () => {
  const response = await axiosInstance.post(`${BASE_URL}/logout`);
  return response.data;
};

// [POST] Refresh Access Token.
export const postRefreshToken = async () => {
  const response = await axiosInstance.post(`${BASE_URL}/refresh-token`);
  return response.data;
};

// [GET] Validate Reset Password Token.
export const getValidateResetPassword = async ({ token }) => {
  const response = await axiosInstance.get(`${BASE_URL}/reset-password`, {
    params: { token },
  });
  return response.data;
};

// [POST] Reset Password.
export const postResetPassword = async ({ token, password }) => {
  const response = await axiosInstance.post(`${BASE_URL}/reset-password`, {
    token,
    password,
  });
  return response.data;
};
