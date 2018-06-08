<template>
<div>
  <show-office></show-office>
   <!-- <my-tips :value="tableList"></my-tips> -->
</div>
</template>

<script>
import showOffice from 'components/modules/showOffice'
import myTips from 'components/common/tips'

export default {
  components: {
    myTips,
    showOffice
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
.tips{
  margin-top: 20px;
}
</style>
