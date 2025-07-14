interface SomethingWentWrongProps {
  onRetry?: () => void;
  status?: string;
  errorMessage?: string;
}

export const SomethingWentWrong = ({
  onRetry,
  status,
  errorMessage,
}: SomethingWentWrongProps) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      {status && <div>{status}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
};
