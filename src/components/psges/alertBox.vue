<template>
  <div>
    <button @click="alert">点击弹窗</button>
    <alert-box v-model="show" v-if="show" :text="boxMain">
      {{boxMain.main}}
    </alert-box>
  </div>
</template>

<script>
import alertBox from 'components/modules/alertBox'
export default {
  components: {
    alertBox
  },
  data () {
    return {
      show: false,
      boxMain: {
        headline: '这里是标题',
        main: '这里显示内容'
      }
    }
  },
  methods: {
    alert () {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
