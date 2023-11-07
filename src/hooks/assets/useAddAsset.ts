import ApiClient from '@/service/apiClient';
import { url } from '@/config/url';
import { AssetPayload } from '@/types';
import { useMutation } from '@tanstack/react-query';

const apiClient = new ApiClient<AssetPayload>(url.asset.base);

export const useAddAsset = () =>
  useMutation({
    mutationFn: apiClient.post,
  });
