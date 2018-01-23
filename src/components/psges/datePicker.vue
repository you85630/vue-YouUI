<template>
  <div>
    <date-picker v-model="time"></date-picker>
    <p>{{time}}</p>
  </div>
</template>

<script>
import datePicker from 'components/modules/datePicker'
export default {
  components: {
    datePicker
  },
  data () {
    return {
      time: '2018-1-23'
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  font-size: 14px;
}
</style>
