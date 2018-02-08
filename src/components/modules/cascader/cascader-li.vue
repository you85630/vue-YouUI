<template>
  <div class="cascader-li" v-if="cascader">
    <div class="box">
      <div class="li" v-for="(li,index) in cascader" :key="li.index" @click="select(index)">
        <span>{{li.label}}</span>
        <i class="fa fa-angle-right" v-if="li.children"></i>
      </div>
    </div>
    <cascader-li v-for="li in cascader" :key="li.index" :cascader='li.children' class="children" v-if="li.select"></cascader-li>
  </div>
</template>

<script>
export default {
  name: 'cascaderLi',
  props: ['cascader'],
  methods: {
    select (key) {
      let list = this.cascader
      list[key].select = !list[key].select
      console.log(list[key].label)
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader-li{
  position: relative;
  width: 100px;
  box-sizing: border-box;
}
.box{
  position: absolute;
  z-index: 20;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #eee;
  background-color: #fff;
  .li{
    font-size: 12px;
    padding: 6px;
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
.children{
  position: absolute;
  left: 100%;
  top: 0;
  margin-left: -1px;
}
</style>
