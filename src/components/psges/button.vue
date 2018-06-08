<template>
  <div class="btn-box">
    <p>各类型按钮</p>
    <ul>
      <li>
        <my-button>默认按钮</my-button>
      </li>
      <li>
        <my-button type="ghost">ghost</my-button>
      </li>
      <li>
        <my-button type="dashed">dashed</my-button>
      </li>
      <li>
        <my-button type="primary">primary</my-button>
      </li>
      <li>
        <my-button type="success">success</my-button>
      </li>
      <li>
        <my-button type="warning">warning</my-button>
      </li>
      <li>
        <my-button type="error">error</my-button>
      </li>
    </ul>
    <div class="long">
      <p>长按钮</p>
      <my-button type="primary" :long="true">主要按钮</my-button>
    </div>
    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import myButton from 'components/modules/button'
import myTips from 'components/common/tips'

export default {
  components: {
    myButton,
    myTips
  },
  data () {
    return {
      tableList: [
        {
          name: 'type',
          explain: '按钮类型，可选值为primary、ghost、dashed、success、warning、error或者不设置',
          types: 'String',
          default: '-'
        }, {
          name: 'long',
          explain: '开启后，按钮的长度为 100%',
          types: 'Boolean',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-box{
  p{
    font-size: 14px;
    margin-bottom: 10px;
  }
  ul{
    margin-bottom: 10px;
    display: flex;
    li{
      margin-right: 10px;
    }
  }
  .long{
    margin-bottom: 20px;
  }
}
</style>
