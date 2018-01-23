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
      tableTitle: {
        title: 1,
        label: 1,
        time: 1,
        read: 1
      },
      tableList: [
        {
          title: 1,
          label: 1,
          time: 1,
          read: 1
        }, {
          title: 1,
          label: 1,
          time: 1,
          read: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
