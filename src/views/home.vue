<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="main">
      <left-nav></left-nav>
      <div class="right">
        <transition nane="slide-fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import topNav from 'components/common/topnav'
import myFooter from 'components/common/footer'
import leftNav from 'components/common/leftNav'
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
  height: 90%;
  display: flex;
  .right {
    width: 100%;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    overflow-y: auto;
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
  transform: translateX(10px);
  opacity: 0;
}
</style>
