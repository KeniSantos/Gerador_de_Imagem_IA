import bcrypt from 'bcrypt'

export default class Bcrypt {
  private readonly bcryptHash = bcrypt

  async gerarHash(senha: string){
    return this.bcryptHash.hash(senha, 10)
  }

  async compararHash(senha: string, hash: string){
    return this.bcryptHash.compare(senha, hash)
  }
}