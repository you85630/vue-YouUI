<template>
  <div class="echarts-box">
    <div v-for="li in list" :key="li.index">
      <my-echarts :echarts='li.option'></my-echarts>
    </div>
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
      list: [
        {
          option: {
            name: 'name',
            option: {
              title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          }
        }, {
          option: {
            name: 'name2',
            option: {
              title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts-box{
  div{
    width: 100%;
    height: 300px;
  }
}
</style>
