<template>
  <div class="check-box">
    <p v-for="(li,index) in list" :key="index" @click="checked(li)" :class="{active:li.select}">
      <i class="fa" :class="li.select?'fa-check-square':'fa-square-o'"></i>{{li.name}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['value', 'list'],
  methods: {
    checked (key) {
      let list = this.list
      let now = []
      key.select = !key.select
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const element = list[key]
          if (element.select) {
            now.push(element)
            now = [...new Set(now)]
          }
        }
      }
      this.$emit('input', now)
    }
  }
}
</script>

<style lang="scss" scoped>
.check-box{
    display: flex;
    align-items: center;
    p{
      cursor: pointer;
      user-select: none;
      font-size: 14px;
      margin-right: 10px;
      .fa{
        margin-right: 4px;
      }
    }
}
.active {
  color:#409eff;
}
</style>
