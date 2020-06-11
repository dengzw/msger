<template>
  <div class="cam-page">
    <video class="cam-video"  id="webcam"  :width="videoWidth" :height="videoHeight"  loop preload></video>
    <div class="cam-tools">
      <el-button round @click="pictureIt">拍照</el-button>
      <el-button round @click="closeVideo">关闭</el-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cam-page{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
     border-radius: 24px;
       overflow: hidden;
    .cam-video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
    .cam-tools{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: .5;
    }
}
</style>
<script>
export default {
    name:'MeCam',
    data(){
        return {
            imgSrc:'',
            video:null,
            canvas:null,
            videoWidth:600,
            videoHeight:600
        }
    },
    methods:{
    initVideo() {
      let that = this;
      this.video = document.getElementById("webcam");
      setTimeout(() => {
        if (
          navigator.mediaDevices.getUserMedia ||
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia
        ) {
          //调用用户媒体设备, 访问摄像头
          this.getUserMedia(
            {
              video: {
                width: {
                  ideal: that.videoWidth,
                  max: that.videoWidth
                },
                height: {
                  ideal: that.videoHeight,
                  max: that.videoHeight
                },
                facingMode: "user",    //前置摄像头
                frameRate: {
                  ideal: 30,
                  min: 10
                }
              }
            },
            this.videoSuccess,
            this.videoError
          );
        } else {
          this.$toast.center("摄像头打开失败,请检查权限设置!");
        }
      }, 300);
    },
     getUserMedia(constraints, success, error) {
      if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(success)
          .catch(error);
      } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints, success, error);
      } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia(constraints, success, error);
      } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constraints, success, error);
      }
    },
    videoSuccess(stream) {
      this.mediaStreamTrack = stream;
      this.video.srcObject = stream;
      this.video.play();
    },
    videoError(error) {
      console.error(error);
      this.$toast.center("摄像头打开失败,请检查权限设置!");
    },
    //拍照
    pictureIt(){
        this.canvas = document.createElement("canvas");
        this.canvas.width =this.videoWidth
        this.canvas.height = this.videoHeight
        let context = this.canvas.getContext("2d");
        context.drawImage(this.video, 0, 0, this.videoWidth, this.videoHeight);
        this.imgSrc = this.canvas.toDataURL("image/png");
        },
    //关闭
    closeVideo(){
      this.$emit('close')
      this.video.srcObject.getTracks()[0].stop()
    }
  },
    mounted(){
        this.initVideo()
  },
  beforeDestroy(){
    this.closeVideo()
  }
  
}
</script>