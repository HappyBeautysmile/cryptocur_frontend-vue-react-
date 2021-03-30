import * as  Types from "../../types"
  const initialState = {
    walletsData : null,
    selectedWallet :null,
  }
    
const wallets = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_WALLETLIST:
      // console.log(action.data.filter(item => item.use==true));
      // selectedWallet = action.data.filter(item => item.use==true);
      return {
        ...state,
        walletsData: action.data,
        selectedWallet : action.data.filter(item => item.use==true)[0]
      };
 
    default:
      return state
  }
}
export default wallets
