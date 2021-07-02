import actionsFunction from "./generated/VotacionActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import VotacionApi from "../../api/VotacionApi";
 
 actionsFunction.loadVotacionList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return VotacionApi
     .getVotacionList()
     .then(list => {
       dispatch(actionsFunction.loadVotacionSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
