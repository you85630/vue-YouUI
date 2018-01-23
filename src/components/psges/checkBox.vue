<template>
  <div>
    <check-box v-model="select" v-for="li in checkList" :key="li.index">{{li.name}}</check-box>
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
      select: [],
      checkList: [
        {name: '备选1'
        }, {name: '备选2'
        }, {name: '备选3'
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
