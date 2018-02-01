<template>
  <div>
    <my-button type="primary" @click="alert">点击弹窗</my-button>
    <alert-box v-model="boxMain" v-if="boxMain.show" :primary='true'>
      <p>{{boxMain.main}}</p>
    </alert-box>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import alertBox from 'components/modules/alertBox'
import myButton from 'components/modules/button'
import myTips from 'components/common/tips'

export default {
  components: {
    alertBox,
    myButton,
    myTips
  },
  data () {
    return {
      boxMain: {
        title: '这里是标题',
        main: '这里显示内容',
        show: false
      },
      tableList: [
        // {
        //   name: 'type',
        //   explain: '按钮类型，可选值为primary、ghost、dashed、success、warning、error或者不设置',
        //   types: 'String',
        //   default: '-'
        // }, {
        //   name: 'long',
        //   explain: '开启后，按钮的长度为 100%',
        //   types: 'Boolean',
        //   default: 'false'
        // }
      ]
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
