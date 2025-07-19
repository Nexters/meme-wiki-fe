import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import SomethingWentWrong from '@/components/ErrorPage/SomethingWentWrong';

const UnknownErrorFallback = ({ error }: FallbackProps) => {
  if (import.meta.env.DEV) {
    console.log('UnknownError: ', error);
  }

  return <SomethingWentWrong />;
};

const UnknownErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={UnknownErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default UnknownErrorBoundary;
