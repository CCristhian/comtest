import SesionModelGenerated from "./generated/SesionModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SesionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SesionModelGenerated,
  ...customModel
};
