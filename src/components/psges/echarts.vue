<template>
  <div class="echarts-box">
    <my-echarts :echarts='option'></my-echarts>
  </div>
</template>

<script>
import myEcharts from 'components/modules/echarts'
export default {
  components: {
    myEcharts
  },
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts-box{
  width: 100%;
  height: 300px;
}
</style>
