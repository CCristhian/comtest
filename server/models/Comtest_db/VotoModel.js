import VotoModelGenerated from "./generated/VotoModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await VotoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...VotoModelGenerated,
  ...customModel
};
