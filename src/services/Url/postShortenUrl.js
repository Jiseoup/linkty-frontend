import axiosInstance from '../axiosInstance';

// [POST] Create the shorten url.
export const postShortenUrl = async ({
  originalUrl,
  activeDate,
  expireDate,
  alias,
}) => {
  const response = await axiosInstance.post('/shorten-url', {
    originalUrl,
    activeDate,
    expireDate,
    alias,
  });

  return response.data;
};
