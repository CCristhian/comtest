import RolModelGenerated from "./generated/RolModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await RolModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RolModelGenerated,
  ...customModel
};
