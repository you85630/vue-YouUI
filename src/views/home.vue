<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="main">
      <div class="left">
        <left-nav></left-nav>
      </div>
      <div class="right">
        <div class="right-main">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import topNav from 'components/common/topnav'
import leftNav from 'components/common/leftnav'
import myFooter from 'components/common/footer'
export default {
  components: {
    topNav,
    leftNav,
    myFooter
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
}
.main {
  display: flex;
  overflow: hidden;
  height: 95%;
  .left{
    max-width: 300px;
    width: 20%;
    background-color: #fff;
  }
  .right {
    width: 100%;
    .right-main{
      overflow-y: auto;
      box-sizing: border-box;
      margin: 10px;
      padding: 10px;
      height: 93%;
      background-color: #fff;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
</style>
