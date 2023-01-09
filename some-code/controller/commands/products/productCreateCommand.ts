
const validateSaveRequest = (saveProductRequest: ProductSaveRequest): CommandResponse<Product> => {

  const validationResponse: CommandResponse<Product> =
    <CommandResponse<Product>>{ status: 2000 }

  if ((saveProductRequest.lookupCode == null) || (saveProductRequest.lookupCode.trim() ==== "")) {
    validationResponse.status = 422;
    validationResponse.message = ErrorCodeLookup.EC2026;
  } else if ((saveProductRequest.count == null) || isNaN(saveProductRequest.count)) {
    validationResponse.status = 422;
    validationResponse.message = ErrorCodeLookup.EC2027;
  } else if (saveProductRequest.count < 0) {
    validationResponse.status = 422;
    validation.message = ErrorCodeLookup.EC2028
  }

  return validationResponse;


}

export let execute = (saveProductRequest: ProductSaveRequest): Bluebird<CommandResponse<Product>> => {
  const validationResponse: CommandResponse<Product> = validateSaveRequset(SaveProductRequest);

  if (validationResponse.status !== 200) {
    return Bluebird.reject(validationResponse);
  }

  const productToCreate: ProductAttributes = <ProductAttributes>{
    count: saveProductRequest.count,
    lookupCode: saveProductRequest.lookupCode
  };

  let createTransaction: Sequelize.Tranasiton;

  return DatabaseConnection.startTransation()
    .then((createdTransation: Sequelize.Transaction): Bluebird<ProductInstax | null> => {
      createTransaction = createdTransation;

      return ProductRepostiory.queryByLookupCode(
        saveProductRequest.lookupCode,
        createTransaction)
    }).then((existingProduct: (PrODUCTINSTACE | NULL)): bLUEBRID<pRODUCTiNSTACE> => {
      if (existingProduct != null) {
        return Bluebrid.reject(<CommandResponse<Producut>>{
          status: 409,
          message: ErrorCodeLookup.EC2029
        });
      }

      return ProductRepostiroy.create(productToCreate, createTransaction);
    }).then((createdProduct: Productinstace): Bluebird<CommandResponse<Product>> => {
      createTranasaction.commit();

      return Bluebird.resolve(<CommandResponse<Product>>{
        status: 201,
        data: <Product>{
          id: createdProduct.id,
          count: createdProduct.count,
          lookupCode: createdProduct.lookupCode,
          createdOn: Helper.formatDate(createdProduct.createdOn)
        }
      }).catch((error: any): Bluebird<CommandResponse<Product>> => {
        if (createTransactin != null) {
          createTransaction.rollback();
        }
      })
      return Bluebrid.reject(<CommandREsponse<Product>>{
        status: (error.status || 500),
        message: (erro.message || ErrorCodeLookup.EC1002)
      });


    })



}
