import Axios, { AxiosRequestConfig } from 'axios';

const client = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export async function request(url:string, config?: AxiosRequestConfig) {
  const response = await client.request({ url, ...config });
  const result = response.data;

  return result;
}

export default client;
