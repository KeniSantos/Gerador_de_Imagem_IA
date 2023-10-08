import api from './api'

interface PropsLogin {
  email: string,
  senha: string,
}

export async function login(dados: PropsLogin) {
  const {data} = await api.post('/user/login', dados)

  return data.token
}

export async function register(dados: PropsLogin){
  await api.post('/user/create', dados)
}

export async function authToken(token: string){
  const {data} = await api.get(`/token/${token}`)

  return data.id
}