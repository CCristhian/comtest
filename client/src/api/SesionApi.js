import SesionApiGenerated from "./generated/SesionApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SesionApi extends SesionApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Sesion List
  static getSesionList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/sesions")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SesionApi;