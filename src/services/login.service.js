import { backendAPI } from './api.js';

const getcsrftoken = async ()=>{
  try{
    const data = await backendAPI.get('/sanctum/csrf-cookie');
    return data;
  }catch (error) {
    throw error;
  }
}

export const onLogin = async (email, password ) => {
  try {

    //console.log(await getcsrftoken());
    const response = await backendAPI.post(`/loginApi`, {
      email,
      password,
    });

    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};

export const renewToken = async token => {
  try {
    const response = await backendAPI.get(`/auth/renew`, {
      headers: { 'x-token': token },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
