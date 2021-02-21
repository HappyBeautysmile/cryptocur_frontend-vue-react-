import * as  Types from "../../types"
  const initialState = {
    usersData : null
  }
    
const users = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERLIST:
    return {
      ...state,
      usersData: action.data
    };
  
    default:
      return state
  }
}
export default users
