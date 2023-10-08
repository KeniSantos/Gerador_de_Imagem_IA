'use client'

import { FormProvider } from "react-hook-form"
import { Form } from "../Form"
import { useLogin } from "@/hooks/useLogin"
import Loading from "../Loading"
import { redirect } from "next/navigation"
import useAuth from "@/hooks/useAuth"

const FormLogin = () => {
  const {errors, methods} = useLogin()
  const {handleLogin, isLoading, autenticado} = useAuth()

  if(autenticado){
    redirect('/generate')
  }

  return (
    <FormProvider {...methods}>
      <Form.Root onSubmit={methods.handleSubmit(handleLogin)}>
        <Form.Label htmlFor="emailLogin" texto="Email" />
        <div>
          <Form.Input id="emailLogin" type="email" nome="email" />
          {errors.email && <Form.Span texto={errors.email.message!} />}
        </div>
        <Form.Label htmlFor="senhaLogin" texto="Senha" />
        <div>
          <Form.Input id="senhaLogin" type="password" nome="senha" />
          {errors.senha && <Form.Span texto={errors.senha.message!} />}
        </div>
        {isLoading && <div className="flex items-center justify-center my-3"><Loading /></div>}
        {!isLoading && <Form.Button texto="Enviar"/>}
      </Form.Root>
    </FormProvider>
  )
}

export default FormLogin