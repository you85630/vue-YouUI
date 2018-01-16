<template>
  <div class="check-box">
    <p @click="checked" :class="{active:show}">
      <i class="fa fa-square-o" v-if="!show"></i>
      <i class="fa fa-check-square" v-else></i>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      select: this.value,
      show: false
    }
  },
  methods: {
    checked () {
      this.show = !this.show
      let now = parseInt(this.$attrs.label)
      this.select = []
      this.select.push(this.select.push(now))
      this.$emit('input', this.select)
    }
  },
  created () {
    let now = parseInt(this.$attrs.label)
    if (now === this.select) {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.check-box{
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
  &:first-child{
    margin-left: 0;
  }
  p{
  font-size: 14px;
    cursor: pointer;
    user-select: none;
  }
  .active {
    color:#409eff;
  }
}
</style>
