import {useEffect, useState} from 'react';
import {User} from './types';
import {getFakeUser} from 'lib/fakes/fakeData';

export function useUser(): {
  isLoading: boolean;
  error: string | null;
  user: User | null;
} {
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setIsLoading(true);
    let timeout: NodeJS.Timeout | null = null;
    timeout = setTimeout(() => {
      const user = getFakeUser();
      setUser(user);
    }, 1000);
    setIsLoading(false);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return {
    isLoading,
    error,
    user,
  };
}
