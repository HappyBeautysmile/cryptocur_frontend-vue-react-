import React from "react"
import {
    LeftSidebar,
    MinimalLayout,
    PresentationLayout
  } from '../layout-blueprints';
const layouts = {
    leftside: LeftSidebar,
    minimal: MinimalLayout,
    present: PresentationLayout,
}

const ContextLayout = React.createContext()

class Layout extends React.Component {
  state = {
    activeLayout: "",
    lastLayout: null,
  }


  render() {
    const { children } = this.props
    return (
      <ContextLayout.Provider
      
        value={{
          state: this.state,
          LeftSidebar: layouts["leftside"],
          MinimalLayout: layouts["minimal"],
          PresentationLayout: layouts["present"],
          switchLayout: layout => {
            this.setState({ activeLayout: layout })
          },
        //   switchDir: dir => { 
        //     this.setState({ direction: dir })
        //   }
        }}
      >
        {children}
        
      </ContextLayout.Provider>
    )
  }
}

export  { Layout, ContextLayout }