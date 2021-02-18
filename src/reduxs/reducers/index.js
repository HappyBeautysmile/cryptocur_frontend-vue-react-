import { combineReducers } from "redux"
import footer from "./footer"
import header from "./header"
import pagetitle from "./pagetitle"
import sidebar from "./sidebar"
import maincontent from "./maincontent"

const rootReducer = combineReducers({
  footer : footer,
  header  :header,
  pagetitle : pagetitle,
  sidebar : sidebar,
  maincontent : maincontent
})

export default rootReducer
