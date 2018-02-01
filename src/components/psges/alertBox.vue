<template>
  <div>
    <my-button type="primary" @click="alert">点击弹窗</my-button>
    <alert-box v-model="boxMain" v-if="boxMain.show" :primary='true'>
      <p>{{boxMain.main}}</p>
    </alert-box>
    <div class="tips">
      <h2>说明：</h2>
    </div>
  </div>
</template>

<script>
import alertBox from 'components/modules/alertBox'
import myButton from 'components/modules/button'

export default {
  components: {
    alertBox,
    myButton
  },
  data () {
    return {
      boxMain: {
        title: '这里是标题',
        main: '这里显示内容',
        show: false
      }
    }
  },
  methods: {
    alert () {
      this.boxMain = {
        title: '这里是标题',
        main: '这里显示内容',
        show: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  margin-top: 10px;
  h2{
    font-size: 16px;
    font-weight: normal;
  }
}
</style>
