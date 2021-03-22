import * as  Types from "../../../types"
  const initialState = {
    buyselltransactionlistData: null,
    usedWallet : null
  }
    
const buyselltransactions = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_OWNERBUYELLTRANSACTIONSLIST:
        return {
        ...state,
          buyselltransactionlistData: action.data,
          usedWallet : action.usedWallet
        };
    default:
      return state
  }
}

export default buyselltransactions
