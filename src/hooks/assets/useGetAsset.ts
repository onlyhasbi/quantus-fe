import ApiClient from '@/service/apiClient';
import { url } from '@/config/url';
import { AssetResponse } from '@/types';
import { keys } from '@/utils/keys';
import { useQuery } from '@tanstack/react-query';

const apiClient = new ApiClient<AssetResponse>(url.asset.base);
export const useGetAsset = (id: string) =>
  useQuery({
    queryKey: keys('get-asset-by-id', id),
    queryFn: () => apiClient.getById(id),
  });
