import axiosInstance from './axiosInstance';

const BASE_URL = '/email';

// [POST] Send verification email.
export const postVerification = async ({ email, purpose }) => {
  const response = await axiosInstance.post(`${BASE_URL}/verification`, {
    email,
    purpose,
  });
  return response.data;
};

// [POST] Confirm verification code.
export const postVerificationConfirm = async ({ email, code, purpose }) => {
  const response = await axiosInstance.post(
    `${BASE_URL}/verification/confirm`,
    {
      email,
      code,
      purpose,
    }
  );
  return response.data;
};
