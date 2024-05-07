<template>
  <div class="chart-box">
    <ECharts :option="option" />
  </div>
</template>

<script setup lang="ts" name="waterChart">
import { ECOption } from '@/components/ECharts/config'
import ECharts from '@/components/ECharts/index.vue'

const option = {
  series: [
    {
      type: 'liquidFill',
      radius: '70%',
      data: [0.4, 0.5],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#35FAB6' },
            { offset: 1, color: 'rgba(40, 209, 247,0.3)' }
          ],
          global: false
        }
      },
      outline: {
        borderDistance: 10,
        itemStyle: {
          borderWidth: 2,
          borderColor: '#31d8d5',
          shadowBlur: 20,
          shadowColor: '#50c1a7'
        }
      },
      label: {
        color: '#35FAB6',
        fontSize: 28
      },
      backgroundStyle: {
        borderWidth: 1,
        color: {
          type: 'radial',
          colorStops: [
            { offset: 0, color: 'transparent' },
            { offset: 0.8, color: 'transparent' },
            { offset: 1, color: '#228E7D' }
          ],
          global: false
        }
      }
    }
  ]
} as ECOption
</script>

<style scoped lang="scss">
.chart-box {
  height: 280px;
}
</style>
