import { currentPlatform, isDevelopment } from "./platform"
import { envMap } from "./env"
// h5环境开启代理
// console.log(currentPlatform(), import.meta.env)
const baseUrl =
  currentPlatform() == "H5" && isDevelopment
    ? "/fmsv2"
    : "http://test.smartdata.net.cn/fmsv2"

export default function baseRequest(
  method: "GET" | "POST" | undefined,
  url: string,
  data?: any
) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      method,
      timeout: 20000,
      header: {
        "content-type":
          method === "GET"
            ? "application/json; charset=utf-8"
            : "application/x-www-form-urlencoded",
      },
      data,
      success: (res: any) => {
        if (res.code == 0) {
          resolve(res.data)
        }
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
