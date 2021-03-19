import * as  Types from "../../types"
  const initialState = {
    coinsData : null
  }
    
const coins = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALLCOINSLIST:
        return {
        ...state,
        coinsData: action.data
        };
    default:
      return state
  }
}
export default coins
