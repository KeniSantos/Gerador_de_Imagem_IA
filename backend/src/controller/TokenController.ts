import { Router } from 'express'
import token from '../lib/token'
import 'express-async-errors'

const tokenLib = new token()
const routesToken = Router()

routesToken.get('/token/:token', async (req, res) => {
  const token = req.params.token;
  
  if(!token){
    throw new Error("Token não informado")
  }
  const {id} = await tokenLib.verifyTokenLogin(token)

  res.status(200).json({id})
})

export default routesToken