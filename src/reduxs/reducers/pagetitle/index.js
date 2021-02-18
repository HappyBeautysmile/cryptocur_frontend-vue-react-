import {SET_PAGE_TITLE_STYLE,SET_PAGE_TITLE_BACKGROUND,SET_PAGE_TITLE_SHADOW,SET_PAGE_TITLE_ICON_BOX,SET_PAGE_TITLE_DESCRIPTION} from "../../types"
const initialState = {
  pageTitleStyle: '',
  pageTitleBackground: '',
  pageTitleShadow: false,
  pageTitleIconBox: true,
  pageTitleDescription: true
}
  
  const pagetitle = (state = initialState, action) => {
    switch (action.type) {
      case SET_PAGE_TITLE_STYLE:
      return {
        ...state,
        pageTitleStyle: action.pageTitleStyle
      };
    case SET_PAGE_TITLE_BACKGROUND:
      return {
        ...state,
        pageTitleBackground: action.pageTitleBackground
      };
    case SET_PAGE_TITLE_SHADOW:
      return {
        ...state,
        pageTitleShadow: action.pageTitleShadow
      };
    case SET_PAGE_TITLE_ICON_BOX:
      return {
        ...state,
        pageTitleIconBox: action.pageTitleIconBox
      };
    case SET_PAGE_TITLE_DESCRIPTION:
      return {
        ...state,
        pageTitleDescription: action.pageTitleDescription
      };
      default:
        return state
    }
  }
  
  export default pagetitle
  