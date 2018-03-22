<template>
  <div class="menu">
    <div class="menu-li" v-for="(li,index) in menu" :key="li.index">
      <p @click="open(index)">
        {{li.label}}
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
  data () {
    return {
      menu: [
        {
          label: '第一级',
          openNow: false,
          children: [
            {
              label: '1-1',
              linkto: '#'
            }, {
              label: '1-2',
              linkto: '/home/menu'
            }
          ]
        },
        {
          label: '第二级',
          openNow: false,
          children: [
            {
              label: '2-1',
              linkto: '#'
            }, {
              label: '2-2',
              linkto: '#'
            }
          ]
        }
      ]
    }
  },
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
  box-sizing: border-box;
  width: 200px;
  border-right: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;

  user-select: none;
  .menu-li{
    p{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      font-size: 14px;
       &:hover{
        background-color: #f5f5f5;
      }
    }
    .li-children{
      overflow: hidden;
      a{
        display: inline-block;
        padding: 10px 40px;
        width: 100%;
        font-size: 14px;
        &:hover{
          background-color: #2d8cf0;
          color: #fff;
        }
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
