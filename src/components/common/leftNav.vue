<template>
  <div class="left-nav">
    <div class="logo">
      <router-link to="/">UI组件库</router-link>
    </div>
    <div class="li" v-for="li in leftNav">
      <router-link :to="li.linkto">{{li.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftNav: [
        {
          name: '开关',
          linkto: '/switch'
        }, {
          name: '日期选择器',
          linkto: '/datePicker'
        }, {
          name: '图片上传',
          linkto: '/upload'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.left-nav {
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
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
