<template>
  <div>
    <check-box v-model="select" :list="checkList"></check-box>
    <p>{{select}}</p>

    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import checkBox from 'components/modules/checkBox'
import myTips from 'components/common/tips'

export default {
  components: {
    checkBox,
    myTips
  },
  data () {
    return {
      select: [],
      checkList: [
        {
          name: '备选1',
          select: false
        }, {
          name: '备选2',
          select: false
        }, {
          name: '备选3',
          select: false
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
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
