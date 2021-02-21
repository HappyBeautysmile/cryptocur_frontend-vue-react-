import {
    PROFILE_USER ,
  } from "../../types"
  const initialState = {
    user : null
  }
    
    const auth = (state = initialState, action) => {
      switch (action.type) {
        case PROFILE_USER:
        return {
          ...state,
          user: action.data
        };
     
        default:
          return state
      }
    }
    export default auth
    