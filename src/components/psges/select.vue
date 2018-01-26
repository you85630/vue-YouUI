<template>
  <div>
    <my-select v-model="select" :list="selectList"></my-select>
    <p>{{select}}</p>
  </div>
</template>

<script>
import mySelect from 'components/modules/select'
export default {
  components: {
    mySelect
  },
  data () {
    return {
      select: '',
      selectList: ['111', '222', '333']
    }
  }
}
</script>

<style lang="scss" scoped>
p{
  font-size: 12px;
  margin-top: 10px;
}
</style>
