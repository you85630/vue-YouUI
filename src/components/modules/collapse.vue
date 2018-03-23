<template>
  <div class="collapse">
    <ul>
      <li v-for="(li,index) in collapse" :key="li.index">
        <div class="name" @click="openText(index)"><i class="fa" :class="li.open?'fa-caret-down':'fa-caret-right'"></i>{{li.name}}</div>
        <div class="text" v-if="li.open">{{li.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['collapse'],
  methods: {
    openText (key) {
      this.collapse[key].open = !this.collapse[key].open
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse{
  min-width: 200px;
  ul{
    width: 100%;
    border: 1px solid #dddee1;
    border-top:none;
    li{
      width: 100%;
      .name{
        box-sizing: border-box;
        padding: 10px;
        border-top: 1px solid #dddee1;
        background-color: #f9f9f9;
        font-size: 14px;
        cursor: pointer;
        .fa{
          margin-right: 4px;
        }
      }
      .text{
        box-sizing: border-box;
        padding: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
