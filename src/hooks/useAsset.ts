import ApiClient from '@/service/apiClient';
import { url } from '@/config/url';
import { AssetPayload } from '@/types';
import { useMutation } from '@tanstack/react-query';

const apiClient = new ApiClient<AssetPayload>(url.asset.base);

export const usePost = () =>
  useMutation({
    mutationFn: apiClient.post,
  });

export const usePut = () => {
  return useMutation({
    mutationFn: apiClient.put,
  });
};

export const useDel = () => {
  return useMutation({
    mutationFn: apiClient.delete,
  });
};
