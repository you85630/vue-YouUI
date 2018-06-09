<template>
<div>
  <show-pdf :value="showData" :type="type"></show-pdf>
   <!-- <my-tips :value="tableList"></my-tips> -->
</div>
</template>

<script>
import showPdf from 'components/modules/showPdf'
import myTips from 'components/common/tips'

export default {
  components: {
    myTips,
    showPdf
  },
  data () {
    return {
      type: 'excel',
      showData: {
        name: '这里是一份pdf文件',
        show: '//cdn.mozilla.net/pdfjs/tracemonkey.pdf'
      },
      tableList: [
        {
          name: 'type',
          explain: '上传文件的类型',
          types: 'String',
          default: '-'
        }, {
          name: 'value',
          explain: '上传文档的名字及展示地址',
          types: 'Array',
          default: '-'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  margin-top: 20px;
}
</style>
