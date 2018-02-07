<template>
  <div class="tree">
      <div class="list" v-for="li in tree" :key="li.index">
        <div :class="['lev-'+ li.indent]" @click="li.expanded=!li.expanded">
          <i v-if="li.children" class="fa" :class="[li.expanded ? 'fa-caret-down':'fa-caret-right']"></i>
          {{li.name}}
        </div>
        <tree v-show="li.expanded" :tree="li.children"></tree>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: ['tree']
}
</script>

<style scoped lang="scss">
.tree {
  font-size: 14px;
  user-select: none;
}
@for $n from 0 through 10 {
  .lev-#{$n} {
    padding: 10px 0;
    padding-left: 20px * $n;
    cursor: pointer;
    &:hover{
      background-color: #eee;
    }
    i{
      margin-right: 4px;
    }
  }
}
</style>
