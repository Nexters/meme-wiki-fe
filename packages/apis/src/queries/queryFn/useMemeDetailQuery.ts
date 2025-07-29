import { useQuery } from '@tanstack/react-query';
import { fetchApiData } from '../../utils/fetchApiData';
import { QUERY_KEY } from '../queryKey';

interface MemeDetailResponse {
  id: number;
  title: string;
  summary: string;
  source: string;
  background: string;
  image: string;
  hashtags: string[];
}

export const useMemeDetailQuery = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEY.MEME_DETAIL(id),
    queryFn: () =>
      fetchApiData<MemeDetailResponse>({
        method: 'GET',
        url: `/api/meme/${id}`,
      }),
  });
};
