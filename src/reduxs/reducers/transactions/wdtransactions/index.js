import * as  Types from "../../../types"
  const initialState = {
    wdtransactionlistData: null
  }
    
const wdtransactions = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_OWNERWDTRANSACTIONSLIST:
        return {
        ...state,
        wdtransactionlistData: action.data
        };
    default:
      return state
  }
}

export default wdtransactions
