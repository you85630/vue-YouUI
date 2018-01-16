<template>
  <div class="up-load">
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
  width: 200px;
  height: 200px;
}
</style>
