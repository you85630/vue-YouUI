<template>
  <div>
    <my-tabs v-model="num" :list="tabsList"></my-tabs>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import myTabs from 'components/modules/tabs'
import myTips from 'components/common/tips'

export default {
  components: {
    myTabs,
    myTips
  },
  data () {
    return {
      num: 0,
      tabsList: [
        {
          name: '标题1',
          content: '11111'
        },
        {
          name: '标题2',
          content: '22222'
        },
        {
          name: '标题3',
          content: '33333'
        }
      ],
      tableList: [
        {
          name: 'value',
          explain: '当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据',
          types: 'String',
          default: '默认为第一项的 name'
        }, {
          name: 'value',
          explain: 'tabs数据内容',
          types: 'Array',
          default: '_'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tips{
  margin-top: 20px;
}
</style>
