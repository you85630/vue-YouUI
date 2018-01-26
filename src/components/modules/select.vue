<template>
  <div class="select">
    <div class="input">
      <p @click="changInput" :class="{active:show}" v-if="!select">请选择</p>
      <p @click="changInput" class="now" :class="{active:show}" v-else>{{select}}</p>
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
      min-width: 200px;
      padding: 6px 15px;
      font-size: 12px;
      border-radius: 2px;
      border: 1px solid #ccc;
      color: #ccc;
      &:hover{
        border-color: #409eff;
      }
    }
    .active{
      border-color: #409eff;
    }
    .now{
      color: #000;
    }
  }
  ul{
    position: absolute;
    min-width: 200px;
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
