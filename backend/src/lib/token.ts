import "dotenv/config"
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { CustomError } from "./customError"

export default class token {

  async generateToken(email: string, id: string){
    return await jwt.sign({email, id}, process.env.PRIVATE_KEY_TOKEN, { algorithm: 'HS256', expiresIn: '24h' })
  }

  async verifyToken(req: Request, res: Response, next){
    const token = req.headers['authorization']?.replace('Bearer ', '')

    if(!token){
      throw new CustomError('Token não informado', 401)
    }

    jwt.verify(token, process.env.PRIVATE_KEY_TOKEN, function(err, decoded) {
      if(err) throw new CustomError("Token inválido", 401)

      req.email = decoded.email
      req.id = decoded.id

      next()
    })
  }

  async verifyTokenLogin(token: string){
    const {id} = jwt.verify(token, process.env.PRIVATE_KEY_TOKEN, function(err, decoded) {
      if(err) throw new CustomError("Token inválido", 401)
      
      return decoded
    })

    return {id}
  }
}