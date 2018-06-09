<template>
  <div class="show-office">
    <div class="title">上传</div>
    <up-load v-model="value" :mold="type"></up-load>

    <div class="title">展示</div>
    <div class="show" v-if="value.show">
      <iframe :src="value.show" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>

<script>
import upLoad from 'components/modules/upLoad'
export default {
  props: ['value', 'type'],
  components: {
    upLoad
  }
}
</script>

<style lang="scss" scoped>
.show-office{}
.title{
  font-size: 20px;
  margin: 10px 0;
}
.show{
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  background-color: #f5f5f5;
}
</style>
