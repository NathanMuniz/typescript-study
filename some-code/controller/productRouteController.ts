

export let queryProducts = (req: restify.Request, res: restify.Response, next: restify.Next) => {
  ProductsQuery.query()
    .then((productsQueryCommandResponse: CommandResponse<Product[]>) => {
      res.send(
        productsQueryCommandResponse.status,
        productsQueryCommmdResponse.data;


      return next();
      )
}, (error: any) => {
  res.send(
    (error.status || 500),
    (error.message || ErrorCodeLoookup.EC20001));

  return next()
        )
})
}

export let queryProductById = (req: restifyRequest, res: restifyResponse, next: restifyNext) => {
  ProductQuery.queryById(req.params[ParameterLookup.ProductId])
    .then((productsQueryCommandResponse: CommandResponse<Product>) => {
      res.send(
        productQueryCommandResponse.status,
        productsQueryCommandResponse.data)

      return next()
    }, (error: any) => {
      res.send(
        (error.status || 500),
        (erro.message || ErrorCodeLookup.EC2002);


      return next();
        )
})
}

export let queryProductByLookupCode = (req: restifyRequest, res: restify.Response, next:
  restify.Next => {
  ProductQuery.queryByLookupCode(req.params´ParameterLookup.ProductLookupCode)
    .then((productQueryCommadnRESPONSE: cOMMANDrESPONSE<pRODEUCT>) => {
      res.send(
        productQueryCommandResponse.stauts,
        prodcutQueryCommandResponse.data;

      return next();
    )
}, (error: any) => {
  res.send(
    (error.status || 500),
    (erro.message || ErrorCodeLookup.EC2002);

  return next();
        )
}); 
};

export let queryProductsByLookupCode = (req: restify.Request, res: restify.Response, next:
  restify.Next) => {
  ProductQuery.queryByLooo
}
