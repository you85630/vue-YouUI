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
        {
          name: 'boxMain',
          explain: '内部包含title标题，main主体内容，和show是否显示',
          types: 'Array',
          default: '_'
        }, {
          name: 'primary',
          explain: '开启后显示确定按钮',
          types: 'Boolean',
          default: 'false'
        }, {
          name: 'cancel',
          explain: '开启后显示取消按钮',
          types: 'Boolean',
          default: 'false'
        }
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
