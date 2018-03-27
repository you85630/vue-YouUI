<template>
  <div class="menu">
    <div class="menu-li" v-for="(li,index) in menu" :key="li.index">
      <p @click="open(index)">
        <span class="name"><i class="fa" :class="li.icon" v-if="li.icon"></i>{{li.label}}</span>
        <i class="fa" :class="li.openNow?'fa-angle-right':'fa-angle-down'"></i>
      </p>
      <div class="li-children" v-for="i in li.children" :key="i.index" v-if="li.openNow">
        <router-link :to="i.linkto">{{i.label}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    open (key) {
      this.menu[key].openNow = !this.menu[key].openNow
    }
  },
  created () {
    let router = this.$route.path
    let list = this.menu
    for (let i = 0; i < list.length; i++) {
      const e = list[i].children
      for (let j = 0; j < e.length; j++) {
        const element = e[j].linkto
        if (router === element) {
          list[i].openNow = !list[i].openNow
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-right: 1px solid #eee;
  background-color: #404655;
  cursor: pointer;

  user-select: none;
  .menu-li{
    p{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      color: #fff;
      font-size: 14px;
      .name{
        .fa{
          width: 20px;
          text-align: left;
        }
      }
    }
    .li-children{
      overflow: hidden;
      background-color: #303646;
      a{
        display: inline-block;
        padding: 10px 40px;
        width: 100%;
        color: #fff;
        font-size: 14px;
      }
    }
    .router-link-exact-active,
    .router-link-active{
      background-color: #2d8cf0;
      color: #fff;
    }
  }
}
</style>
