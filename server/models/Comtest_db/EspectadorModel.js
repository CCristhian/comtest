import EspectadorModelGenerated from "./generated/EspectadorModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await EspectadorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EspectadorModelGenerated,
  ...customModel
};
