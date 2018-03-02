<template>
  <div class="rate">
    <i class="fa" v-for="(li,index) in ilist" :key="li.index" @mouseover="stars(index)" :class="li"></i>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      star: this.value
    }
  },
  methods: {
    stars (key) {
      this.star = key + 1
      this.$emit('input', this.star)
    }
  },
  computed: {
    ilist () {
      if (this.star > 5) {
        this.star = 5
      } else {
        this.star = this.star
      }
      let list = []
      let now = Math.floor(this.star * 2) / 2
      let hasDecimal = now % 1 !== 0
      let integer = Math.floor(now)
      for (let i = 0; i < integer; i++) {
        list.push('fa-star')
      }
      if (hasDecimal) {
        list.push('fa-star-half-o')
      }
      while (list.length < 5) {
        list.push('fa-star-o')
      }
      this.$emit('input', this.star)
      return list
    }
  },
  created () {
    this.$emit('input', this.star - 1)
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
