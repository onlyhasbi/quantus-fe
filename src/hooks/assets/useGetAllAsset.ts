import ApiClient from '@/service/apiClient';
import { url } from '@/config/url';
import { AssetsResponse } from '@/types';
import { keys } from '@/utils/keys';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

const apiClient = new ApiClient<AssetsResponse>(url.asset.base);
export const useGetAllAsset = (search: string = '') =>
  useInfiniteQuery<AssetsResponse>({
    queryKey: keys('get-assets', search),
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({ params: { search, page: pageParam, page_size: 6 } }),
    getNextPageParam: (lastPage, allPage) =>
      lastPage.page < lastPage.page_count ? allPage.length + 1 : undefined,
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    placeholderData: keepPreviousData,
  });
