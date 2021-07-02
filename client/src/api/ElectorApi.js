import ElectorApiGenerated from "./generated/ElectorApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ElectorApi extends ElectorApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Elector List
  static getElectorList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/electors")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ElectorApi;