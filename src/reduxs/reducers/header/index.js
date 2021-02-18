import {
  SET_HEADER_FIXED ,
  SET_HEADER_SHADOW ,
  SET_HEADER_BG_TRANSPARENT ,
  SET_HEADER_SEARCH_HOVER ,
  SET_HEADER_DRAWER_TOGGLE
} from "../../types"
const initialState = {
  headerFixed: true,
  headerShadow: true,
  headerBgTransparent: true,
  headerSearchHover: false,
  headerDrawerToggle: false,
}
  
  const header = (state = initialState, action) => {
    switch (action.type) {
      case SET_HEADER_FIXED:
      return {
        ...state,
        headerFixed: action.headerFixed
      };
    case SET_HEADER_SHADOW:
      return {
        ...state,
        headerShadow: action.headerShadow
      };
    case SET_HEADER_BG_TRANSPARENT:
      return {
        ...state,
        headerBgTransparent: action.headerBgTransparent
      };
    case SET_HEADER_SEARCH_HOVER:
      return {
        ...state,
        headerSearchHover: action.headerSearchHover
      };
    case SET_HEADER_DRAWER_TOGGLE:
      return {
        ...state,
        headerDrawerToggle: action.headerDrawerToggle
      };
      default:
        return state
    }
  }
  
  export default header
  