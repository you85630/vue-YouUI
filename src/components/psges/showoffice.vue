<template>
<div>
  <show-office :value="showData"></show-office>

  <p>当前页面的请求必须是https，否则会被视为不安全请求，予以阻止</p>
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
      // showData: 'http://psylife-static.oss-cn-hangzhou.aliyuncs.com/sit/download/123.doc',
      showData: 'http%3a%2f%2fvideo.ch9.ms%2fbuild%2f2011%2fslides%2fTOOL-532T_Sutter.pptx',
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
p{
  margin-top: 20px;
  font-size: 20px;
  color: #f00;
}
</style>
