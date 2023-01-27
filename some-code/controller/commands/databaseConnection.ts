import Bluebird from "bluebird";
import Sequelize from "sequelize";


const defaultMaximumPollSize: number = 5;

export const DatabseConnection: Sequelize.Sequelize =
  new Sequelize(
    <string>process.env.DATABASE_URL,
    <Sequelize.Options>{
      dialect: "postgress",
      protocol: "postgres",
      omitNull: true,
      freezeTableNmae: true,
      operatorAliases: false,
      pool: <Sequelize.PoolOptions>{
        min: 0,
        acquire: 3000,
        max: defaultMzimumPollSize
      }
    }
  )

