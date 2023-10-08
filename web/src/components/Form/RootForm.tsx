import { FormHTMLAttributes, ReactNode } from 'react';

interface RootFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const RootForm = ({ children, ...rest }: RootFormProps) => {
  return <form className="mt-4 flex flex-col gap-3" {...rest}>{children}</form>;
};

export default RootForm;