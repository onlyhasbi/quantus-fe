import { url } from '@/config/url';
import ApiClient from '@/service/apiClient';
import { AuthMeResponse } from '@/types';
import { keys } from '@/utils/keys';
import { useQuery } from '@tanstack/react-query';

const apiClient = new ApiClient<AuthMeResponse>(url.auth.me);
export const useGet = () =>
  useQuery({
    queryKey: keys(url.auth.me),
    queryFn: apiClient.get,
  });
