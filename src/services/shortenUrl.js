import axiosInstance from './axiosInstance';

// [POST] Create the shorten url.
export const postShortenUrl = async ({
  originalUrl,
  activeDate,
  expireDate,
  alias,
  starred,
  nonMemberCreation,
}) => {
  const response = await axiosInstance.post('/shorten-url', {
    originalUrl,
    activeDate,
    expireDate,
    alias,
    starred,
    nonMemberCreation,
  });
  return response.data;
};
