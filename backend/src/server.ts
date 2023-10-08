import express from 'express'
import routesUser from './controller/UserController'
import routesImage from './controller/ImageController'
import routesToken from './controller/TokenController'
import cors from "cors"
import { errorHandle } from './lib/errorHandle'


const app = express()
app.use(express.json())
app.use(cors())

app.use(routesUser)
app.use(routesImage)
app.use(routesToken)

app.use(errorHandle)

app.listen(3333, () => console.log('🎈 Servidor rodando'))