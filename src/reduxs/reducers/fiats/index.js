import * as  Types from "../../types"
  const initialState = {
    fiatsData : null
  }
    
const fiats = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALLFIAtSLIST:
        return {
        ...state,
        fiatsData: action.data
        };
    default:
      return state
  }
}
export default fiats
