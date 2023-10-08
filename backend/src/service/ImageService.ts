import fs from 'fs'
import ImageRepository from "../repository/ImageRepository";
import UserRepository from "../repository/UserRepository";
import { openai } from '../lib/openai'
import { CustomError } from '../lib/customError'


export default class ImageService {

  constructor(private readonly repositoryImage: ImageRepository, private readonly repositoryUser: UserRepository){}

  async upload(file: Express.Multer.File, email: string, id: string){
    const user = await this.repositoryUser.findUserIncludeImage(email)
    
    if(user.Imagens?.path){
      fs.unlink(user.Imagens.path, (error) => {
        if(error){
          console.error(error.message)
        }     
      })
    }

    await this.repositoryImage.upsertImage(file.path, id)
  }

  async getVariation(email: string){
    const image = await this.repositoryImage.findImageByEmail(email)

    if(!image){
      throw new CustomError("Não foi encontrada nenhuma imagem enviada", 404)
    }

    try {
      const response = await openai.images.createVariation({
        image: fs.createReadStream(image.path)
      })
      return response.data
    }catch(error){
      throw new CustomError("Ocorreu um erro na geração da imagem, verifique se o arquivo é png ou tente enviar outra imagem", 500)
    }
  }
}