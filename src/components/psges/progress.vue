<template>
  <div>
    <my-progress v-model="pwidth"></my-progress>
    <p>{{pwidth}}</p>

    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import myProgress from 'components/modules/progress'
import myTips from 'components/common/tips'

export default {
  components: {
    myProgress,
    myTips
  },
  data () {
    return {
      pwidth: '30',
      tableList: [
        {
          name: 'value',
          explain: '指定当前滑块的数据。可以使用 v-model 双向绑定数据',
          types: 'Number',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  margin-top: 10px;
  font-size: 14px;
}
.tips{
  margin-top: 20px;
}
</style>
