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
        name: 1
      }, {
        name: 2
      }, {
        name: 3
      }, {
        name: 4
      }, {
        name: '操作',
        width: 150,
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
  },
  methods: {
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
