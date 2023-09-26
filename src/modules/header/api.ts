import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function authenticateUserFromAPI(credentials: { email: string; password: string }, action: 'signup' | 'login') {
  try {
    const result = await axios({
      url: `${BASE_URL}/auth/${action}`,
      method: 'POST',
      data: credentials,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}
