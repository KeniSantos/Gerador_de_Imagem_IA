import { ButtonHTMLAttributes } from "react";

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  texto: string;
}

const ButtonForm = ({ texto }: ButtonFormProps) => {
  return (
    <button className="font-bold text-white text-base rounded-md bg-blue-600 h-9 mt-4">
      {texto}
    </button>
  );
};

export default ButtonForm;