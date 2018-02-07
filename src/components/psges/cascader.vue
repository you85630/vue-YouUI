<template>
  <div>
    <my-cascader v-model="select" :list='selectList'></my-cascader>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import myCascader from 'components/modules/cascader'
import myTips from 'components/common/tips'

export default {
  components: {
    myCascader,
    myTips
  },
  data () {
    return {
      select: '',
      selectList: [{
        label: '北京',
        indent: 1,
        children: [
          {
            label: '故宫',
            indent: 2
          },
          {
            label: '天坛',
            indent: 2
          },
          {
            label: '王府井',
            indent: 2
          }
        ]
      }, {
        label: '江苏',
        indent: 1,
        children: [
          {
            label: '南京',
            indent: 2,
            children: [
              {
                label: '夫子庙',
                indent: 3
              }
            ]
          },
          {
            label: '苏州',
            indent: 2,
            children: [
              {
                label: '拙政园',
                indent: 3
              },
              {
                label: '狮子林',
                indent: 3
              }
            ]
          }
        ]
      }],
      tableList: [
        {
          name: 'value',
          explain: '指定当前滑块的数据。可以使用 v-model 双向绑定数据',
          types: 'Number',
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
