import { SomethingWentWrong } from '@components/ErrorPage/SomethingWentWrong';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { getAPIErrorInfo } from '@meme-wiki/apis';

import { isAxiosError } from 'axios';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const APIErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (isAxiosError(error)) {
    const { status, message: errorMessage } = getAPIErrorInfo(error);

    return (
      <SomethingWentWrong
        onRetry={resetErrorBoundary}
        status={status}
        errorMessage={errorMessage}
      />
    );
  } else {
    throw error;
  }
};

export const APIErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={APIErrorFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
};
