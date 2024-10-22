import { Brand } from "../../../interfaces/brands.interface";
import {  ProductWithPrice } from "../../../interfaces/products.interface";
import { getBrandsFromList } from "../helpers/getBrandsFromList";
const Farmatodojson = require( '../../../temp/farmatodoProducts.json')


export const getBrands = ():Promise<Brand[]> => {

  const brandsResp = getBrandsFromList(Farmatodojson)
  return Promise.resolve(brandsResp)

}