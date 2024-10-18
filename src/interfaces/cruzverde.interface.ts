
export interface CruzverdeResponse {
  v: string
  type: string
  count: number
  hits: Hit[]
  next: string
  query: string
  refinements: Refinement[]
  searchPhraseSuggestions: SearchPhraseSuggestions
  selectedRefinements: SelectedRefinements
  selectedSortingOption: string
  sortingOptions: SortingOption[]
  start: number
  total: number
  redirectTo: string
}

export interface Hit {
  type: string
  hitType: string
  image: Image
  link: string
  productId: string
  productName: string
  productType: ProductType
  representedProduct: RepresentedProduct
  stock: number
  prices: Prices
  appliedPromotions: AppliedPromotions
  storePickup: boolean
  homeDelivery: boolean
  promotions: Promotion[]
  expressDelivery?: string
  brand?: string
  pum: string
  ribbons: string[]
  prescriptionModel?: string
  prescription?: string
}

export interface Image {
  type: string
  alt: string
  disBaseLink: string
  link: string
  title: string
}

export interface ProductType {
  type: string
  item: boolean
}

export interface RepresentedProduct {
  type: string
  id: string
  link: string
}

export interface Prices {
  "price-list-col": number
  "price-sale-col"?: number
  "price-club-col"?: number
}

export interface AppliedPromotions {}

export interface Promotion {
  archived: boolean
  assignmentInformation: AssignmentInformation
  creationDate: string
  disableGloballyExcluded: boolean
  enabled: boolean
  exclusivity: string
  id: string
  lastModified: string
  name: string
  promotionClass: string
  hasApproachingShippingDiscounts: boolean
  isClubPromotion: boolean
  isPaymentPromotion: boolean
  promotionPar: boolean
  promotionClassCode: string
  promotionClassText: string
  promotionId: string
}

export interface AssignmentInformation {
  active: boolean
  activeCampaignAssignments: ActiveCampaignAssignment[]
  campaignId: string
  enabled: boolean
  endDate: string
  schedule: Schedule2
  scheduleType: string
  startDate: string
}

export interface ActiveCampaignAssignment {
  campaignId: string
  creationDate: string
  description: string
  enabled: boolean
  lastModified: string
  promotionId: string
  schedule: Schedule
}

export interface Schedule {}

export interface Schedule2 {}

export interface Refinement {
  type: string
  attributeId: string
  label: string
  values?: Value[]
}

export interface Value {
  type: string
  hitCount: number
  label: string
  value: string
}

export interface SearchPhraseSuggestions {
  type: string
}

export interface SelectedRefinements {
  cgid: string
}

export interface SortingOption {
  type: string
  id: string
  label: string
}
