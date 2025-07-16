import { useQuery } from '@tanstack/react-query';
import { fetchApiData } from '../../utils/fetchApiData';

export const useInfoQuery = () => {
  return useQuery({
    queryKey: ['info'],
    queryFn: () =>
      fetchApiData({
        method: 'GET',
        url: '/api/info',
      }),
  });
};
