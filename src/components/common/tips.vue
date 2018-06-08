<template>
  <div class="tips">
    <p class="title">组件说明：</p>
    <my-table :headline="tableTitle" :tableData="value"></my-table>
  </div>
</template>

<script>
import myTable from 'components/modules/table'
import myButton from 'components/modules/button'

export default {
  props: ['value'],
  components: {
    myTable,
    myButton
  },
  data () {
    return {
      tableTitle: [
        {
          name: '属性'
        }, {
          name: '说明'
        }, {
          name: '类型'
        }, {
          name: '默认值'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-size: 16px;
  margin-bottom: 10px;
}
.handle{
  button{
    margin-left: 10px;
    &:nth-child(1){
      margin-left: 0;
    }
  }
  }
</style>
