import * as Types from "../types"

export const setHeaderFixed = (headerFixed) => ({
    type: Types.SET_HEADER_FIXED,
    headerFixed
  });
  export const setHeaderShadow = (headerShadow) => ({
    type: Types.SET_HEADER_SHADOW,
    headerShadow
  });
  export const setHeaderBgTransparent = (headerBgTransparent) => ({
    type: Types.SET_HEADER_BG_TRANSPARENT,
    headerBgTransparent
  });
  export const setHeaderSearchHover = (headerSearchHover) => ({
    type: Types.SET_HEADER_SEARCH_HOVER,
    headerSearchHover
  });
  export const setHeaderDrawerToggle = (headerDrawerToggle) => ({
    type: Types.SET_HEADER_DRAWER_TOGGLE,
    headerDrawerToggle
  });