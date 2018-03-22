<template>
  <div>
    <my-menu :menu="list"></my-menu>

    <my-tips :list="tableList"></my-tips>
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
          openNow: false,
          children: [
            {
              label: '1-1',
              linkto: '#'
            }, {
              label: '1-2',
              linkto: '/home/menu'
            }
          ]
        },
        {
          label: '第二级',
          openNow: false,
          children: [
            {
              label: '2-1',
              linkto: '#'
            }, {
              label: '2-2',
              linkto: '#'
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
</style>
