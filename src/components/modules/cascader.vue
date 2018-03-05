<template>
  <div class="cascader">
    <div class="input">
      <p @click="changInput" :class="{active:show}">
        <span v-if="!select.length">请选择</span>
        <span class="now" v-else>{{select}}</span>
        <i class="fa" :class="show?'fa-caret-up':'fa-caret-down'"></i>
      </p>
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
    },
    selectNow (key) {
      let list = this.listNow
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        if (key === i) {
          let name
          if (element.children) {
            this.cascaderList = element.children
            name = element.label
          } else {
            // 这里需要做个判断
            name = element.label
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
    p{
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
