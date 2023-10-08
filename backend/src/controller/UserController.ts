import { Router } from 'express'
import UserRepository from '../repository/UserRepository'
import UserService from '../service/UserService'
import Bcrypt from '../lib/bcrypt'
import token from '../lib/token'
import validationUser from '../lib/validationUser'
import 'express-async-errors'

const routesUser = Router()

const repository = new UserRepository()
const hash = new Bcrypt()
const service = new UserService(repository, hash)
const tokenLib = new token()

routesUser.post('/user/create', validationUser, async(req, res) => {
  const user = req.body
  await service.create(user)

  return res.status(201).json()
})

routesUser.post('/user/login', validationUser, async(req, res) => {
  const user = req.body

  const {id} = await service.login(user)

  const token = await tokenLib.generateToken(user.email, id)

  return res.status(200).json({token, id})
})

export default routesUser