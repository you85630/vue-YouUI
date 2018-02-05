<template>
  <div>
    <my-tabs></my-tabs>

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
      tableList: [
        {
          name: 'value',
          explain: '图片转换为base46',
          types: 'base46',
          default: '_'
        }
      ]
    }
  }
}
</script>

<style>

</style>
