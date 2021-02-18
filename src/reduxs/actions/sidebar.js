import * as Sidebartypes from "../types"

export const setSidebarShadow = (sidebarShadow) => ({
    type: Sidebartypes.SET_SIDEBAR_SHADOW,
    sidebarShadow
});
export const setSidebarFixed = (sidebarFixed) => ({
    type: Sidebartypes.SET_SIDEBAR_FIXED,
    sidebarFixed
});
export const setSidebarStyle = (sidebarStyle) => ({
    type: Sidebartypes.SET_SIDEBAR_STYLE,
    sidebarStyle
});
export const setSidebarFooter = (sidebarFooter) => ({
    type: Sidebartypes.SET_SIDEBAR_FOOTER,
    sidebarFooter
});

export const setSidebarToggle = (sidebarToggle) => ({
    type: Sidebartypes.SET_SIDEBAR_TOGGLE,
    sidebarToggle
});
export const setSidebarUserbox = (sidebarUserbox) => ({
    type: Sidebartypes.SET_SIDEBAR_USERBOX,
    sidebarUserbox
});


export const setSidebarToggleMobile = (sidebarToggleMobile) =>{
    return dispatch =>{
        dispatch({
            type: Sidebartypes.SET_SIDEBAR_TOGGLE_MOBILE,
            sidebarToggleMobile
        })
    }
}

