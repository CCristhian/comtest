import actionsFunction from "./generated/AmbitoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AmbitoApi from "../../api/AmbitoApi";
 
 actionsFunction.loadAmbitoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AmbitoApi
     .getAmbitoList()
     .then(list => {
       dispatch(actionsFunction.loadAmbitoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
