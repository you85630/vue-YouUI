<template>
  <div class="slider" @click="slider"><p :style="now"></p></div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      now: {
        width: this.value + '%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slider{
    position: relative;
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: #eee;
    p{
      position: absolute;
      left: 0;
      display: inline-block;
      width: 0%;
      height: 100%;
      border-radius: 4px;
      background: #3c9ffc;
    }
}
</style>
