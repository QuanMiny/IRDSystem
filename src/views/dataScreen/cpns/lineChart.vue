<template>
  <!-- 年度使用 -->
  <div class="chart-box">
    <ECharts :option="option" :resize="false" />
  </div>
</template>

<script setup lang="ts">
import ECharts from '@/components/ECharts/index.vue'
import { ECOption } from '@/components/ECharts/config'

interface ChartProp {
  label: string
  value: string[]
}

const gradientColors = [
  'rgba(254, 219, 101,0.1)',
  'rgba(0, 122, 254,0.1)',
  'rgba(255, 75, 122, 0.1)'
]
const annualData = [
  {
    label: new Date().getFullYear() - 2 + '年',
    value: ['184', '90', '120', '0', '30', '100', '80', '40', '20', '510', '350', '180']
  },
  {
    label: new Date().getFullYear() - 1 + '年',
    value: ['118', '509', '366', '162', '380', '123', '321', '158', '352', '474', '154', '22']
  },
  {
    label: new Date().getFullYear() + '年',
    value: ['548', '259', '113', '90', '69', '512', '23', '49', '28', '420', '313', '156']
  }
]

const data = {
  data: annualData,
  unit: annualData.map((val) => val.label),
  columns: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  colors: ['#FFA600', '#007AFE', '#FF4B7A']
}

const option: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    borderWidth: 0,
    padding: 0,
    backgroundColor: 'transparent',
    textStyle: {
      color: '#ebebf0'
    }
  },
  legend: {
    right: '7%',
    top: '3%',
    itemWidth: 15,
    itemHeight: 6,
    align: 'auto',
    icon: 'rect',
    itemGap: 15,
    textStyle: {
      color: '#ebebf0'
    }
  },
  grid: {
    top: '20%',
    left: '14%',
    right: '7%',
    bottom: '15%'
  },
  xAxis: [
    {
      name: '(月份)',
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLabel: {
        color: '#7ec7ff',
        padding: 0,
        fontSize: 12,
        formatter: function (data) {
          return data
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#192a44'
        }
      },
      axisTick: {
        show: false
      },
      data: data.columns
    }
  ],
  yAxis: {
    name: '(人数)',
    nameTextStyle: {
      color: '#D6DFEA',
      fontSize: 12,
      padding: [0, 30, 0, 0]
    },
    minInterval: 1,
    splitNumber: 5,
    splitLine: {
      show: false,
      lineStyle: {
        color: '#192a44'
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#233653'
      }
    },
    axisLabel: {
      show: true,
      color: '#B9D6D6',
      padding: 0
    },
    axisTick: {
      show: false
    }
  },
  series: data.data.map((val: ChartProp, index: number) => {
    return {
      name: val.label,
      type: 'line',
      symbol: 'circle',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        width: 1,
        color: data.colors[index],
        borderColor: data.colors[index]
      },
      itemStyle: {
        color: data.colors[index],
        borderColor: '#646ace',
        borderWidth: 2
      },
      tooltip: {
        show: true
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: data.colors[index]
            },
            {
              offset: 1,
              color: gradientColors[index]
            }
          ],
          global: false
        },
        shadowColor: 'rgba(25,163,223, 0.3)',
        shadowBlur: 20
      },
      data: val.value
    }
  })
}
</script>
<style lang="scss" scoped>
.chart-box {
  height: 280px;
}
</style>
