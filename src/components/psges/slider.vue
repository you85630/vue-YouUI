<template>
  <div>
    <my-slider v-model="pwidth"></my-slider>
    <p>{{pwidth}}</p>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import mySlider from 'components/modules/slider'
import myTips from 'components/common/tips'

export default {
  components: {
    mySlider,
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
  font-size: 14px;
  margin-top: 10px;
}
.tips{
  margin-top: 20px;
}
</style>
