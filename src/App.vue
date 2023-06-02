<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app"
onLaunch(() => {
  console.log("App Launch")
})
onShow(() => {
  console.log("App Show")
})
onHide(() => {
  console.log("App Hide")
})
</script>
<style lang="scss" scoped>
.app {
  color: $uni-color-primary;
  .sss {
    color: #333;
    background-image: url("@/static/logo.png");
  }
}
</style>
