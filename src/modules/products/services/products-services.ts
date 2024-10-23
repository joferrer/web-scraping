import { Product, ProductWithAllPrices, ProductWithPrice } from "../../../interfaces/products.interface";
import { scrapingFarmatodo } from "../../scraping/farmatodo/products";
import { getCruzVerdeProducts as getCruzverdeAPi } from '../../../apis/products-api'
import { getLevenshteinDistance } from "../../../helpers/levenshtainDistance";



let products = {
  farmatodo: [] as ProductWithPrice[],
  cruzverde: [] as ProductWithPrice[]
}

export const getProducts = async (): Promise<ProductWithAllPrices[]> => { 
  
  if (products.cruzverde.length === 0) {
    products = {...products, cruzverde: await getCruzVerdeProducts()}
  }
  if (products.farmatodo.length === 0) {
    products = {...products,farmatodo:  await getFarmatodoProducts()}
  }

  const farmatodoProducts = products.farmatodo
  const cruzverdeProducts = products.cruzverde

  let resp: ProductWithAllPrices[] = []
  let map = new Map<string,ProductWithPrice>()

  cruzverdeProducts.map(p => {
    map.set(p.name.trim(), p)
  })
   

  for (const k of map.keys()) {
  
    if (farmatodoProducts[0].brand.toUpperCase().trim() ===
      map.get(k)?.brand.toUpperCase().trim()) {
      const p1 = k.replace(/\s+/g, '');
      const p2 = farmatodoProducts[0].name.replace(/\s+/g, '');
      const lvdD = getLevenshteinDistance(p1,p2)
    console.log( p1 + ' - '+ p2 + ' - lvd: '+ lvdD)
    }
  }

  return Promise.resolve(resp)
} 


export const getFarmatodoProducts = async (): Promise<ProductWithPrice[]> => { 
  if (products.farmatodo.length === 0) {
    products = {...products, farmatodo: await scrapingFarmatodo()}
  }
  const productsFarmatodo = products.farmatodo
  return productsFarmatodo
}

export const getCruzVerdeProducts = async (): Promise<ProductWithPrice[]> => {
  
  if (products.cruzverde.length === 0) {
    const productsCruzVerdeApi = await getCruzverdeAPi()
   
    if ("error" in productsCruzVerdeApi) {
      console.error(productsCruzVerdeApi.error)
      return []
    }
  const listOfProducts:ProductWithPrice[] = productsCruzVerdeApi?.hits.map((hit) => {
    
    return {
      id: Date.now(),
      brand: hit.brand ?? "",
      name: hit.productName,
      price : String(hit.prices["price-sale-col"] ?? hit.prices["price-list-col"] ?? 0),
      img_url: hit.image.link
    }
  })  
    products = {...products, cruzverde: listOfProducts}
  }  

  return products.cruzverde
}

