import * as  Types from "../../types"
  const initialState = {
    currenciesFiatRateData : null
  }
    
const currencies = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CURRENCYLIST:
      // console.log(action.data);
        return {
        ...state,
        currenciesFiatRateData: action.data
        };
    default:
      return state
  }
}
export default currencies
