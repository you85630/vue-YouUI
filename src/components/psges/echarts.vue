<template>
  <div class="echarts-box">
    <ul>
      <li>
        <my-echarts :echarts='linelist'></my-echarts>
      </li>
      <li>
        <my-echarts :echarts='barlist'></my-echarts>
      </li>
      <li>
        <my-echarts :echarts='pielist'></my-echarts>
      </li>
    </ul>

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
      barlist: {
        id: '111',
        type: 'bar',
        option: {
          title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
      linelist: {
        id: '222',
        type: 'line',
        option: {
          title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
      pielist: {
        id: '333',
        type: 'pie',
        option: {
          title: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
          ]
        }
      },
      // 组件说明
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
  ul{
    li{
      display: inline-block;
      width: 30%;
      height: 300px;
      margin: 1%;
    }
  }
}
.tips{
  margin-top: 20px;
}
</style>
