<template>
  <div class="cascader-li">
    <div class="cascaderbox" v-for="li in cascader" :key="li.index">
      <div :class="['lev-'+ li.indent]">
        <div class="li" v-for="li in li" :key="li.index">
          <span>{{li.label}}</span>
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
      <cascader :cascader="li.children"></cascader>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cascader',
  props: ['cascader']
}
</script>

<style lang="scss" scoped>
.cascader-li{
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
}
</style>
