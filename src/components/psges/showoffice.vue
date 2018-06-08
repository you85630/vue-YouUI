<template>
<div>
   <my-tips :value="tableList"></my-tips>
</div>
</template>

<script>
import myTips from 'components/common/tips'

export default {
  components: {
    myTips
  },
  data () {
    return {
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

</style>
