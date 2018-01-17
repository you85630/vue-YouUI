<template>
  <div>
    <radio-box v-model="select" :list="radioList"></radio-box>
    <p>{{select}}</p>
  </div>
</template>

<script>
import radioBox from 'components/modules/radioBox'
export default {
  components: {
    radioBox
  },
  data () {
    return {
      select: 1,
      radioList: [
        {
          name: '选项1'
        }, {
          name: '选项2'
        }, {
          name: '选项3'
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
