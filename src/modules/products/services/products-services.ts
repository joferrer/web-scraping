import { Product, ProductWithPrice } from "../../../interfaces/products.interface";
import { scrapingFarmatodo } from "../../scraping/farmatodo/products";

export const getProducts = async (): Promise<Product[]> => { 
  
  return Promise.resolve([])
} 


export const getFarmatodoProducts = async (): Promise<ProductWithPrice[]> => { 
  const productsFarmatodo = await scrapingFarmatodo()
  return productsFarmatodo
}

