import Bcrypt from "../lib/bcrypt";
import { CustomError } from "../lib/customError";
import User from "../model/User";
import UserRepository from "../repository/UserRepository";


export default class UserService {
  constructor(private readonly repository: UserRepository, private readonly hash: Bcrypt){}

  async create(user: User){
    const verifyUser = await this.repository.findByEmail(user.email)

    if(verifyUser){
      throw new CustomError("Usuário já cadastrado", 409)
    }

    const hashSenha = await this.hash.gerarHash(user.senha)

    await this.repository.createUser({email: user.email, senha: hashSenha})
  }

  async login(user: User){
    const verifyUser = await this.repository.findByEmail(user.email)

    if(!verifyUser){
      throw new CustomError("Usuário não cadastrado", 404)
    }

    const hashSenha = await this.hash.compararHash(user.senha, verifyUser.senha)

    if(!hashSenha){
      throw new CustomError("Credenciais inválidas", 401)
    }

    return {id: verifyUser.id}
  }
}