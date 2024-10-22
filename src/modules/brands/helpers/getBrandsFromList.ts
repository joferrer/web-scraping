import { Brand } from "../../../interfaces/brands.interface";
import { ProductWithPrice } from "../../../interfaces/products.interface";


export const getBrandsFromList = (pList: ProductWithPrice[]) => {
  
   let brands = new Set<string>()

  //TODO: Temporalmente los sacamos del JSON. Deria estar conectado con una DB
  let products: ProductWithPrice[] = pList
  
  products.map((product) => {
    if(!brands.has(product.brand)) brands.add(product.brand)
  })
  
  let brandsResp:Brand[] = []

  for (let br of brands.values()) {
    brandsResp.push({
      id: Date.now().toString(),
      name: br
    })
  }
  return brandsResp
  
}