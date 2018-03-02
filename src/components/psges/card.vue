<template>
  <div>
    <my-card>
      <p slot="title">标题</p>
      <ul slot="content">
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </my-card>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import myCard from 'components/modules/card'
import myTips from 'components/common/tips'
export default {
  components: {
    myCard,
    myTips
  },
  data () {
    return {
      tableList: [
        {
          name: 'title',
          explain: '卡片标题',
          types: 'String',
          default: '-'
        }, {
          name: 'content',
          explain: '卡片内容',
          types: 'Array',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  margin-top: 20px;
}
</style>
