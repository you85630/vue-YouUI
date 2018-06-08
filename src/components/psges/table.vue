<template>
  <div>
    <my-table :headline="tableTitle" :tableData="tableList">
      <template slot-scope="handle">
        <div class="handle">
          <my-button type="primary" @click="look(handle.id)">详情</my-button>
          <my-button type="error">删除</my-button>
        </div>
      </template>
    </my-table>
    <my-tips :value="mytips"></my-tips>
  </div>
</template>

<script>
import myTable from 'components/modules/table'
import myButton from 'components/modules/button'
import myTips from 'components/common/tips'

export default {
  components: {
    myTable,
    myButton,
    myTips
  },
  data () {
    return {
      tableTitle: [
        {
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
        }
      ],
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
      ],
      mytips: [
        {
          name: 'id',
          explain: '当前列索引',
          types: 'number',
          default: '_'
        }, {
          name: 'tableTitle',
          explain: '标题',
          types: 'Array',
          default: '_'
        }, {
          name: 'tableList',
          explain: '表格内容',
          types: 'Array',
          default: '_'
        }
      ]
    }
  },
  methods: {
    look (key) {
      console.log(key)
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  margin-top: 20px;
}
.handle{
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  button{
    margin-left: 10px;
    &:nth-child(1){
      margin-left: 0;
    }
  }
  }
</style>
