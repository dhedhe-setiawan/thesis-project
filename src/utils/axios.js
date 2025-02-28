import useSWR from 'swr';
import api from './api';
import { useState } from 'react';

const fetcher = (url) => {
  const token = localStorage.getItem('token');

  return api
    .get(url, {
      headers: { Authorization: `Bearer ${token}` }, // ✅ Tambahkan Authorization Header
    })
    .then((res) => res.data.result);
};

export const useGetData = (link) => {
  const { data, error, isLoading, mutate } = useSWR(link, fetcher);

  return {
    data,
    isLoading,
    error: error?.response?.data ?? error,
    reload: () => mutate(), // Function untuk re-fetch data
  };
};

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk mendapatkan token dari localStorage
  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // **POST Data**
  const postData = async (link, payload) => {
    setIsLoading(true);

    try {
      const response = await api.post(link, payload, { headers: getAuthHeader() });
      return { response: response?.data ?? response };
    } catch (error) {
      return { error: error?.response?.data ?? error };
    } finally {
      setIsLoading(false);
    }
  };

  // **PATCH Data (Hanya Kirim Data yang Ada)**
  const patchData = async (link, payload) => {
    setIsLoading(true);

    // Filter hanya data yang tidak kosong/null
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter(([, value]) => value !== '' && value !== null)
    );

    try {
      const response = await api.patch(link, filteredPayload, { headers: getAuthHeader() });
      return { response: response?.data ?? response };
    } catch (error) {
      return { error: error?.response?.data ?? error };
    } finally {
      setIsLoading(false);
    }
  };

  // **DELETE Data**
  const deleteData = async (link) => {
    setIsLoading(true);

    try {
      const response = await api.delete(link, { headers: getAuthHeader() });
      return { response: response?.data ?? response };
    } catch (error) {
      return { error: error?.response?.data ?? error };
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, patchData, deleteData, isLoading };
};

export default useAxios;
