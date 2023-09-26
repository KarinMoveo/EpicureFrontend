import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function addUserFromAPI(credentials : {email : string, password : string}) {
	try {
		const result = await axios({url: `${BASE_URL}/auth/signup`, method:'POST', data: credentials});
		return result.data;
	} catch (error) {
		throw error;
	}
}
