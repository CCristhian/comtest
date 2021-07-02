import ElectorModelGenerated from "./generated/ElectorModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ElectorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ElectorModelGenerated,
  ...customModel
};
