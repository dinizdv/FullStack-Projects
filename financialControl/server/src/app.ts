import express from 'express'
import cors from 'cors'
import config from 'config'

const app = express()

// CORS config
const allowedOrigins = ['http://localhost:5173'] // frontend localhost
const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(options))

app.use(express.json())

import db from '../config/db'

import Logger from '../config/logger'

import router from './router'

app.use('/api', router)

const port = config.get<number>('port')

app.listen(port, async () => {
    await db()
    Logger.info(`Application running on ${port} port`)
})