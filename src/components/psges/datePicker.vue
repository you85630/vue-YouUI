<template>
  <div class="date-picker">
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
      time: ''
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  font-size: 14px;
}
</style>
