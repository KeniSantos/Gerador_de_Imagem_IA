import { userSchema } from "../validation/userValidation";

export default async function validationUser(req, res, next){
  userSchema.parse(req.body)
  next()
}