<template>
  <div class="cascader">
    <div class="input">
      <p @click="changInput" :class="{active:show}">
        <span v-if="!select.length">请选择</span>
        <span class="now" v-else>{{select}}</span>
        <i class="fa" :class="show?'fa-caret-up':'fa-caret-down'"></i>
      </p>
    </div>
    <cascader-li :cascader="list"  v-if="show"></cascader-li>
  </div>
</template>

<script>
import cascaderLi from 'components/modules/cascader/cascader-li'
export default {
  props: ['value', 'list'],
  components: {
    cascaderLi
  },
  data () {
    return {
      select: this.value,
      show: false
    }
  },
  methods: {
    changInput () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.cascader{
  position: relative;
  width: 100%;
  .input{
    cursor: pointer;
    user-select: none;
    margin-bottom: 4px;
    width: 100%;
    p{
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
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
}
</style>
