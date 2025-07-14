import { SomethingWentWrong } from '@components/ErrorPage/SomethingWentWrong';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const UnknownErrorFallback = ({ error }: FallbackProps) => {
  if (import.meta.env.DEV) {
    console.log('UnknownError: ', error);
  }

  return <SomethingWentWrong />;
};

export const UnknownErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ErrorBoundary FallbackComponent={UnknownErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};
