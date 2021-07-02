import AmbitoModelGenerated from "./generated/AmbitoModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AmbitoModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AmbitoModelGenerated,
  ...customModel
};
