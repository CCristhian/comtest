import VotoApiGenerated from "./generated/VotoApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class VotoApi extends VotoApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Voto List
  static getVotoList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/votos")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default VotoApi;