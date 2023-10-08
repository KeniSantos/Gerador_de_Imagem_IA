import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const LoginSchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

type LoginSchemaType = z.infer<typeof LoginSchema>

export const useLogin = () => {
  const methods = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })

  const {formState: {errors}} = methods

  return {errors, methods}
}