<template>
  <div class="top-nav">
    <ul>
      <li>小明</li>
      <li>退出</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top-nav{
  background-color: #1D2E32;
  color: #fff;
  padding: 0 20px;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul{
    display: flex;
    li{
      font-size: 14px;
      border-right: 1px solid #fff;
      padding-right: 10px;
      margin-right: 10px;
      cursor: pointer;
      &:last-child{
        border: none;
        padding-right: 0;
        margin-right: 0;
      }
    }
  }
}
</style>
