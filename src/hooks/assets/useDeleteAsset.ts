import { url } from '@/config/url';
import ApiClient from '@/service/apiClient';
import { useMutation } from '@tanstack/react-query';

const apiClient = new ApiClient(url.asset.base);

export const useDeleteAsset = () => {
  return useMutation({
    mutationFn: apiClient.delete,
  });
};
