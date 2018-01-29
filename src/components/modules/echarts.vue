<template>
  <div :id="echarts.name" class="myChart"></div>
</template>

<script>
export default {
  props: ['echarts'],
  data () {
    return {
      data: {
        name: this.echarts.name,
        option: {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.echarts.option.title,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: this.echarts.option.data
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.$echarts.init(document.getElementById(this.data.name)).setOption(this.data.option)
  }
}
</script>

<style lang="scss" scoped>
.myChart{
  width: 100%;
  height: 100%;
}
</style>
