import { AxiosRequestConfig } from 'axios';
import { instance } from './instance';

export const fetchApiData = async <T, D = T>(option: AxiosRequestConfig<D>) => {
  const { data } = await instance<T>(option);
  return data;
};
