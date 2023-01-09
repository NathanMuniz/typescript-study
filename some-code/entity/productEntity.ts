
const modelname: string = "Product"

export interface ProductAttributes {
  id?: string;
  count: number;
  createdOn?: Date;
  lookupCode: string
}

export interface ProuctInstace extends Sequelize.Intace<ProductAttributes> {
  id: string;
  count: number;
  createdOn: Date;
  lookupCode: string
}


export let ProductEntity: Sequelize.Model<ProductInstace, ProductAttributes> =
  DatabaseConnection.define<ProductInstace, ProductAttributes>(
    modelName,
    <Sequelize.DefinModelAttributes<ProductAttributes>>{
      id: <Sequelize.DefineAttributesColumnOptions>{
        field: ProductFieldName.Id,
        type: Sequelize.UUID,
        autoIncremtn: true,
        primaryKey: true
      },
      looupCode: <Sequelize.Defin
  }
  )
