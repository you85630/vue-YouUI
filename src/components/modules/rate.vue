<template>
  <div class="rate">
    <i class="fa" v-for="li in ilist" :key="li.index" @mousemove="hover(li)" :class="{'fa-star':li.active,'fa-star-o':!li.active}"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ilist: [
        {
          active: false
        }, {
          active: false
        }, {
          active: false
        }, {
          active: false
        }, {
          active: false
        }
      ]
    }
  },
  methods: {
    hover (i) {
      i.active = !i.active
    }
  }
}
</script>

<style lang="scss" scoped>
.rate{
  font-size: 0;
  i{
    font-size: 30px;
    color: #ff9900;
    cursor: pointer;
  }
}
</style>
