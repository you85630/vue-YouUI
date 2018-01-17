<template>
  <div class="tabs" v-if="tabsList.length">
    <div class="tabs—headline">
      <div class="tabs-li" v-for="(li,index) in tabsList" :key="li.index" @click="cutTabs(index)" :class="{active:index===num}">
        <p>{{li.name}}</p><span @click="removeList(index)">&times;</span>
      </div>
    </div>
    <div class="tabs-content">
      <div class="tabs-content-li" v-for="(li,index) in tabsList" :key="li.index" v-if="index===num">
        {{li.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      tabsList: [
        {
          name: '标题1',
          content: '11111'
        },
        {
          name: '标题2',
          content: '22222'
        },
        {
          name: '标题3',
          content: '33333'
        }
      ]
    }
  },
  methods: {
    cutTabs (key) {
      this.num = key
    },
    removeList (key) {
      this.tabsList.splice(key, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs—headline{
  border-bottom: 1px solid #eee;
  .tabs-li{
    display: inline-block;
    margin-bottom: -1px;
    margin-left: -1px;
    min-width: 80px;
    border: 1px solid #eee;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    &:first-child{
      margin-left: 0;
      border-top-left-radius: 4px;
    }
    &:last-child{
      border-top-right-radius: 4px;
    }
    &:hover{
      border-bottom: 1px solid #fff;
      color: #409eff;
      span{
        display: inline-block;
      }
    }
    span,p{
      display: inline-block;
      vertical-align: middle;
    }
    span{
      display: none;
      font-size: 12px;
      &:hover{
        color: #f00;
      }
    }
    p{
      padding: 10px 0;
      width: 80%;
      font-size: 12px;
    }
  }
  .active{
    border-bottom: 1px solid #fff;
    color: #409eff;
    span{
      display: inline-block;
    }
  }
}
.tabs-content{
  margin-top: 10px;
  .tabs-content-li{
    font-size: 12px;
  }
}
</style>
