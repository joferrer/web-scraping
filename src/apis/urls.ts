
/**
 * @description Enum with the URLs of the APIs. 
 * @enum {string}
 * @todo CRUZ_VEDE url is limited to 100 products, it should be paginated.
 */
export enum URLS_APIs{
  CRUZ_VERDE_lANDING = "https://www.cruzverde.com.co/dermocosmeticos/cuidado-facial/",
  CRUZ_VERDE = "https://api.cruzverde.com.co/product-service/products/search?limit=200&offset=0&sort=&q=&refine[]=cgid=dermo-cuidadofacial&inventoryId=COCV_zona101&inventoryZone=COCV_zona101",
  BELLA_PIEL = "https://www.bellapiel.com.co/_v/segment/graphql/v1?workspace=master&maxAge=short&appsEtag=remove&domain=store&locale=es-CO&__bindingId=6a03d795-6cab-495f-b2b7-1a372a824a61&operationName=productSearchV3&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223e2c473672fc986dc5377d35560f5d5244fbca3698414bd02772c649d67994b6%22%2C%22sender%22%3A%22vtex.store-resources%400.x%22%2C%22provider%22%3A%22vtex.search-graphql%400.x%22%7D%2C%22variables%22%3A%22eyJoaWRlVW5hdmFpbGFibGVJdGVtcyI6ZmFsc2UsInNrdXNGaWx0ZXIiOiJBTEwiLCJzaW11bGF0aW9uQmVoYXZpb3IiOiJkZWZhdWx0IiwiaW5zdGFsbG1lbnRDcml0ZXJpYSI6Ik1BWF9XSVRIT1VUX0lOVEVSRVNUIiwicHJvZHVjdE9yaWdpblZ0ZXgiOmZhbHNlLCJtYXAiOiJjIiwicXVlcnkiOiJmYWNpYWwiLCJvcmRlckJ5IjoiT3JkZXJCeVNjb3JlREVTQyIsImZyb20iOjAsInRvIjoxNSwic2VsZWN0ZWRGYWNldHMiOlt7ImtleSI6ImMiLCJ2YWx1ZSI6ImZhY2lhbCJ9XSwiZmFjZXRzQmVoYXZpb3IiOiJTdGF0aWMiLCJjYXRlZ29yeVRyZWVCZWhhdmlvciI6ImRlZmF1bHQiLCJ3aXRoRmFjZXRzIjpmYWxzZSwiYWR2ZXJ0aXNlbWVudE9wdGlvbnMiOnsic2hvd1Nwb25zb3JlZCI6dHJ1ZSwic3BvbnNvcmVkQ291bnQiOjMsImFkdmVydGlzZW1lbnRQbGFjZW1lbnQiOiJ0b3Bfc2VhcmNoIiwicmVwZWF0U3BvbnNvcmVkUHJvZHVjdHMiOnRydWV9fQ%3D%3D%22%7D",
  FARMATODO = "https://www.farmatodo.com.co/categorias/dermocosmetica/facial"
}