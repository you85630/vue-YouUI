<template>
    <my-table :headline="tableTitle" :tableData="tableList"></my-table>
</template>

<script>
import myTable from 'components/modules/table'
export default {
  components: {
    myTable
  },
  data () {
    return {
      tableTitle: [{
        key: 'one',
        name: 1
      }, {
        key: 'two',
        name: 2
      }, {
        key: 'three',
        name: 3
      }, {
        key: 'four',
        name: 4
      }, {
        key: 'five',
        name: '操作',
        width: '150px',
        align: 'center'
      }],
      tableList: [
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 'sdas'
        }, {
          one: 4,
          two: 5,
          three: 6,
          four: 7,
          five: '2232'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tables{
  p{
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
