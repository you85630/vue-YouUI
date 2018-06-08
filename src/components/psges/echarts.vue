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
      <li>
        <my-echarts :echarts='radarlist'></my-echarts>
      </li>
    </ul>

      <my-tips :value="tableList"></my-tips>
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
      linelist: {
        type: 'line',
        option: {
          title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
      barlist: {
        type: 'bar',
        option: {
          title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
      pielist: {
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
      radarlist: {
        type: 'radar',
        option: {
          title: [
            {
              name: '销售',
              max: 6500
            },
            {
              name: '管理',
              max: 16000
            }, {
              name: '信息技术',
              max: 30000
            }, {
              name: '客服',
              max: 38000
            }, {
              name: '研发',
              max: 52000
            }, {
              name: '市场',
              max: 25000
            }
          ],
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }
          ]
        }
      },
      // 组件说明
      tableList: [
        {
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
      width: 45%;
      height: 450px;
      margin: 1%;
    }
  }
}
.tips{
  margin-top: 20px;
}
</style>
