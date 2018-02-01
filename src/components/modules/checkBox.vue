<template>
  <div class="check-box">
    <p @click="checked" :class="{active:select}">
      <i class="fa" :class="select?'fa-check-square':'fa-square-o'"></i>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      select: false,
      list: this.value
    }
  },
  methods: {
    checked () {
      this.select = !this.select
      let text = this.$slots.default[0].text
      if (this.select) {
        this.list.push(text)
      } else {
        let now = this.list
        let Inx
        now.filter((e, key) => {
          if (e === text) {
            Inx = key
          }
        })
        now.splice(Inx, 1)
      }
      this.$emit('input', this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
.check-box{
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
</style>
