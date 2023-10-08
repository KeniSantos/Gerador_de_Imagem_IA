import { randomUUID } from 'crypto'
import multer from 'multer'

const uploadImage = multer({ 
  limits: {
    fileSize: 1024 * 1024 * 4 // 4mb
  },
  storage: multer.diskStorage({
    destination: (req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
      cb(null, './tmp/')
    },
    filename: (req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
      const uniqueSuffix = `${randomUUID()}-${file.originalname}`
      cb(null, uniqueSuffix)
    },
  }), fileFilter: (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if('image/png' == file.mimetype){
      return cb(null, true)
    }

    return cb(null, false)
  }
})

export default uploadImage