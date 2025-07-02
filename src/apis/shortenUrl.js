import instance from "./axiosInstance";

// [POST] Create the shorten url.
export const postShortenUrl = async ({ alias, originalUrl, expireDate }) => {
    const response = await instance.post(
        "/shorten-url",
        { alias, originalUrl, expireDate }
    );
    return response.data;
};
