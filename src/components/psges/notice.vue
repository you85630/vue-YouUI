<template>
  <div>
    <my-button type="primary" @click="primary">默认</my-button>
    <my-button type="success" @click="success">成功</my-button>
    <my-button type="warning" @click="warning">警告</my-button>
    <my-button type="error" @click="error">错误</my-button>

    <my-tips :list="tableList"></my-tips>
    <ul>
      <li><h3>通过直接调用以下方法来使用组件</h3></li>
      <li><code>this.$notice.primary(config)</code></li>
      <li><code>this.$notice.success(config)</code></li>
      <li><code>this.$notice.warning(config)</code></li>
      <li><code>this.$notice.error(config)</code></li>
    </ul>
  </div>
</template>

<script>
import myButton from 'components/modules/button'
import myTips from 'components/common/tips'

export default {
  components: {
    myButton,
    myTips
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
        desc: ''
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
  },
  data () {
    return {
      tableList: [
        {
          name: 'title',
          explain: '通知提醒的标题',
          types: 'String',
          default: '-'
        }, {
          name: 'desc',
          explain: '通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式',
          types: 'String',
          default: '-'
        }
      ]
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
.tips{
  margin-top: 20px;
}
ul{
  margin-top: 10px;
  li{
    display: table;
    margin-bottom: 10px;
    font-size: 14px;

    code{
      padding: 2px 6px;
      border: 1px solid #eee;
      border-radius: 3px;
      background: #f7f7f7;
      color: #666;

      user-select: none;
    }
  }
}
</style>
