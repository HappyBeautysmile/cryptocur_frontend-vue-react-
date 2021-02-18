import {SET_CONTENT_BACKGROUND,SET_THEME_CONFIGURATOR_TOGGLE} from "../../types"
const initialState = {
  contentBackground: '',
  themeConfiguratorToggle: false,
}
  
  const maincontent = (state = initialState, action) => {
    switch (action.type) {
      case SET_CONTENT_BACKGROUND:
        return {
          ...state,
          contentBackground: action.contentBackground
        };
      case SET_THEME_CONFIGURATOR_TOGGLE:
        return {
          ...state,
          themeConfiguratorToggle: action.themeConfiguratorToggle
        };
      default:
        return state
    }
  }
  
  export default maincontent
  