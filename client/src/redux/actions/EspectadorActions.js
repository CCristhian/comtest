import actionsFunction from "./generated/EspectadorActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import EspectadorApi from "../../api/EspectadorApi";
 
 actionsFunction.loadEspectadorList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return EspectadorApi
     .getEspectadorList()
     .then(list => {
       dispatch(actionsFunction.loadEspectadorSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
