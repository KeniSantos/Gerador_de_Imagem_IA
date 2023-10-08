import { authToken, login } from "@/services/auth"
import { useEffect, useState } from "react"
import { setCookie, getCookies, deleteCookie } from 'cookies-next'
import toast from "react-hot-toast"

interface LoginProps {
  email: string,
  senha: string,
}

const useAuth = () => {
  const [autenticado, setAutenticado] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const { 'auth.token': token } = getCookies()
    
    if(token){
      authToken(token).then(() => setAutenticado(true)).catch(() => deleteCookie('auth.token'))
    }
  }, [])

  async function handleLogin(dados: LoginProps){
    setIsLoading(true)
    await login(dados)
      .then((token) => {
        setAutenticado(true),
        setCookie('auth.token', token, {
          maxAge: 60 * 60 * 24, // 24 horas
        })
      })
      .catch((err) => {
        if(err.response?.data.message){
          return toast.error(`${err.response.data.message}`)
        }
        toast.error('Ocorreu um erro na solicitação')
      })
      .finally(() => setIsLoading(false))
  }

  return {handleLogin, autenticado, isLoading}
}

export default useAuth