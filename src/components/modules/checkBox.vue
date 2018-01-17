<template>
  <div class="check-box">
    <p v-for="(li,index) in checkList" :key="li.index" @click="checked(index)" :class="{active:li.select}">
      <i class="fa fa-check-square" v-if="li.select"></i>
      <i class="fa fa-square-o" v-else></i>
      {{li.name}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkList: [
        {
          name: '备选1',
          select: false
        }, {
          name: '备选2',
          select: false
        }, {
          name: '备选3',
          select: false
        }
      ]
    }
  },
  methods: {
    checked (key) {
      this.checkList[key].select = !this.checkList[key].select
    }
  }
}
</script>

<style lang="scss" scoped>
.check-box{
  p{
    display: inline-block;
    margin-left: 20px;
    vertical-align: middle;
    font-size: 14px;
    cursor: pointer;

    user-select: none;
    &:first-child{
      margin-left: 0;
    }
  }
  .active {
    color:#409eff;
  }
}
</style>
