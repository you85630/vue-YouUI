<template>
  <div>
    <my-collapse :collapse="list"></my-collapse>

    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import myCollapse from 'components/modules/collapse'
import myTips from 'components/common/tips'

export default {
  components: {
    myCollapse,
    myTips
  },
  data () {
    return {
      list: [
        {
          name: '这里是标题1',
          open: false,
          text: '这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容'
        }, {
          name: '这里是标题2',
          open: false,
          text: '这里是内容2'
        }, {
          name: '这里是标题3',
          open: false,
          text: '这里是内容3'
        }
      ],
      tableList: [
        {
          name: 'collapse',
          explain: '指定当前组件的数据',
          types: 'Array',
          default: '_'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  padding-top: 30px;
}
</style>
