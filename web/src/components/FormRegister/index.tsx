'use client'

import { useRegister } from "@/hooks/useRegister"
import { FormProvider } from "react-hook-form"
import { Form } from "../Form"
import Loading from "../Loading"

const FormRegister = () => {
  const {methods, handleRegister, errors, isLoading} = useRegister()

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={methods.handleSubmit(handleRegister)}>
        <Form.Label htmlFor="emailRegister" texto="Email" />
        <div>
          <Form.Input id="emailRegister" nome="email" type="email" />
          {errors.email && <Form.Span texto={errors.email.message!} />}
        </div>
        <Form.Label htmlFor="senhaRegister" texto="Senha" />
        <div>
          <Form.Input id="senhaRegister" nome="senha" type="password" />
          {errors.senha && <Form.Span texto={errors.senha.message!} />}
        </div>
        <Form.Label htmlFor="senhaConfirmacao" texto="Confirme sua senha" />
        <div>
          <Form.Input id="senhaConfirmacao" nome="senhaConfirmacao" type="password" />
          {errors.senhaConfirmacao && <Form.Span texto={errors.senhaConfirmacao.message!} />}
        </div>
        {isLoading && 
          <div className="flex items-center justify-center my-3">
            <Loading />
          </div>
        }
        {!isLoading && <Form.Button texto="Registrar" />}
      </Form.Root>
    </FormProvider>
  )
}

export default FormRegister