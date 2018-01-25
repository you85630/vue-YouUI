<template>
  <table class="table">
    <tr>
      <th v-for="(li,index) in headline" :key="index" :class="isAlign(index)" :style="styles(index)">{{li.name}}</th>
    </tr>
    <tr v-for="tr in tableData" :key="tr.index">
      <td v-for="li in tr" :key="li.index">{{li}}</td>
      <td :class="now.align" v-if="now.show">
        <slot></slot>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['headline', 'tableData'],
  data () {
    return {
      now: ''
    }
  },
  computed: {
    styles: function (i) {
      return (i) => {
        let list = this.headline
        let now = list[i]
        const style = Object.assign({}, now)
        now.width = `${style.width}`
        return now
      }
    },
    isAlign: function (i) {
      return (i) => {
        let list = this.headline
        if (list[i].align) {
          this.now = {
            align: list[i].align,
            show: true
          }
          return list[i].align
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
    border-left: 1px solid #ccc;
    font-weight: bold;
    font-size: 14px;
  }
  td{
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
  // 对其方式
  .center{
    text-align: center;
  }
  .left{
    text-align: left;
  }
  .right{
    text-align: right;
  }
}
</style>
