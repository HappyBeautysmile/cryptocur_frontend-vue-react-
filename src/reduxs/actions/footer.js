import * as footertypes from "../types"

export const setFooterFixed = (footerFixed) => ({
    type:  footertypes.SET_FOOTER_FIXED,
    footerFixed
  });
  export const setFooterShadow = (footerShadow) => ({
    type:  footertypes.SET_FOOTER_SHADOW,
    footerShadow
  });
  export const setFooterBgTransparent = (footerBgTransparent) => ({
    type:  footertypes.SET_FOOTER_BG_TRANSPARENT,
    footerBgTransparent
  });