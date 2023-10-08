import prisma from "../lib/prisma";

export default class ImageRepository {
  private readonly repository = prisma

  async upsertImage(path: string, id: string){
    return await this.repository.imagens.upsert({
      where: { userid: id },
      update: { path: path },
      create: {
        path: path,
        userid: id
      }
    })
  }

  async findImageByEmail(email: string){
    return await this.repository.imagens.findFirst({
      where: {
        User: {
          email: email
        }
      }
    })
  }
}