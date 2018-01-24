<template>
  <div id="myChart" class="myChart"></div>
</template>

<script>
export default {
  props: ['echarts'],
  mounted () {
    this.$echarts.init(document.getElementById('myChart')).setOption(this.echarts)
  }
}
</script>

<style lang="scss" scoped>
.myChart{
  width: 100%;
  height: 100%;
}
</style>
