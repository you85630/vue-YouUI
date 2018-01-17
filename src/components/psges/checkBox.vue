<template>
  <div>
    <check-box v-model="checkList"></check-box>
    <p>{{checkList}}</p>
  </div>
</template>

<script>
import checkBox from 'components/modules/checkBox'
export default {
  components: {
    checkBox
  },
  data () {
    return {
      checkList: [
        {
          name: '备选1',
          select: false
        }, {
          name: '备选2',
          select: false
        }, {
          name: '备选3',
          select: false
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
</style>
