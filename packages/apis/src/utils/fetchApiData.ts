/* eslint-disable no-useless-catch */
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export const fetchApiData = async <T, D = T>(
  instance: AxiosInstance,
  option: AxiosRequestConfig<D>,
) => {
  try {
    const { data } = await instance<T>(option);
    return data;
  } catch (e) {
    throw e;
  }
};
