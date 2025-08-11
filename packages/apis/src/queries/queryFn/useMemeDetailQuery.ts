import { useQuery } from '@tanstack/react-query';
import { fetchApiData } from '../../utils/fetchApiData';
import { QUERY_KEY } from '../queryKey';

interface MemeDetailSuccessResponse {
  id: number;
  title: string;
  usageContext: string;
  origin: string;
  trendPeriod: string;
  imgUrl: string;
  hashtags: string[];
}

interface MemeDetailErrorResponse {
  code: string;
  message: string;
  data: string;
}

interface MemeDetailResponse {
  resultType: string;
  success: MemeDetailSuccessResponse;
  error: MemeDetailErrorResponse;
}

export const useMemeDetailQuery = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEY.MEME_DETAIL(id),
    queryFn: () =>
      fetchApiData<MemeDetailResponse>({
        method: 'GET',
        url: `https://api.meme-wiki.net/api/memes/${id}`,
      }),
  });
};
