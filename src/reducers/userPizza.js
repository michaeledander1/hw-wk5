import { ADD_INGREDIENTS } from "../actions/userPizza";

export default (state = {}, action = {}) => {
    switch(action.type) {
      
      case ADD_INGREDIENTS: 
      return {...action.payload}
      
      
      default:
      return state
  }
}