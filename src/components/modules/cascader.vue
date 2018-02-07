<template>
  <div class="cascader">
    <div class="input">
      <p @click="changInput" :class="{active:show}">
        <span v-if="!select">请选择</span>
        <span class="now" v-else>{{select}}</span>
        <i class="fa" :class="show?'fa-caret-up':'fa-caret-down'"></i>
      </p>
    </div>
    <div class="cascaderbox" v-if="show">
      <div class="box">
        <div class="li" v-for="li in list" :key="li.index" @click="option(li)">
          <span>{{li.label}}</span>
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
      <div :class="['lev-'+ li.indent]" v-for="li in list" :key="li.index">
        <div class="li" v-for="i in li.children" :key="i.index">
          <span>{{i.label}}</span>
          <i class="fa fa-angle-right"></i>
        </div>
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
      show: true
    }
  },
  methods: {
    changInput () {
      this.show = !this.show
    },
    option (key) {
      // this.show = false
      // this.select = key
      // this.$emit('input', key)
    }
  },
  created () {
    let a = this.list
    console.log(a)
  }
}
</script>

<style lang="scss" scoped>
.cascader{
  position: relative;
  .input{
    cursor: pointer;
    user-select: none;
    p{
      display: inline-block;
      box-sizing: border-box;
      width: 100px;
      padding: 6px 15px;
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
  .cascaderbox{
    position: absolute;
    width: 100px;
    left: 0;
    top: 30px;
    z-index: 20;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 4px 0;
    .li{
      font-size: 12px;
      padding: 6px 6px;
      cursor: pointer;
      i{
        float: right;
      }
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
}
@for $n from 0 through 10 {
  .lev-#{$n} {
    width: 100%;
    position: absolute;
    top: -1px;
    left: 100% * $n;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #ccc;
  }
}
</style>
