<template>
  <div>
    <my-button type="primary" @click="primary">默认</my-button>
    <my-button type="success" @click="success">成功</my-button>
    <my-button type="warning" @click="warning">警告</my-button>
    <my-button type="error" @click="error">错误</my-button>
  </div>
</template>

<script>
import myButton from 'components/modules/button'

export default {
  components: {
    myButton
  },
  methods: {
    primary () {
      this.$notice.primary({
        title: '标题',
        desc: '内容部分'
      })
    },
    success () {
      this.$notice.success({
        title: '标题',
        desc: '内容部分'
      })
    },
    warning () {
      this.$notice.warning({
        title: '标题',
        desc: '内容部分'
      })
    },
    error () {
      this.$notice.error({
        title: '标题',
        desc: '内容部分'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button-box{
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;
}
</style>
