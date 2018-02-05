<template>
  <div class="echarts-box">
    <my-echarts :echarts='barData' v-model="bar"></my-echarts>

    <my-tips :list="mytips"></my-tips>
  </div>
</template>

<script>
import myEcharts from 'components/modules/echarts'
import myTips from 'components/common/tips'

export default {
  components: {
    myEcharts,
    myTips
  },
  data () {
    return {
      barData: {
        name: 'name',
        option: {
          title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
      mytips: [
        {
          name: 'id',
          explain: '当前列索引',
          types: 'number',
          default: '_'
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
.tips{
  margin-top: 20px;
}
</style>
