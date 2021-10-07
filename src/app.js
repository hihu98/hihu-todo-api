import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import router from 'routes'
import errorHandler from 'libs/errorHandler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)
app.use(errorHandler)

export default app
