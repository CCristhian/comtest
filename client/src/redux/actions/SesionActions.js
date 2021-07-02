import actionsFunction from "./generated/SesionActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import SesionApi from "../../api/SesionApi";
 
 actionsFunction.loadSesionList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return SesionApi
     .getSesionList()
     .then(list => {
       dispatch(actionsFunction.loadSesionSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
