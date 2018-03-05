<template>
  <div class="cascader">
    <div class="input" @click="changInput">
      <p v-if="!select.length">请选择</p>
      <p class="now" v-else><span v-for="li in select" :key="li.index">{{li}}</span></p>
      <i class="fa" :class="show?'fa-caret-up':'fa-caret-down'"></i>
    </div>
    <div class="box" v-if="show">
      <div class="back">已选择：<span v-for="li in have" :key="li.index">{{li}}</span></div>
      <div class="li" v-for="(li,index) in listNow" :key="li.index" @click="selectNow(index)">
        <span>{{li.label}}</span>
        <i class="fa fa-angle-right" v-if="li.children"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'list'],
  data () {
    return {
      select: this.value,
      show: false,
      cascaderList: this.list,
      have: []
    }
  },
  methods: {
    changInput () {
      this.show = !this.show
      this.select = this.value
      this.have = []
      this.cascaderList = this.list
    },
    selectNow (key) {
      let list = this.listNow
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        if (key === i) {
          let name = element.label
          if (element.children) {
            this.cascaderList = element.children
          } else {
            this.show = !this.show
            this.select = this.have
          }
          this.have.push(name)
        }
      }
    }
  },
  computed: {
    'listNow': function () {
      let list = []
      let now = this.cascaderList
      for (let i = 0; i < now.length; i++) {
        const element = now[i]
        list.push(element)
      }
      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader{
  position: relative;
  width: 300px;
  box-sizing: border-box;
  .input{
    cursor: pointer;
    user-select: none;
    margin-bottom: 4px;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 15px;
    border-radius: 2px;
    border: 1px solid #ccc;
    font-size: 0;
    &:hover{
      border-color: #409eff;
    }
    p{
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
      span{
        &:last-child{
          &::after{
            content: '';
            margin: 0;
          }
        }
        &::after{
          content: '/';
          color: #000;
          margin: 0 4px;
        }
      }
    }
    i{
      font-size: 14px;
      width: 20%;
      text-align: right;
      vertical-align: top;
    }
  }
  .box{
    position: absolute;
    z-index: 20;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #eee;
    background-color: #fff;
    .back{
      padding: 8px;
      font-size: 14px;
      cursor: pointer;
      span{
        color: #409eff;
        &:last-child{
          &::after{
            content: '';
            margin: 0;
          }
        }
        &::after{
          content: '/';
          color: #000;
          margin: 0 4px;
        }
      }
    }
    .li{
      font-size: 14px;
      padding: 8px;
      cursor: pointer;
      user-select: none;
      &:hover{
        background-color: #f5f5f5;
      }
      i{
        float: right;
      }
    }
  }
}
</style>
