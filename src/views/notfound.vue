<template>
  <div class="not-found">
    <img src="../assets/img/404.png" alt="">
    <p>
      哎！这是哪里呀！不管了~
    </p>
    <p>
      <router-link to="/login">返回登录页</router-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found{
  text-align: center;
  padding-top: 20vh;
  img{
    width: 30%;
  }
  a{
    font-size: 20px;
    background-color: #531358;
    color: #fff;
    padding: 2px 10px;
    border-radius: 2px;
  }
  p{
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>
