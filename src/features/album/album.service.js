import { authAxios } from "../../services/axios";

export const getAlbums = async () => {
  const res = await authAxios.get(`/api/v1/albums`);
  return res.data;
};

export const getSharedAlbums = async () => {
  const res = await authAxios.get(`/api/v1/albums/shared`);
  return res.data;
};

export const createAlbum = async (albumData) => {
  const res = await authAxios.post(`/api/v1/albums`, albumData);
  return res.data;
};

export const deleteAlbum = async (albumId) => {
  const res = await authAxios.delete(`/api/v1/albums/${albumId}`);
  return res.data;
};

export const shareAlbum = async (albumId, emails) => {
  const res = await authAxios.put(`/api/v1/albums/${albumId}/share`, {
    emails,
  });
  return res.data;
};
