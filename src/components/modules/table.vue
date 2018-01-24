<template>
  <div class="table">
    <table class="table-headline" border="1">
      <tr>
        <th v-for="li in title" :key="li.index">{{li}}</th>
      </tr>
    </table>
    <table class="table-content">
      <tr>
        <td></td>
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
  }

}
</script>

<style lang="scss" scoped>
.table{
}
.table-headline{
  th{
    font-size: 12px;
    font-weight: bold;
  }
}
.table-content{
  td{
    font-size: 12px;
  }
}
</style>
