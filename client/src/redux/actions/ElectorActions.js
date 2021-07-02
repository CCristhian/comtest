import actionsFunction from "./generated/ElectorActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ElectorApi from "../../api/ElectorApi";
 
 actionsFunction.loadElectorList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ElectorApi
     .getElectorList()
     .then(list => {
       dispatch(actionsFunction.loadElectorSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
