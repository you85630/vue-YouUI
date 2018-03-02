<template>
  <div>
    <date-picker v-model="time"></date-picker>
    <p>{{time}}</p>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import datePicker from 'components/modules/datePicker'
import myTips from 'components/common/tips'

export default {
  components: {
    datePicker,
    myTips
  },
  data () {
    return {
      time: '',
      tableList: [
        {
          name: 'value',
          explain: '日期',
          types: 'Date',
          default: '_'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
