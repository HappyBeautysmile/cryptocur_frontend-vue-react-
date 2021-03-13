import * as  Types from "../../types"
  const initialState = {
    bankAccount : null
  }
    
const settings = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_BANKACCOUNT:
        return {
        ...state,
        bankAccount: action.data
        };
    default:
      return state
  }
}
export default settings
