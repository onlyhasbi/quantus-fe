import { deleteToken, getToken } from '@/lib/storage';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ApiClient from '@/service/apiClient';
import { url } from '@/config/url';
import { AuthPayload } from '@/types';
import { useMutation } from '@tanstack/react-query';

const logout = new ApiClient<undefined>(url.auth.logout);
const login = new ApiClient<AuthPayload>(url.auth.login);

export const useLogout = () =>
  useMutation({
    mutationFn: logout.post,
  });

export const useLogin = () =>
  useMutation({
    mutationFn: login.post,
  });

export function useAuthentication() {
  const router = useRouter();
  const currentLocation = usePathname();
  const authLocation = ['/auth/login'];

  const token = getToken();
  const isAuthenticated = Boolean(token);

  const handleSignOut = () => {
    deleteToken();
    router.push('/auth/login');
  };

  useEffect(() => {
    if (token && authLocation.includes(currentLocation)) router.push('/');
    if (!token && !authLocation.includes(currentLocation)) {
      router.push('/auth/login');
    }
  }, [token, currentLocation, router.push]);

  return { isAuthenticated, handleSignOut };
}
