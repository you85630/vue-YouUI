<template>
  <div class="show-office">
    <div class="title">地址</div>
    <div class="input-box"><input type="text" placeholder="请输入url地址,内容不可为函中文" v-model="value"></div>

    <div class="title">展示</div>
    <div class="show" v-if="urlData">
      <iframe :src="urlData"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    urlData: function () {
      let now = this.value
      let url = 'http://view.officeapps.live.com/op/view.aspx?src='
      return url + now
    }
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
  position: relative;
  width: 100%;
  height: 60vh;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  background-color: #f5f5f5;
  overflow: hidden;
  iframe{
    position: absolute;
    left: 0;
    right: 0;
    top: -90px;
    bottom: 0;
    width: 100%;
    height: 116%;
  }
}
.input-box{
  input{
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
}
</style>
