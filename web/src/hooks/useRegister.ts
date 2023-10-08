import { register } from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { redirect, useRouter } from "next/navigation"
import toast from "react-hot-toast"

const RegisterSchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  senhaConfirmacao: z.string(),
}).refine(
  ({senha, senhaConfirmacao}) => senha == senhaConfirmacao,
  {
    message: "Senhas não conferem",
    path: ["senhaConfirmacao"],
  },
)

type RegisterSchemaType = z.infer<typeof RegisterSchema>

export const useRegister = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const methods = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema)
  })

  const {formState: {errors}} = methods

  async function handleRegister(dados: RegisterSchemaType) {
    setIsLoading(true)
    await register(dados)
      .then(() => {
      toast.success('Cadastrado com sucesso')
      })
      .then(() => router.push('/'))
      .catch((err) => {
      if(err.response?.data.message){
        return toast.error(`${err.response.data.message}`)
      }
      toast.error('Ocorreu um erro na solicitação')
    })
    .finally(() => setIsLoading(false))

    console.log('teste')
  }

  return {methods, handleRegister, errors, isLoading}
}