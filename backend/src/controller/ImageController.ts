import { Router } from 'express'
import ImageRepository from '../repository/ImageRepository'
import UserRepository from '../repository/UserRepository'
import ImageService from '../service/ImageService'
import token from '../lib/token'
import uploadImage from '../lib/uploadImage'
import 'express-async-errors'
import { CustomError } from '../lib/customError'

const repositoryImage = new ImageRepository()
const repositoryUser = new UserRepository()
const service = new ImageService(repositoryImage, repositoryUser)
const tokenLib = new token()

const routesImage = Router()

routesImage.post('/image/upload', tokenLib.verifyToken, uploadImage.single('image'), async(req, res) => {
  const image = req.file
  const email = req.email
  const id = req.id

  if(!image){
    throw new CustomError("Erro ao processar o arquivo, verifique se a imagem é png", 500)
  }

  await service.upload(image, email, id)

  return res.status(200).json()
})

routesImage.get('/image/variation', tokenLib.verifyToken, async(req, res) => {
  const email = req.email

  const variation = await service.getVariation(email)

  return res.status(200).json({variation})
})

export default routesImage