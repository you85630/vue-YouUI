<template>
    <my-table :headline="tableTitle" :tableData="tableList">
      <template slot-scope="handle">
        <div class="handle">
         <my-button type="primary" @click="look">主要按钮</my-button>
         <my-button type="error">错误按钮</my-button>
        </div>
      </template>
    </my-table>
</template>

<script>
import myTable from 'components/modules/table'
import myButton from 'components/modules/button'
export default {
  components: {
    myTable,
    myButton
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
        width: '200px',
        align: 'center'
      }],
      tableList: [
        {
          one: 1,
          two: 2,
          three: 3,
          four: 4
        }, {
          one: 4,
          two: 5,
          three: 6,
          four: 7
        }
      ]
    }
  },
  methods: {
    look () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.tables{
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
