<template>
  <div :id="echarts.id" class="myChart"></div>
</template>

<script>
export default {
  props: ['echarts'],
  data () {
    return {
      data: {
        line: {
          xAxis: {
            type: 'category',
            data: this.echarts.option.title
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.echarts.option.data,
            type: 'line'
          }]
        },
        bar: {
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
        },
        pie: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: this.echarts.option.title
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.echarts.option.data
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.colours(this.echarts.type)
    })
  },
  methods: {
    colours (types) {
      let option
      if (types === 'line') {
        option = this.data.line
      }
      if (types === 'bar') {
        option = this.data.bar
      }
      if (types === 'pie') {
        option = this.data.pie
      }
      if (types === 'scatter') {
        option = this.data.scatter
      }
      if (types === 'map') {
        option = this.data.map
      }
      if (types === 'candlestick') {
        option = this.data.candlestick
      }
      if (types === 'radar') {
        option = this.data.radar
      }
      if (types === 'boxplot') {
        option = this.data.boxplot
      }
      if (types === 'heatmap') {
        option = this.data.heatmap
      }
      if (types === 'graph') {
        option = this.data.graph
      }
      if (types === 'tree') {
        option = this.data.tree
      }
      if (types === 'treemap') {
        option = this.data.treemap
      }
      if (types === 'sunburst') {
        option = this.data.sunburst
      }
      if (types === 'parallel') {
        option = this.data.parallel
      }
      if (types === 'sankey') {
        option = this.data.sankey
      }
      if (types === 'funnel') {
        option = this.data.funnel
      }
      if (types === 'gauge') {
        option = this.data.gauge
      }
      if (types === 'pictorialbar') {
        option = this.data.pictorialbar
      }
      if (types === 'themeriver') {
        option = this.data.themeriver
      }
      if (types === 'custom') {
        option = this.data.custom
      }
      if (types === 'dataset') {
        option = this.data.dataset
      }
      if (types === 'scattergl') {
        option = this.data.scattergl
      }
      if (types === 'flowgl') {
        option = this.data.flowgl
      }
      if (types === 'graphgl') {
        option = this.data.graphgl
      }
      this.$echarts.init(document.getElementById(this.echarts.id)).setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.myChart{
  width: 100%;
  height: 100%;
}
</style>
