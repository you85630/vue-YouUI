<template>
  <div>
    <my-rate v-model="star"></my-rate>
    <p>{{star}}</p>

    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import myRate from 'components/modules/rate'
import myTips from 'components/common/tips'
export default {
  components: {
    myRate,
    myTips
  },
  data () {
    return {
      star: 3,
      tableList: [
        {
          name: 'value',
          explain: '指定当前星星的数据。可以使用 v-model 双向绑定数据',
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
  font-size: 14px;
  margin-top: 10px;
}
.tips{
  margin-top: 20px;
}
</style>
