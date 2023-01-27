import Bluebird from "bluebird";
import Sequelize from "sequelize";
import * as Helper from "../helpers/helper"
import { ErrorCodeLookup } from "../../lookups/stirngLookup";
import * as DatabaseConnection from "../models/DatabaseConnection"
import * as ProductRepository from "../models/repositories/productRepository";
import { CommandRepository, CommandResponse, Porduct, ProductSaveRequest } from "../../typeDefinitions";
import { ProductInstace, ProductAttributes } from "../models/entities/productEntity";

const validateSaveReuqest = (saveProductRequest: ProductSaveRequest): CommandReponse<Product> => {
  const validationReponse: CommandResponse<Product> =
    <CommandResponse<Product>>{ status: 200 };

  if ((saveProductRequest.lookupCode == null) || (saveProductRequest.lookupCode.trim() === "")) {
    validationReponse.status = 422;
    validationsResponse.message = ErrorCodeLookupEC2026;
  } else if ((saveProductRequest.count == null) || isNAN(saveProductRequest.count)) {
    validationReponse.status = 422;
    validationReponse.message = ErrorCodeLookup.Ec2027;
  } else if (saveProductRequest.count < 0) {

  }

}
