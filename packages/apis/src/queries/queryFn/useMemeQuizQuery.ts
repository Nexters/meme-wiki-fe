import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../queryKey';
import { fetchApiData } from '../../utils/fetchApiData';

interface MemeQuizQuestion {
  message: string;
  isRight: boolean;
}

interface MemeQuizResponse {
  title: string;
  summary: string;
  image: string;
  questions: MemeQuizQuestion[];
}

export const useMemeQuizQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.MEME_QUIZ(),
    queryFn: () =>
      fetchApiData<MemeQuizResponse[]>({
        method: 'GET',
        url: '/api/quizzes',
      }),
  });
};
