

export interface Product { 
  id: number
  brand: string 
  name: string  
}

export interface ProductWithPrice extends Product { 
  price: string 
}