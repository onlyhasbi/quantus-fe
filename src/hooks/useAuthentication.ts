
import { deleteToken, getToken } from '@/lib/storage';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
