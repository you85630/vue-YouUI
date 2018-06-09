<template>
  <div class="up-load">
    <i class="fa" :class="type?'fa-image':'fa-file-text'"></i>
    <p v-if="type">点击上传图片</p>
    <p v-else>点击上传文件</p>
    <input type="file" id="input" @change="fileImg">
    <div v-if="type">
      <div class="img-box" v-if="imgData">
        <img :src="imgData" alt="">
        <div class="img-replace">
          <p>点击替换图片</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="img-box" v-if="txtName.name">
        <p class="txt-name">{{txtName.name}}</p>
        <div class="img-replace">
          <p>点击替换文件</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'mold'],
  data () {
    return {
      imgData: this.value,
      txtName: this.value
    }
  },
  computed: {
    type: function () {
      let key = this.mold
      let type = false
      if (key === 'img') {
        type = true
      } else {
        type = false
      }
      return type
    }
  },
  methods: {
    fileImg () {
      let oFile = document.querySelector('#input')
      if (this.mold === 'img') {
        imgInfo(oFile, data => {
        // 插入预览图片
          this.imgData = data
          this.$emit('input', this.imgData)
        })
      } else {
        txtInfo(oFile, data => {
          this.txtName = {
            name: oFile.files[0].name,
            show: data
          }
          this.$emit('input', this.txtName)
        })
      }
      // 图片转换
      function imgInfo (val, data) {
        let reader = new FileReader()
        if (typeof FileReader !== 'undefined') {
          reader.onload = function () {
            data(reader.result)
          }
          reader.readAsDataURL(val.files[0])
        }
      }
      // 文件转换
      function txtInfo (val, data) {
        let reader = new FileReader()
        if (typeof FileReader !== 'undefined') {
          reader.onload = function () {
            data(reader.result)
          }
          reader.readAsBinaryString(val.files[0])
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.up-load {
  position: relative;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  text-align: center;
  &:hover {
    .img-replace {
      display: block;
    }
  }
  p {
    font-size: 14px;
  }
  i {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #999;
    font-size: 40px;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
  }
}
.img-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    box-sizing: border-box;
    width: auto;
    height: 100%;
    border: 1px solid #eee;
  }
  .txt-name{
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .img-replace {
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
    width: 100px;
    height: 100px;
    background-color: rgba($color: #000000, $alpha: 0.4);
    color: #fff;
    cursor: pointer;
    p {
      line-height: 100px;
    }
  }
}
</style>
