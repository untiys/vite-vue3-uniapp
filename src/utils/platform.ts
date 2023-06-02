enum Platform {
  // App
  AppPlus = "APP-PLUS",
  //H5
  H5 = "H5",
  // 微信小程序
  MpWeixin = "MP-WEIXIN",
  /** QQ小程序 */
  MpQq = "MP-QQ",
}

export function currentPlatform(): string {
  let platform: string
  // #ifdef APP-PLUS
  platform = Platform.AppPlus
  // #endif

  // #ifdef H5
  platform = Platform.H5
  // #endif

  // #ifdef MP-WEIXIN
  platform = Platform.MpWeixin
  // #endif

  return platform
}

/** 是否开发环境 */
export const isDevelopment = import.meta.env.MODE === "development"
/** 是否线上环境 */
export const isProduction = import.meta.env.MODE === "production"
