import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
// 配置ref，reactive等的自动导入，不需在页面里配置
import AutoImport from "unplugin-auto-import/vite" //引入
import Components from "unplugin-vue-components/vite"
const path = require("path")

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      dts: "src/auto-import.d.ts",
      imports: ["vue", "vue-router"],
    }),
    Components({
      dirs: ["src/components"],
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3266,
    proxy: {
      "/fmsv2": {
        target: "http://test.smartdata.net.cn/",
        // rewrite: (path) => path.replace("^/api/", ""),
      },
    },
  },
})
