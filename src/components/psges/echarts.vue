<template>
  <div class="echarts-box">
    <my-echarts :echarts='option'></my-echarts>

      <my-tips :list="tableList"></my-tips>
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
      option: {
        id: 'name',
        types: 'bar',
        option: {
          title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
      tableList: [
        {
          name: 'id',
          explain: 'echarts的id',
          types: 'String',
          default: '_'
        }, {
          name: 'types',
          explain: 'echarts的类型',
          types: 'String',
          default: '_'
        }, {
          name: 'option',
          explain: 'echarts的数据',
          types: 'Array',
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
