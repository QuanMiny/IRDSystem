<template>
  <div class="dataScreen-container">
    <div class="dataScreen-content" ref="dataScreenRef">
      <div class="dataScreen-header">
        <Decoration8 class="deco-lf" />
        <Decoration5 class="deco-ct" />
        <Decoration8 :reverse="true" class="deco-rg" />
        <div class="header-text">数据可视化面板</div>
      </div>
      <div class="dataScreen-main">
        <div class="dataScreen-lf">
          <BorderBox1 class="box">
            <div class="box-title">水型图</div>
            <div class="chart">
              <WaterChart />
            </div>
          </BorderBox1>
          <BorderBox1 class="box"> <div class="box-title">box1</div> </BorderBox1>
          <BorderBox1 class="box"> <div class="box-title">box1</div> </BorderBox1>
        </div>
        <div class="dataScreen-ct">
          <div class="main"></div>
          <BorderBox1 class="box"> <div class="box-title">box2</div> </BorderBox1>
        </div>
        <div class="dataScreen-rg">
          <BorderBox1 class="box">
            <div class="box-title">折线图</div>
            <div class="chart">
              <LineChart />
            </div>
          </BorderBox1>
          <BorderBox1 class="box"> <div class="box-title">box3</div> </BorderBox1>
          <BorderBox1 class="box"> <div class="box-title">box3</div> </BorderBox1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Decoration8, Decoration5, BorderBox1 } from '@dataview/datav-vue3'
import { onMounted, onUnmounted, ref } from 'vue'
import WaterChart from './cpns/waterChart.vue'
import LineChart from './cpns/lineChart.vue'

const dataScreenRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
    dataScreenRef.value.style.width = '1920px'
    dataScreenRef.value.style.height = '1080px'
  }
  window.addEventListener('resize', resize)
})

// 设置响应式
const resize = () => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  }
}

// 根据浏览器大小缩放比例
const getScale = (width = 1920, height = 1080) => {
  let ww = window.innerWidth / width
  let wh = window.innerHeight / height
  return ww < wh ? ww : wh
}

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
