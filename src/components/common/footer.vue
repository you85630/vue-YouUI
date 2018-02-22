<template>
  <div class="footer">
    <p>
      &copy;&nbsp;2017&nbsp;-&nbsp;{{year}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: 0
    }
  },
  created () {
    let date = new Date()
    this.year = date.getFullYear()
  }
}
</script>

.<style lang="scss" scoped>
.footer{
  font-size: 12px;
  text-align: center;
  background-color: #eee;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
