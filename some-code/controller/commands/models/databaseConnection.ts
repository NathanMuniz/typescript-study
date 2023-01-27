import Bluebird from "bluebird";
import Sequelize from "sequelize";

const defaultMaximumPollSize: number = 5;

export const DatabaseConnection: Sequelize.Sequelize = new Sequelize(
  <string>process.env.DATABASE_URL,
  <Sequelize.Options>{
    dialect: "postegres",
    protocol: "postgres",
    omitNull: true,
    freezeTableNmae: true,
    operatorAliases: false,
    pool: <Sequelize.PoolOptions>{
      min: 0,
      acquire: 30000,
      max: defaultMaximumPollsize
    }
  });

export let startTransactin = (): Bluebird<Sequelize.Transaction> => {
  return DatabaseConnection.transaction();
}
