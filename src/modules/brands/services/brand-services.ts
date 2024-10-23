import { Brand } from "../../../interfaces/brands.interface";
//import {  ProductWithPrice } from "../../../interfaces/products.interface";
import { getBrandsFromList } from "../helpers/getBrandsFromList";
const Farmatodojson = require( '../../../temp/farmatodoProducts.json')


export const getBrands = ():Promise<Brand[]> => {

  //TODO: Change this for a db conected method. 
  const brandsResp = getBrandsFromList(Farmatodojson)

  return Promise.resolve(brandsResp)

}