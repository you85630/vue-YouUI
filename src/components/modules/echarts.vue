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
            formatter: '{b}: {c} ({d}%)'
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
        },
        radar: {
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: this.echarts.option.title
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: this.echarts.option.data
          }]
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
      if (types === 'radar') {
        option = this.data.radar
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
