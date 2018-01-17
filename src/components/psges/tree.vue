<template>
  <div>
    <my-tree :tree="list"></my-tree>
  </div>
</template>

<script>
import myTree from 'components/modules/tree'
export default {
  components: {
    myTree
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
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
