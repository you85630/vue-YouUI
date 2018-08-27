<template>
  <div>
    <time-picker v-model="time"></time-picker>
    <p>{{time}}</p>

    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import timePicker from 'components/modules/timepicker'
import myTips from 'components/common/tips'

export default {
  components: {
    timePicker,
    myTips
  },
  data () {
    return {
      time: '',
      tableList: [
        {
          name: 'value',
          explain: '时间选择器返回的数据，可以使用 v-model 双向绑定数据',
          types: 'String',
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
  margin: 10px 0;
  height: 16px;
}
</style>
