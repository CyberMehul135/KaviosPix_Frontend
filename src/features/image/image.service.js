import { authAxios } from "../../services/axios";

// album specific
export const getAlbumImages = async (albumId, tags) => {
  const res = await authAxios.get(`/api/v1/albums/${albumId}/images`, {
    params: { tags },
  });
  return res.data;
};

export const getAlbumImagesTags = async (albumId) => {
  const res = await authAxios.get(`/api/v1/albums/${albumId}/images/tags`);
  return res.data;
};

export const likeAlbumImage = async (albumId, imageId) => {
  const res = await authAxios.put(
    `/api/v1/albums/${albumId}/images/${imageId}/favourite`,
    {},
  );
  return res.data;
};

export const addAlbumImageComment = async (albumId, imageId, comment) => {
  const res = await authAxios.put(
    `/api/v1/albums/${albumId}/images/${imageId}/comments`,
    {
      comment,
    },
  );
  return res.data;
};

export const removeAlbumImageComment = async (albumId, imageId, commentId) => {
  const res = await authAxios.put(
    `/api/v1/albums/${albumId}/images/${imageId}/comments/${commentId}`,
    {},
  );
  return res.data;
};

export const addAlbumImageTag = async (albumId, imageId, tag) => {
  const res = await authAxios.put(
    `/api/v1/albums/${albumId}/images/${imageId}/tags`,
    {
      tag,
    },
  );
  return res.data;
};

export const removeAlbumImageTag = async (albumId, imageId, tag) => {
  const res = await authAxios.put(
    `/api/v1/albums/${albumId}/images/${imageId}/tags/${tag}`,
    {},
  );
  return res.data;
};

export const editAlbumImagePerson = async (albumId, imageId, person) => {
  const res = await authAxios.put(
    `/api/v1/albums/${albumId}/images/${imageId}/person`,
    { person },
  );
  return res.data;
};

export const uploadAlbumImage = async (albumId, imageData) => {
  const res = await authAxios.post(
    `/api/v1/albums/${albumId}/images`,
    imageData,
  );
  return res.data;
};

export const deleteAlbumImage = async (albumId, imageId) => {
  const res = await authAxios.delete(
    `/api/v1/albums/${albumId}/images/${imageId}`,
  );
  return res.data;
};

// global
export const getAllImages = async () => {
  const res = await authAxios.get(`/api/v1/images/all`);
  return res.data;
};

export const getAllfavouriteImages = async () => {
  const res = await authAxios.get(`/api/v1/images/favourite`);
  return res.data;
};
