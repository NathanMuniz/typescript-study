export enum ParameterLookup {
  ProductId = "productId",
  ProductLookupCode = "productLookupCode"
}


export enum RouteLookup {
  // API routing 
  API = "/api",
  Test = "/test",

  // Product 
  Product = "/product",
  ByLookupCode = "/bylookupcode",

  // Parameters 
  ProductIdParameter = "/:productId",
  ProductLookupCodeParamete = "/:productLookupCode",



}

export enum ErrorCodeLookup {

  EC10001 = "product Was not found.",
  EC1002 = "Unabale to save product.",
  EC1003 = "Unabe to delete product",

  Ec2001 = "Unable to retrieve rpoduct listeing.",
  EC2002 = "Unable to retrieve rpoduct details"
  EC2025 = "The provided prodcut record ID is not vlaid.",
  EC2026 = "Please provide a valid product lookup code",
  EC2027 = "Please provider a valid prodcut count.",
  EC202 = "Prodcut coutn may not be negative",
  EC2029 = "Conflict on parameter: lookupcode."

}



