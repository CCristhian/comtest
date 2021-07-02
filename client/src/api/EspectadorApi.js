import EspectadorApiGenerated from "./generated/EspectadorApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class EspectadorApi extends EspectadorApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Espectador List
  static getEspectadorList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/espectadors")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default EspectadorApi;