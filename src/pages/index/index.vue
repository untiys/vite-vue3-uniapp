<template>
  <view class="content">
    <text class="title">{{ title }}</text>
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
      <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
      <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
      <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
const title = ref<string>("首页")

let scrollTop = ref(0)

setTimeout(() => {
  scrollTop.value = 200
}, 3000)
</script>

<style>
.scroll-Y {
  height: 300rpx;
}
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}
.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: 100%;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
#demo1 {
  background-color: red;
}
#demo2 {
  background-color: green;
}
#demo3 {
  background-color: yellow;
}
</style>
