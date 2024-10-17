import express from 'express'
import { chromium } from 'playwright'

const app = express()

app.use(express.json())

const PORT = 3000

export type Product = (Product2 | null)[]

export interface Product2 {
  brand: string
  name: string
  price: string
}


const scrapingFarmatodo = async () => {
  const URL_FARMATODO =
    'https://www.farmatodo.com.co/categorias/dermocosmetica/facial'

  let products:Product[] = []
  
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
    //console.log('page', await page.innerHTML('.card-ftd__card-unique'))

    await page.waitForSelector('a > div')

    const locator = page.locator('a > div')
    /* console.log(
      await locator.evaluateAll(result =>
        result.map(product => product.innerHTML),
      ),
    ) */
    const producstScrapping =  await locator.evaluateAll(result =>
      result.map((product, index) => {
        const brand = product.querySelector('.text-brand')?.innerHTML.trim()
        const name = product.querySelector('.text-title')?.innerHTML.trim()

        const price =
          result[index + 1]?.querySelector('.price__text-price')?.innerHTML

        if (!brand || !name || !price) return null
        return { brand, name, price }
      }),
     )
     products = products.concat(producstScrapping)
    //console.log('products', products)
  }
    browser.close()

  const resp = products.filter(product => product !== null) 

  return resp
}

app.get('/farmatodo', async (_, res) => {

  const products = await scrapingFarmatodo()

  console.log(products)
  res.json(products ?? [])
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

/* import { chromium } from 'playwright'

const browser = await chromium.launch({
  headless:false
})

const page = await browser.newPage()


await page.goto('https://www.farmatodo.com.co/categorias/dermocosmetica/facial?pag=2') */
