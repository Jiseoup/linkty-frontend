import axiosInstance from '../axiosInstance';

// [POST] Create a new user.
export const postRegister = async ({ email, password }) => {
  const response = await axiosInstance.post('/user/register', {
    email,
    password,
  });

  return response.data;
};
