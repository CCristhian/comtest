import actionsFunction from "./generated/VotoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import VotoApi from "../../api/VotoApi";
 
 actionsFunction.loadVotoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return VotoApi
     .getVotoList()
     .then(list => {
       dispatch(actionsFunction.loadVotoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
