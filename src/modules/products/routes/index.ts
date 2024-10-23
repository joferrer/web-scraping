
import express from 'express'
import { getProducts,getCruzVerdeProducts} from '../services/products-services'
const Farmatodojson = require( '../../../temp/farmatodoProducts.json')
const router = express.Router()

router.get('/', async(_req, res) => {
  const products = await getProducts()
  res.send(products)
})

router.get('/farmatodo', async (_req, res) => { 
  //const products = await getFarmatodoProducts()
  const products = Farmatodojson //TODO: Cambiar por la llamada a la funcion.
  res.send(products)
})

router.get('/cruzverde', async (_req, res) => {
  const products = await getCruzVerdeProducts()
  res.send(products ?? [])
})

export default router