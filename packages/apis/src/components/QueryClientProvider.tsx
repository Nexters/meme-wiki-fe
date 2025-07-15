import { isAxiosError } from 'axios';
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { getAPIErrorInfo } from '../utils/getAPIErrorInfo';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      throwOnError: true,
    },
    mutations: {
      onError: (error: unknown) => {
        if (isAxiosError(error)) {
          const errorInfo = getAPIErrorInfo(error);
          alert(errorInfo); // 에러 처리 로직 필요 (현재는 콘솔 출력으로만 대체하였으나 추후에 토스트 메세지를 띄우는 방법등 다른 대안 필요)
        } else {
          // 알 수 없는 에러에 대한 처리 필요
        }
      },
    },
  },
});

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
    </BaseQueryClientProvider>
  );
};
