import {SET_SIDEBAR_SHADOW,SET_SIDEBAR_FIXED,SET_SIDEBAR_USERBOX,SET_SIDEBAR_TOGGLE,
  SET_SIDEBAR_TOGGLE_MOBILE,SET_SIDEBAR_FOOTER,SET_SIDEBAR_STYLE
} from "../../types"
const initialState = {
  sidebarFixed: true,
  sidebarFooter: true,
  sidebarShadow: true,
  sidebarStyle: 'app-sidebar--white',
  sidebarToggleMobile: false,
  sidebarToggle: false,
}
  
  const sidebar = (state = initialState, action) => {
    switch (action.type) {
      case SET_SIDEBAR_SHADOW:
        return {
          ...state,
          sidebarShadow: action.sidebarShadow
        };
      case SET_SIDEBAR_FIXED:
        return {
          ...state,
          sidebarFixed: action.sidebarFixed
        };
      case SET_SIDEBAR_STYLE:
        return {
          ...state,
          sidebarStyle: action.sidebarStyle
        };
      case SET_SIDEBAR_FOOTER:
        return {
          ...state,
          sidebarFooter: action.sidebarFooter
        };
      case SET_SIDEBAR_TOGGLE_MOBILE:
        return {
          ...state,
          sidebarToggleMobile: action.sidebarToggleMobile
        };
      case SET_SIDEBAR_TOGGLE:
        return {
          ...state,
          sidebarToggle: action.sidebarToggle
        };
      case SET_SIDEBAR_USERBOX:
        return {
          ...state,
          sidebarUserbox: action.sidebarUserbox
        };
      default:
        return state
    }
  }
  
  export default sidebar
  