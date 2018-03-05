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
        title: '默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题',
        desc: '默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分默认内容部分'
      })
    },
    success () {
      this.$notice.success({
        title: '成功标题',
        desc: '成功内容部分'
      })
    },
    warning () {
      this.$notice.warning({
        title: '警告标题',
        desc: '警告内容部分'
      })
    },
    error () {
      this.$notice.error({
        title: '错误标题',
        desc: '错误内容部分'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
