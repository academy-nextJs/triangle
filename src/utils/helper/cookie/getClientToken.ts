export const getClientToken = (): string | null => {
    if (typeof window === 'undefined') return null;
  
    try {
      const cookies = document.cookie?.split('; ');
      const token = cookies?.find((c) => c.startsWith('serverAccessToken='))?.split('=')[1];
      return token || null;
    } catch (error) {
      console.error('Error reading client token:', error);
      return null;
    }
  };