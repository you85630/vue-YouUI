<template>
  <ul class="btn-box">
    <li>
      <my-button @click="look">默认按钮</my-button>
    </li>
    <li>
      <my-button type="primary">主要按钮</my-button>
    </li>
    <li>
      <my-button type="success">成功按钮</my-button>
    </li>
    <li>
      <my-button type="warning">警告按钮</my-button>
    </li>
    <li>
      <my-button type="error">错误按钮</my-button>
    </li>
  </ul>
</template>

<script>
import myButton from 'components/modules/button'
export default {
  components: {
    myButton
  },
  methods: {
    look () {
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-box{
  display: flex;
  li{
    margin: 0 10px;
  }
}
</style>
