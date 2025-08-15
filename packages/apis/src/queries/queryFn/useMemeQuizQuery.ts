import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../queryKey';
import { fetchApiData } from '../../utils/fetchApiData';

interface MemeQuizQuestion {
  message: string;
  isRight: boolean;
}

interface MemeQuizSuccessItem {
  question: string;
  image: string;
  questions: MemeQuizQuestion[];
}

interface MemeQuizErrorResponse {
  code: string;
  message: string;
  data: string;
}

interface MemeQuizResponse {
  resultType: string;
  success: MemeQuizSuccessItem[];
  error: MemeQuizErrorResponse;
}

export const useMemeQuizQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.MEME_QUIZ(),
    queryFn: () =>
      fetchApiData<MemeQuizResponse>({
        method: 'GET',
        url: 'https://api.meme-wiki.net/api/quizzes',
      }),
  });
};
