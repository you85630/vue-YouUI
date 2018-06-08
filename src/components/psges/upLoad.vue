<template>
  <div>
    <up-load v-model="pic" :mold="type"></up-load>
    <textarea :value="pic"></textarea>

    <my-tips :value="tableList"></my-tips>
  </div>
</template>

<script>
import upLoad from 'components/modules/upLoad'
import myTips from 'components/common/tips'

export default {
  components: {
    upLoad,
    myTips
  },
  data () {
    return {
      pic: '',
      type: 'img',
      tableList: [
        {
          name: 'value',
          explain: '图片转换为base46',
          types: 'base46',
          default: '_'
        }
      ]
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
  margin-bottom: 20px;
}
</style>
