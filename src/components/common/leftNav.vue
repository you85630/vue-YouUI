<template>
  <div class="left-nav">
    <div class="logo">
      <router-link to="/">UI组件库</router-link>
    </div>
    <div class="li" v-for="li in leftNav" :key="li.index">
      <router-link :to="li.linkto">{{li.name}}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'leftNav'
    ])
  }
}
</script>

<style lang="scss" scoped>
.left-nav {
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  user-select: none;
  .li {
    padding: 10px 0;
    a {
      font-size: 14px;
      display: block;
    }
    .router-link-exact-active,
    .router-link-active {
      color: #409eff;
    }
  }
}
.logo {
  font-size: 20px;
  padding: 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  a {
    display: block;
  }
}
</style>
