<template>
  <div class="alert-box" v-if="alertBox.show">
    <div class="alert-main">
      <div class="headline">
        <h2 v-if="alertBox.title">{{alertBox.title}}</h2>
        <h2 v-else>提示：</h2>
        <div class="close" @click="alertBox.show=!alertBox.show">&times;</div>
      </div>
      <div class="main">
        <slot></slot>
      </div>
      <div class="btn">
        <button class="cancel" v-if="cancel">取消</button>
        <button @click="alertBox.show=!alertBox.show" v-if="primary">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'cancel', 'primary'],
  data () {
    return {
      alertBox: this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-box{
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.8);
  font-size: 0;
}
.alert-main{
  position: absolute;
  box-sizing: border-box;
  padding: 20px;
  min-width: 400px;
  max-width:700px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 14px;
}
.headline{
  margin-bottom: 10px;
  font-size: 0;
  .close,h2{
    display: inline-block;
    vertical-align: top;
  }
  h2{
    width: 97%;
    font-weight: normal;
    font-size: 18px;
  }
  .close{
    width: 3%;
    color: #999;
    text-align: right;
    font-weight: 300;
    font-size: 20px;
    line-height: 12px;
    cursor: pointer;
    &:hover{
      color: #409eff;
    }
  }
}
.main{
  color: #666;
  font-size: 12px;
}
.btn{
  margin-top: 10px;
  text-align: right;
  font-size: 0;
  button{
    padding: 6px 14px;
    border: none;
    border: 1px solid #409eff;
    border-radius: 4px;
    background-color: #409eff;
    color: #fff;
    font-size: 12px;
    &:hover{
      border-color: #66b1ff;
      background: #66b1ff;
    }
  }
  .cancel{
    margin-right: 10px;
    background-color: #fff;
    color: #409eff;
    &:hover{
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
}
</style>
