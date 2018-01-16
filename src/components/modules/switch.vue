<template>
  <div class="switch" :class="{open:btn}" @click="cutBtn">
    <span></span>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      btn: this.value
    }
  },
  methods: {
    cutBtn () {
      this.btn = !this.btn
      this.$emit('input', this.btn)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 40px;
  height: 20px;
  border: 2px solid #ff4949;
  border-radius: 50px;
  background-color: #ff4949;
  cursor: pointer;
  span {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background-color: #fff;
  }
}
.open {
  border-color: #2d8cf0;
  background-color: #2d8cf0;
  span {
    right: 0;
  }
}
</style>
