import { LabelHTMLAttributes } from 'react';

interface LabelFormProps extends LabelHTMLAttributes<HTMLLabelElement> {
  texto: string;
}

const LabelForm = ({ texto, ...rest }: LabelFormProps) => {
  return <label className="text-white font-bold text-xl" {...rest}>{texto}</label>;
};

export default LabelForm;