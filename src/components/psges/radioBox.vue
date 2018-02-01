<template>
  <div>
    <radio-box v-model="select" :list="radioList"></radio-box>
    <p>{{select}}</p>
    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import radioBox from 'components/modules/radioBox'
import myTips from 'components/common/tips'

export default {
  components: {
    radioBox,
    myTips
  },
  data () {
    return {
      select: 1,
      radioList: [
        {
          name: '选项1'
        }, {
          name: '选项2'
        }, {
          name: '选项3'
        }
      ],
      tableList: [
        {
          name: 'value',
          explain: '指定当前选中的项目数据。可以使用 v-model 双向绑定数据',
          types: 'Number',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
