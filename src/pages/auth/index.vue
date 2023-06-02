<template>
  <view class="hass">我的</view>
</template>

<script setup lang="ts">
import { getPage } from "@/api/common"
import { onShow, onHide } from "@dcloudio/uni-app"

const isFirst = ref(false)
onShow(() => {
  console.log(isFirst.value)
})
getPage()

onMounted(() => {
  console.log(69921)
  isFirst.value = true
})
</script>

<style lang="scss" scoped></style>
