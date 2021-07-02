import VotacionApiGenerated from "./generated/VotacionApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class VotacionApi extends VotacionApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Votacion List
  static getVotacionList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/votacions")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default VotacionApi;