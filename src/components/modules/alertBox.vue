<template>
  <div class="alert-box" v-if="alert">
    <div class="alert-main">
      <div class="headline">
        <h2>{{boxMain.headline}}</h2>
        <div class="close" @click="close">&times;</div>
      </div>
      <div class="main">
        {{boxMain.main}}
      </div>
      <div class="btn">
        <button class="cancel">取消</button>
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'text'],
  data () {
    return {
      alert: this.value,
      boxMain: this.text
    }
  },
  methods: {
    close () {
      this.alert = false
      this.$emit('input', this.alert)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-box{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  font-size: 0;
}
.alert-main{
  position: absolute;
  box-sizing: border-box;
  padding: 10px;
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
