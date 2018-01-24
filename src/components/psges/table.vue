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
        label: 2,
        time: 3,
        read: 4
      },
      tableList: [
        {
          title: 1,
          label: 2,
          time: 3,
          read: 4
        }, {
          title: 4,
          label: 5,
          time: 6,
          read: 7
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
