import { cookies } from 'next/headers';

export const getServerCookie = async (key: string): Promise<string | null> => {
  try {
    const cookieStore = await cookies(); 
    const cookie = cookieStore.get(key);
    return cookie?.value || null;
  } catch (error) {
    console.error('Error reading server token:', error);
    return null;
  }
};