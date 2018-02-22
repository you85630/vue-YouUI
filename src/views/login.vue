<template>
  <div class="login">
    <div class="card">
      <div class="title">登录</div>
      <div class="form">
        <p>
          <i class="fa fa-user-circle-o"></i>
          <input type="text" placeholder="请输入账号">
        </p>
        <p>
          <i class="fa fa-unlock-alt"></i>
          <input type="text" placeholder="请输入密码">
        </p>
        <p>
          <router-link to="/home">登录</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: url('../assets/img/bg-pic.jpg') 0 0 no-repeat;
  background-size: cover;
}
.card{
  background-color: rgba(255, 255, 255,.6);
  position: absolute;
  left: 35%;
  top: 20vh;
  width: 30%;
  padding: 40px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0,.6);
}
.title{
  font-size: 20px;
  text-align: center;
}
.form{
  p{
    margin-top: 40px;
    padding: 0 10%;
    text-align: center;
    i,input{
      vertical-align: middle;
    }
    i{
      width: 10%;
      font-size: 20px;
      text-align: center;
      margin-right: 2%;
    }
    input{
      font-size: 14px;
      padding: 8px;
      width: 88%;
      box-sizing: border-box;
      border: none;
      background-color: #eee;
      border-radius: 2px;
    }
    a{
      font-size: 18px;
      background-color:#409eff;
      color:#fff;
      display: block;
      padding: 6px 0;
      border-radius: 2px;
    }
  }
}
</style>
