import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={cn("rounded-xl px-4 py-2", className)}>{children}</button>
  );
};