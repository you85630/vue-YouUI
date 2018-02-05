<template>
  <div>
    <my-tree :tree="list"></my-tree>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import myTree from 'components/modules/tree'
import myTips from 'components/common/tips'

export default {
  components: {
    myTree,
    myTips
  },
  data () {
    return {
      list: [
        {
          name: '第一级1',
          indent: '1',
          expanded: false,
          children: [
            {
              name: '第二级1-1',
              indent: '2',
              expanded: false,
              children: [
                {
                  name: '第三级1-1-1',
                  indent: '3',
                  expanded: false
                }, {
                  name: '第三级1-1-2',
                  indent: '3',
                  expanded: false,
                  children: [
                    {
                      name: '第四级1-1-1-1',
                      indent: '4',
                      expanded: false
                    }
                  ]
                }, {
                  name: '第三级1-1-3',
                  indent: '3',
                  expanded: false
                }
              ]
            }, {
              name: '第二级1-2',
              indent: '2',
              expanded: false
            }
          ]
        }, {
          name: '第一级2',
          indent: '1',
          expanded: false
        }
      ],
      tableList: [
        {
          name: 'value',
          explain: '树形组件数据',
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
