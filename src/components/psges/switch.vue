<template>
  <div class="demonstration">
    <ul>
      <li>
        <my-switch v-model="select"></my-switch>
        <span>{{select}}</span>
      </li>
      <li>
        <my-switch :disabled="disabled"></my-switch>
        <span>禁用</span>
      </li>
    </ul>

    <my-tips :list="tableList"></my-tips>
  </div>
</template>

<script>
import mySwitch from 'components/modules/switch'
import myTips from 'components/common/tips'

export default {
  components: {
    mySwitch,
    myTips
  },
  data () {
    return {
      select: false,
      disabled: true,
      tableList: [
        {
          name: 'value',
          explain: '指定当前是否选中，可以使用 v-model 双向绑定数据',
          types: 'Boolean',
          default: 'false'
        }, {
          name: 'disabled',
          explain: '禁用开关',
          types: 'Boolean',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.demonstration{
  ul{
    li{
      margin-bottom: 20px;
      display: flex;
      span{
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
}
</style>
