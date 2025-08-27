import axiosInstance from './axiosInstance';

const BASE_URL = '/email';

// [POST] Send verification email.
export const postVerificationEmail = async ({ email }) => {
  const response = await axiosInstance.post(`${BASE_URL}/verification`, {
    email,
  });
  return response.data;
};

// [POST] Confirm verification code.
export const postVerificationConfirm = async ({ email, code }) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/verification/confirm`,
    {
      email,
      code,
    }
  );
  return response.data;
};

// [POST] Send reset password email.
export const postResetPasswordEmail = async ({ email }) => {
  const response = await axiosInstance.post(`${BASE_URL}/reset-password`, {
    email,
  });
  return response.data;
};
