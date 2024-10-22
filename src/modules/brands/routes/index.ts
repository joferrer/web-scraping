

import express from 'express'
import { getBrands } from '../services/brand-services'

const router = express.Router()


router.get('/', async(_req, res) => {
  
  const brands = await getBrands()

  res.send(brands)
  
})

export default router

