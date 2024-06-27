import { inputClasses } from "../constants/styles";

interface InputProps {
  value: string | number | string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  className?: string;
  name?: string;
}

const Input = ({
  value,
  onChange,
  type = "text",
  placeholder,
  className,
  name,
}: InputProps) => {
  return (
    <input
      type={type}
      defaultValue={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={`block w-full px-4 text-sm text-gray-700 ${inputClasses} ${className}`}
    />
  );
};

export default Input;
