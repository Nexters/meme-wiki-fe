import { useMutation } from '@tanstack/react-query';
import { fetchApiData } from '../utils/fetchApiData';

interface ShareMemeRequest {
  id: string;
}

export const useShareMemeMutation = () => {
  return useMutation({
    mutationFn: (data: ShareMemeRequest) => {
      return fetchApiData<void, ShareMemeRequest>({
        method: 'POST',
        url: `https://api.meme-wiki.net/api/memes/${data.id}/share`,
        data,
      });
    },
  });
};
