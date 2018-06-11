<template>
<div>
  <show-office :value="showData"></show-office>

   <my-tips :value="tableList"></my-tips>
</div>
</template>

<script>
import showOffice from 'components/modules/showOffice'
import myTips from 'components/common/tips'

export default {
  components: {
    myTips,
    showOffice
  },
  data () {
    return {
      type: 'excel',
      showData: 'http://view.officeapps.live.com/op/view.aspx?src=http%3a%2f%2fvideo.ch9.ms%2fbuild%2f2011%2fslides%2fTOOL-532T_Sutter.pptx',
      tableList: [
        {
          name: 'value',
          explain: '文档地址',
          types: 'URL',
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
