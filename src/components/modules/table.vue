<template>
  <table class="table">
    <tr>
      <th v-for="(li,index) in headline" :key="index" :style="styles">{{li.name}}</th>
    </tr>
    <tr v-for="tr in tableData" :key="tr.index">
      <td v-for="li in tr" :key="li.index">{{li}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['headline', 'tableData'],
  data () {
    return {
      styleObject: ''
    }
  },
  computed: {
    styles: function () {
      let list = this.headline
      for (let i = 0; i < list.length; i++) {
        let wid = list[i]
        if (wid.width) {
          const style = Object.assign({}, wid)
          style.width = `${style.width}px`
          return style
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  width: 100%;
  border: 1px solid #ccc;
  tr{
    &:nth-child(1){
      background-color: #f5f5f5;
      &:hover{
        background-color: #f5f5f5;
      }
    }
    &:hover{
      background-color:#edf7fe;
    }
  }
  th{
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border-left: 1px solid #ccc;
  }
  td{
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
  }
}
</style>
