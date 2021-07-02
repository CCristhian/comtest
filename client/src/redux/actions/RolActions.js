import actionsFunction from "./generated/RolActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import RolApi from "../../api/RolApi";
 
 actionsFunction.loadRolList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return RolApi
     .getRolList()
     .then(list => {
       dispatch(actionsFunction.loadRolSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
