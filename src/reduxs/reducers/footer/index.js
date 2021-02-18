import * as Footertypes from "../../types"

const initialState = {
    footerFixed: false,
    footerShadow: false,
    footerBgTransparent: true,
  }
  
  const footer = (state = initialState, action) => {
    switch (action.type) {
        case Footertypes.SET_FOOTER_FIXED:
      return {
        ...state,
        footerFixed: action.footerFixed
      };
    case Footertypes.SET_FOOTER_SHADOW:
      return {
        ...state,
        footerShadow: action.footerShadow
      };
    case Footertypes.SET_FOOTER_BG_TRANSPARENT:
      return {
        ...state,
        footerBgTransparent: action.footerBgTransparent
      };
      default:
        return state
    }
  }
  
  export default footer
  