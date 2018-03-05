<template>
  <div class="casc">
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
      select: [],
      selectList: [{
        label: '北京',
        select: false,
        children: [{
          label: '故宫',
          select: false
        }, {
          label: '天坛',
          select: false
        }, {
          label: '王府井',
          select: false
        }]
      }, {
        label: '江苏',
        select: false,
        children: [{
          label: '南京',
          select: false,
          children: [{
            label: '夫子庙',
            select: false
          }
          ]
        }, {
          label: '苏州',
          select: false,
          children: [{
            label: '拙政园',
            select: false
          }, {
            label: '狮子林',
            select: false
          }]
        }]
      }],
      tableList: [
        {
          name: 'value',
          explain: '指定当前数据。可以使用 v-model 双向绑定数据',
          types: 'Number',
          default: '-'
        },
        {
          name: 'list',
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
  margin-top: 100px;
}
</style>
