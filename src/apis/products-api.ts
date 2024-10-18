import { BellapielResponse } from "../interfaces/bellapiel.interface";
import { CruzverdeResponse } from "../interfaces/cruzverde.interface";
import { URLS_APIs } from "./urls";


const getProducts = async (url: URLS_APIs) => { 

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return response.json(); 
}

const getCruzVerdeProducts = async ():Promise<CruzverdeResponse> => { 
  return getProducts(URLS_APIs.CRUZ_VERDE);
}

const getBellaPielProducts = async ():Promise<BellapielResponse> => {
  return getProducts(URLS_APIs.BELLA_PIEL);
}

module.exports = {
  getCruzVerdeProducts,
  getBellaPielProducts
}