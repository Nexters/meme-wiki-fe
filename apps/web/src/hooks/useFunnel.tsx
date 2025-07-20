import { ReactElement, ReactNode, useState } from 'react';

interface FunnelProps<T> {
  children: Array<ReactElement<StepProps<T>>>;
}

interface StepProps<T> {
  step: T;
  children: ReactNode;
}

export function useFunnel<T>(defaultStep: T) {
  const [step, setStep] = useState<T>(defaultStep);

  function Step({ children }: StepProps<T>) {
    return <>{children}</>;
  }

  function Funnel({ children }: FunnelProps<T>) {
    const targetChild = children.find((child) => child.props.step === step);
    return targetChild;
  }

  Funnel.Step = Step;

  return { Funnel, step, setStep };
}
