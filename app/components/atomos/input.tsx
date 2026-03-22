import { cn } from '../../lib/utils';

interface InputProps {
  className?: string;
  placeholder: string;
  type: string;
}

export const Input = ({ className, placeholder, type}: InputProps) => {
  return (
    <input className={cn("rounded-sm px-4 py-2 bg-inputColor text-inputTextColor min-w-[300px] max-w-[700px]", className)} type={type} placeholder={placeholder}/>
)};