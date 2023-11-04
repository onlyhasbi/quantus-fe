import { url } from '@/config/url';
import { AssetPayload } from '@/types';
import { keys } from '@/utils/keys';
import { useMutation } from '@tanstack/react-query';
import ApiClient from '@/service/apiClient';

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
