<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card{
  display: inline-block;
  min-width: 200px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 4px;
  .title{
    font-size: 12px;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .content{
    padding: 10px;
  }
}
</style>
