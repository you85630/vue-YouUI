<template>
  <button :class="type" @click="select"><slot></slot></button>
</template>

<script>
export default {
  props: ['type'],
  methods: {
    select () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  padding: 6px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9f9;
  transition: all .2s linear;
  &:hover{
    border-color: #409eff;
    color: #409eff;
  }
}
.primary{
  border-color: #409eff;
  background-color: #409eff;
  color: #fff;
  &:hover{
    border-color: #57a3f3;
    background-color: #57a3f3;
    color: #fff;
  }
}
.success{
  border-color: #19be6b;
  background-color: #19be6b;
  color: #fff;
  &:hover{
    border-color: #47cb89;
    background-color: #47cb89;
    color: #fff;
  }
}
.warning{
  border-color: #f90;
  background-color: #f90;
  color: #fff;
  &:hover{
    border-color: #ffad33;
    background-color: #ffad33;
    color: #fff;
  }
}
.error{
  border-color: #ed3f14;
  background-color: #ed3f14;
  color: #fff;
  &:hover{
    border-color: #f16543;
    background-color: #f16543;
    color: #fff;
  }
}
</style>
