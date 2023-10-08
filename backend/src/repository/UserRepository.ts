import User from "../model/User";
import prisma from "../lib/prisma";

export default class UserRepository {
  private readonly repository = prisma

  async findByEmail(email: string){
    return await this.repository.user.findUnique({
      where: {
        email
      }
    })
  }

  async createUser(user: User){
    return await this.repository.user.create({data: user})
  }

  async findUserIncludeImage(email: string){
    return await this.repository.user.findUnique({
      where: {
        email,
      },
      include: {
        Imagens: true
      }
    })
  }
}