import * as  Types from "../../types"
  const initialState = {
    walletsData : null
  }
    
const wallets = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_WALLETLIST:
        return {
        ...state,
        walletsData: action.data
        };
    default:
      return state
  }
}
export default wallets
