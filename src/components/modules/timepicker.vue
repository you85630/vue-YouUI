<template>
  <div class="time-picker">
    <div class="show-box">
      <i class="fa fa-clock-o"></i>
      <input type="text" :value="nowTime" @click="showBox">
      <i class="fa fa-times-circle" v-if="nowTime" @click="clearbox"></i>
    </div>
    <div class="time-box" id="box" v-if="status" v-show="box" @mouseleave="box=false">
      <ul class="hour">
        <li v-for="(li,index) in hourList" :key="index" :class="{active:index===h}" @click="hour(li,index,$event)">{{li}}</li>
      </ul>
      <ul class="minute">
        <li v-for="(li,index) in minuteList" :key="index" :class="{active:index===m}" @click="minute(li,index,$event)">{{li}}</li>
      </ul>
      <ul class="second">
        <li v-for="(li,index) in secondList" :key="index" :class="{active:index===s}" @click="second(li,index,$event)">{{li}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {
        status: true,
        box: false,
        nowHour: '',
        nowMinute: '',
        nowSecond: '',
        h: '',
        m: '',
        s: ''
      }
    },
    computed: {
      hourList () {
        let hour = 24
        let now = []
        for (let i = 0; i < hour; i++) {
          if (i < 10) {
            i = '0' + i
          }
          now.push(i)
        }
        return now
      },
      minuteList () {
        let hour = 60
        let now = []
        for (let i = 0; i < hour; i++) {
          if (i < 10) {
            i = '0' + i
          }
          now.push(i)
        }
        return now
      },
      secondList () {
        let hour = 60
        let now = []
        for (let i = 0; i < hour; i++) {
          if (i < 10) {
            i = '0' + i
          }
          now.push(i)
        }
        return now
      },
      nowTime () {
        if (this.nowHour && this.nowMinute && this.nowSecond) {
          return this.nowHour + ':' + this.nowMinute + ':' + this.nowSecond
        } else {

        }
      }
    },
    methods: {
      hour (key, index, event) {
        this.nowHour = key
        this.h = parseInt(key)
        this.allUl(this.h, event)
      },
      minute (key, index, event) {
        this.nowMinute = key
        this.m = parseInt(key)
        this.allUl(this.m, event)
      },
      second (key, index, event) {
        this.nowSecond = key
        this.s = parseInt(key)
        this.allUl(this.s, event)
      },
      allUl (key, item) {
        if (this.nowHour === '') {
          this.nowHour = '00'
          this.h = 0
        }
        if (this.nowMinute === '') {
          this.nowMinute = '00'
          this.m = 0
        }
        if (this.nowSecond === '') {
          this.nowSecond = '00'
          this.s = 0
        }
        // 滚动到选择项
        let Hei = item.target.offsetHeight
        item.path[1].scrollTop = Hei * key
      },
      clearbox () {
        this.nowHour = ''
        this.nowMinute = ''
        this.nowSecond = ''
        this.h = ''
        this.m = ''
        this.s = ''

        this.status = false
        this.$nextTick(function () {
          this.status = true
        })
      },
      showBox () {
        this.box = true
        let box = document.getElementById('box').children
        let Hei = document.getElementById('box').children[0].children[0].offsetHeight
        if (this.nowTime) {
          if (this.h) {
            box[0].scrollTop = this.h * Hei
          }
          if (this.m) {
            box[1].scrollTop = this.m * Hei
          }
          if (this.s) {
            box[2].scrollTop = this.s * Hei
          }
        }
      }
    },
    watch: {
      nowTime: function (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style lang="scss" scoped>
.time-picker{
  position: relative;
  width: 140px;
}
.show-box {
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  padding: 4px 10px;
  border: 1px solid #eee;
  border-radius: 2px;
  input {
    width: 96%;
    border: none;
    font-size: 12px;
  }
  .fa {
    margin-right: 10px;
    font-size: 12px;
  }
  .fa-times-circle{
    margin: 0;
    color:#666;
    cursor: pointer;
  }
}
.time-box{
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 2px;
  border: 1px solid #eee;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 8px #eee;
  ul{
    overflow-y: auto;
    height: 200px;
    text-align: center;
    li{
      padding: 4px 16px;
      font-size: 12px;
      cursor: pointer;
      &:hover{
        background-color: #f5f5f5;
        color:#409eff;
      }
    }
    .active{
      background-color: #f5f5f5;
      color:#409eff;
    }
  }
  .minute{
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
}
</style>
