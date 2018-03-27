<template>
  <div>
    <my-menu :menu="list"></my-menu>

    <my-tips :list="tableList"></my-tips>
    <p>根据路由判断当前展开的父元素</p>
    <p style="color:red">注：当前页面为静态资源</p>
  </div>
</template>

<script>
import myMenu from 'components/modules/menu'
import myTips from 'components/common/tips'
export default {
  components: {
    myMenu,
    myTips
  },
  data () {
    return {
      list: [
        {
          label: '第一级',
          icon: 'fa-sliders',
          openNow: false,
          children: [
            {
              label: '1-1',
              linkto: '/home/echarts'
            }, {
              label: '1-2',
              linkto: '/home/menu'
            }
          ]
        },
        {
          label: '第二级',
          icon: 'fa-navicon',
          openNow: false,
          children: [
            {
              label: '2-1',
              linkto: '/home/cascader'
            }, {
              label: '2-2',
              linkto: '/home/datePicker'
            }
          ]
        }
      ],
      tableList: [
        {
          name: 'menu',
          explain: '指定当前组件的数据',
          types: 'Array',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  margin-top: 20px;
}
p{
  margin-top: 20px;
  font-size: 20px;
}
</style>
