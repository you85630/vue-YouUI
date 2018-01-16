<template>
  <div>
    <check-box v-for="(li,index) in checkList" :key="li.index" :label="index+1" v-model="select">{{li.name}}</check-box>
    <p>{{select}}</p>
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
      select: 1,
      checkList: [
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
  font-size: 14px;
}
</style>
