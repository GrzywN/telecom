import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { isLoading, children, ...passThroughProps } = props;

  return (
    <button {...passThroughProps} aria-busy={isLoading}>
      {children}
    </button>
  );
}

export default Button;
