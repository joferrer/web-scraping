
export interface Product { 
  id: number
  brand: string 
  name: string
  img_url?: string
}

export interface ProductWithPrice extends Product { 
  price: string 
}

export interface ProductWithAllPrices extends Product {
  prices: ProductPrice[]
}

type ProductPrice = {
  price: string
  store: string
}