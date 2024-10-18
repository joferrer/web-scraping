import express from 'express'
import ProductsRouter from './modules/products/routes'
import {PORT } from './serverConfig'

const app = express()
app.use(express.json())

app.use('/api/products', ProductsRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


