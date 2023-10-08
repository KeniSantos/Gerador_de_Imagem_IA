import { z } from 'zod'

export const userSchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})