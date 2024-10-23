import { BellapielResponse } from "../interfaces/bellapiel.interface";
import { CruzverdeResponse, CruzverdeResponseError } from "../interfaces/cruzverde.interface";
import { URLS_APIs } from "./urls";
import { chromium } from 'playwright'

const getProducts = async (url: URLS_APIs,cookie ="") => { 

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cookie':cookie
    }
  });

  return response.json(); 
}

export const getCruzVerdeProducts = async (): Promise<CruzverdeResponse | CruzverdeResponseError> => { 
    const browser = await chromium.launch({
      headless: false,
    })
 const page = await browser.newPage()

    await page.goto(
      URLS_APIs.CRUZ_VERDE_lANDING,
  )
  const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

const getCruzVerdeProductsWithDelay = async () => {
  await delay(5000); // Espera 10 segundo

  
  let cookie = "";
  const cookies = await browser.contexts()[0].cookies()
   cookies.map(ck => {
    cookie += ck.name + "=" + ck.value + ";"
    
  })
    const resp = await getProducts(URLS_APIs.CRUZ_VERDE,cookie);
  browser.close();
  return resp;
};

// Llamada a la función
const products = await getCruzVerdeProductsWithDelay();
  
  return products;
  
}

const getBellaPielProducts = async ():Promise<BellapielResponse> => {
  return await getProducts(URLS_APIs.BELLA_PIEL);
}

