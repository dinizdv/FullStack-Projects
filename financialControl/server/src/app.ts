import express from 'express'
import config from 'config'
import router from './router'

const app = express()

app.use(express.json())

import db from '../config/db'

app.use('/api/', router)

const port = config.get<number>('port')

app.listen(port, async () => {
    await db()
    console.log(`Application running on ${port} port`)
})