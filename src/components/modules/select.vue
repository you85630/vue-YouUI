<template>
  <div class="select">
    <div class="input">
      <p @click="changInput" :class="{active:show}">
        <span v-if="!select">请选择</span>
        <span class="now" v-else>{{select}}</span>
        <i class="fa" :class="show?'fa-angle-up':'fa-angle-down'"></i>
      </p>
    </div>
    <ul v-if="show">
      <li v-for="li in list" :key="li.index" @click="option(li)">{{li}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value', 'list'],
  data () {
    return {
      select: this.value,
      show: false
    }
  },
  methods: {
    changInput () {
      this.show = !this.show
    },
    option (key) {
      this.show = false
      this.select = key
      this.$emit('input', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.select{
  position: relative;
  .input{
    cursor: pointer;
    user-select: none;
    p{
      display: inline-block;
      box-sizing: border-box;
      width: 100px;
      padding: 6px 15px;
      border-radius: 2px;
      border: 1px solid #ccc;
      font-size: 0;
      &:hover{
        border-color: #409eff;
      }
      span{
        color: #ccc;
        font-size: 12px;
        width: 80%;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .now{
        color: #000;
      }
      i{
        font-size: 14px;
        width: 20%;
        text-align: right;
        vertical-align: top;
      }
    }
    .active{
      border-color: #409eff;
    }
  }
  ul{
    position: absolute;
    width: 100px;
    left: 0;
    top: 30px;
    z-index: 20;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 4px 0;
    li{
      font-size: 12px;
      padding: 6px 15px;
      cursor: pointer;
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
