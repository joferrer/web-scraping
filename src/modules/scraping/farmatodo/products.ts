import { URLS_APIs } from "../../../apis/urls"
import { ProductWithPrice } from "../../../interfaces/products.interface"
import { chromium } from 'playwright'


export const scrapingFarmatodo = async () => {
  const URL_FARMATODO = URLS_APIs.FARMATODO

  let products:ProductWithPrice[] = []
  
    const browser = await chromium.launch({
      headless: false,
    })
  for (let i = 0; i <= 2; i++) {
    const url_page = i !== 0 ? `${URL_FARMATODO}?pag=${i}` : URL_FARMATODO
    console.log('url_page', url_page)
    const page = await browser.newPage()

    await page.goto(
      url_page,
    )

    await page.waitForSelector('a > div')

    const locator = page.locator('a > div')
    /* console.log(
      await locator.evaluateAll(result =>
        result.map(product => product.innerHTML),
      ),
    ) */
    let productsScrapping =  await locator.evaluateAll(result =>
      result.map((product, index) => {
        const brand = product.querySelector('.text-brand')?.innerHTML.trim()
        const name = product.querySelector('.text-title')?.innerHTML.trim()

        const price =
          result[index + 1]?.querySelector('.price__text-price')?.innerHTML

        if (!brand || !name || !price) return null
        
        return { brand, name, price,id : Date.now() }
      }),
    )
    //Es increible, pero es necesario declarar otra variable porque de otra forma Ts se queja de que hay nulls, incluso cuando se filtran.
     const iterProductsList  = productsScrapping.filter((product) => product !== null) 
     products = products.concat(iterProductsList)
  
  }
    browser.close()


  return products
}