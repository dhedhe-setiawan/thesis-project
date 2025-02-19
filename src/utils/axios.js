import useSWR from 'swr';
import api from './api';
import { useState } from 'react';

const fetcher = (url) => api.get(url).then((res) => res.data.result);

export const useGetData = (link) => {
  const { data, error, isLoading } = useSWR(link, fetcher);

  return {
    data,
    isLoading,
    error: error?.response?.data ?? error,
  };
};

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);

  // **POST Data**
  const postData = async (link, payload) => {
    setIsLoading(true);

    try {
      const response = await api.post(link, payload);
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
      const response = await api.patch(link, filteredPayload);
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
      const response = await api.delete(link);
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
