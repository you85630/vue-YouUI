<template>
  <div class="top-nav">
    <div class="logo"><router-link to="/home/index">Vue组件库</router-link></div>
    <ul>
      <li>小明</li>
      <li @click="exit">退出</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'exit'
    ])
  }
}
</script>

<style lang="scss" scoped>
.top-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 5%;
  background-color: #3C3C3C;
  color: #fff;
  .logo{
    a{
      color: #fff;
      font-size: 26px;
    }
  }
  ul{
    display: flex;
    li{
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #fff;
      font-size: 14px;
      cursor: pointer;
      &:last-child{
        margin-right: 0;
        padding-right: 0;
        border: none;
      }
      a{
        color: #fff;
      }
    }
  }
}
</style>
