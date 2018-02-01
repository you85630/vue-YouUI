<template>
  <div>
    <my-select v-model="select" :list="selectList"></my-select>
    <p>选中：{{select}}</p>
    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import mySelect from 'components/modules/select'
import myTips from 'components/common/tips'

export default {
  components: {
    mySelect,
    myTips
  },
  data () {
    return {
      select: '',
      selectList: ['111', '222', '333'],
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
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
