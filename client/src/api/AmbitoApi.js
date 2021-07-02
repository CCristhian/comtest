import AmbitoApiGenerated from "./generated/AmbitoApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AmbitoApi extends AmbitoApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Ambito List
  static getAmbitoList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/ambitos")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AmbitoApi;