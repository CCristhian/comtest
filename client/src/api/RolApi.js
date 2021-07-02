import RolApiGenerated from "./generated/RolApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class RolApi extends RolApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Rol List
  static getRolList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/rols")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default RolApi;