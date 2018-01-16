<template>
  <div>
    <up-load v-model="pic"></up-load>
    <textarea :value="pic"></textarea>
  </div>
</template>

<script>
import upLoad from 'components/modules/upLoad'
export default {
  components: {
    upLoad
  },
  data () {
    return {
      pic: ''
    }
  }
}
</script>

<style lang="scss" scoped>
textarea{
  width: 400px;
  height: 200px;
  margin-top: 10px;
  padding: 1%;
}
</style>
