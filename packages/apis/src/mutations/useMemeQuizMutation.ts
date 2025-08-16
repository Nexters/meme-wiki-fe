import { useMutation } from '@tanstack/react-query';
import { fetchApiData } from '../utils/fetchApiData';

interface MemeQuizRequest {
  rightCount: number;
}

interface MemeQuizResponse {
  score: number;
}

export const useMemeQuizMutation = () => {
  return useMutation({
    mutationFn: (data: MemeQuizRequest) => {
      return fetchApiData<MemeQuizResponse, MemeQuizRequest>({
        method: 'POST',
        url: 'https://api.meme-wiki.net/api/quizzes',
        data,
      });
    },
  });
};
