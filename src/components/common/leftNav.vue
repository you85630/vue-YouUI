<template>
  <div class="left-nav">
    <ul>
      <li v-for="li in leftNav" :key="li.index">
        <router-link :to="li.linkto">{{li.name}}</router-link>
      </li>
    </ul>
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
.left-nav{
  overflow-y: auto;
  height: 100%;
  background-color: #2d8cf0;
  ul{
    li{
      user-select: none;
      a{
        display: block;
        padding: 10px 20px;
        color: #fff;
        font-size: 16px;
      }
      .router-link-exact-active,
      .router-link-active{
          background-color: #fff;
          color: #2d8cf0;
      }
    }
  }
}
</style>
