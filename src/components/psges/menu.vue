<template>
  <div>
    <my-menu :menu="list"></my-menu>
  </div>
</template>

<script>
import myMenu from 'components/modules/menu'
export default {
  components: {
    myMenu
  },
  data () {
    return {
      list: [
        {
          label: '第一级',
          openNow: false,
          children: [
            {
              label: '1-1',
              linkto: '#'
            }, {
              label: '1-2',
              linkto: '/home/menu'
            }
          ]
        },
        {
          label: '第二级',
          openNow: false,
          children: [
            {
              label: '2-1',
              linkto: '#'
            }, {
              label: '2-2',
              linkto: '#'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
