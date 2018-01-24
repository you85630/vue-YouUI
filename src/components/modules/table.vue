<template>
  <div class="table">
    <table class="table-headline">
      <tr>
        <th v-for="li in title" :key="li.index">{{li}}</th>
        <th class="operate">操作</th>
      </tr>
    </table>
    <table class="table-content">
      <tr v-for="tr in data" :key="tr.index">
        <td v-for="li in tr" :key="li.index">{{li}}</td>
        <td class="operate">
          <button @click="operate">操作</button>
          <button @click="remove">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['headline', 'tableData'],
  data () {
    return {
      title: this.headline,
      data: this.tableData
    }
  },
  methods: {
    operate () {
      this.$emit('input', this.title)
    },
    remove () {
      this.$emit('input', this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  .operate{
    padding: 10px 2px;
    width: 120px;
    text-align: center;
    button{
      border: none;
      color: #fff;
      padding: 4px 10px;
      &:nth-child(1){
        background-color: #409eff;
      }
       &:nth-child(2){
        background-color: #ed3f14;
      }
    }
  }
}
.table-headline{
  width: 100%;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-bottom: none;
  th{
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border-left: 1px solid #ccc;
  }
}
.table-content{
  width: 100%;
  td{
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
  }
}
</style>
