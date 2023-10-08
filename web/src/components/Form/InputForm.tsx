import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  nome: string,
  type: string,
}

const InputForm = ({ nome, type, ...rest }: InputFormProps) => {
  const {register} = useFormContext()

  return (
    <input
      type={type}
      {...register(nome)}
      className="w-full h-9 rounded-md border border-gray-600 bg-gray-800 outline-none text-white px-2"
      {...rest}
    />
  );
};

export default InputForm;