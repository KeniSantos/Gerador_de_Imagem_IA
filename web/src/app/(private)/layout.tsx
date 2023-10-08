import { authToken } from "@/services/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const Private = async ({children}: {children: React.ReactNode}) => {
  const token = cookies().get('auth.token')?.value

  if(!token){
    redirect('/')
  }

  await authToken(token).catch(() => {
    redirect('/')
  })

  return <>{children}</>
}

export default Private