export interface BellapielResponse {
  data: Data
}

export interface Data {
  productSearch: ProductSearch
}

export interface ProductSearch {
  products: Product[]
  recordsFiltered: number
  correction: Correction
  breadcrumb: any
  fuzzy: string
  operator: string
  searchState: any
  redirect: any
  __typename: string
}

export interface Product {
  advertisement: any
  cacheId: string
  productId: string
  description: string
  productName: string
  productReference: string
  linkText: string
  brand: string
  brandId: number
  link: string
  categories: string[]
  categoryId: string
  releaseDate: string
  priceRange: PriceRange
  specificationGroups: SpecificationGroup[]
  skuSpecifications: any[]
  productClusters: ProductCluster[]
  clusterHighlights: ClusterHighlight[]
  properties: Property[]
  items: Item[]
  selectedProperties: any
  rule: any
  __typename: string
}

export interface PriceRange {
  sellingPrice: SellingPrice
  listPrice: ListPrice
  __typename: string
}

export interface SellingPrice {
  highPrice: number
  lowPrice: number
  __typename: string
}

export interface ListPrice {
  highPrice: number
  lowPrice: number
  __typename: string
}

export interface SpecificationGroup {
  name: string
  originalName: string
  specifications: Specification[]
  __typename: string
}

export interface Specification {
  name: string
  originalName: string
  values: string[]
  __typename: string
}

export interface ProductCluster {
  id: string
  name: string
  __typename: string
}

export interface ClusterHighlight {
  id: string
  name: string
  __typename: string
}

export interface Property {
  name: string
  values: string[]
  __typename: string
}

export interface Item {
  itemId: string
  name: string
  nameComplete: string
  complementName: string
  ean: string
  variations: any[]
  referenceId: ReferenceId[]
  measurementUnit: string
  unitMultiplier: number
  images: Image[]
  sellers: Seller[]
  __typename: string
}

export interface ReferenceId {
  Key: string
  Value: string
  __typename: string
}

export interface Image {
  cacheId: string
  imageId: string
  imageLabel: string
  imageTag: string
  imageUrl: string
  imageText: string
  __typename: string
}

export interface Seller {
  sellerId: string
  sellerName: string
  sellerDefault: boolean
  commertialOffer: CommertialOffer
  __typename: string
}

export interface CommertialOffer {
  discountHighlights: any[]
  teasers: any[]
  Price: number
  ListPrice: number
  Tax: number
  taxPercentage: number
  spotPrice: number
  PriceWithoutDiscount: number
  RewardValue: number
  PriceValidUntil: string
  AvailableQuantity: number
  Installments: Installment[]
  __typename: string
}

export interface Installment {
  Value: number
  InterestRate: number
  TotalValuePlusInterestRate: number
  NumberOfInstallments: number
  Name: string
  PaymentSystemName: string
  __typename: string
}

export interface Correction {
  misspelled: boolean
  __typename: string
}
