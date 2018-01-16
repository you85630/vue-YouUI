<template>
  <div class="switch">
    <my-switch v-model="select"></my-switch>
    <p>{{select}}</p>
  </div>
</template>

<script>
import mySwitch from 'components/modules/switch'
export default {
  components: {
    mySwitch
  },
  data () {
    return {
      select: false
    }
  }
}
</script>

<style lang="scss" scoped>
.switch{
  p{
    font-size: 14px;
  }
}
</style>
