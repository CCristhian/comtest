// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_comtest_db";
import UserModel from "../models/Comtest_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.comtest_db.host +
        ":" +
        properties.comtest_db.port +
        "//" +
        properties.comtest_db.user +
        "@" +
        properties.comtest_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.comtest_db.name,
      properties.comtest_db.user,
      properties.comtest_db.password,
      {
        host: properties.comtest_db.host,
        dialect: properties.comtest_db.dialect,
        port: properties.comtest_db.port,
        logging: false
      }
    );
    this.dbConnection_comtest_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_comtest_db;
  }
}

export default new Database();
