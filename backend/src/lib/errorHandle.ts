import { NextFunction, Request, Response } from 'express'
import { CustomError } from './customError'
import { ZodError } from 'zod'

export const errorHandle = async(error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof CustomError){
    return res.status(error.status).json({message: error.message})
  }
  if(error instanceof ZodError){
    const errorMessage = error.issues.map((message) => message.message)
    return res.status(400).json({ message: errorMessage})
  }
  return res.status(500).json()
}