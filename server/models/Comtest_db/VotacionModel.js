import VotacionModelGenerated from "./generated/VotacionModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await VotacionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...VotacionModelGenerated,
  ...customModel
};
