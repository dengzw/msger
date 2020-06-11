<template>
  <div class="about-page">
    <div class="back-btn" @click="goBack"><i class="el-icon-back"></i></div>
     <div class="contact-card left-in">
      <div class="card-band"></div>
      <div class="name-card">
        <h3>邓志为</h3>
        <div class="name-card-avatar">
          <img src="@/assets/my.jpeg">
        </div>
        <div class="name-card-content">
          <div class="base">
            <p>dzwzs@sina.cn</p>
            <p>15980815462</p>
          </div>          
        </div>
      </div>
      <div class="contact-card-footer">最美不过，半生无悔。</div>
    </div>
    <div class="about-main right-in">
      <div class="my-title">
        <div class="text-d">D.</div>
        <div class="base">
          <p>Web前端工程师</p>
          <p>UI / UE设计</p>
        </div>
      </div>
      <div class="my-info">
        <div class="info-text">你好，<a>我</a>是一名前端工程师，工作居住在厦门；
        UI设计师出身，后转web前端开发；
        目前司职北京艾迪信（厦门）科技有限公司web前端工程师；
        个人专攻web、小程序、Hybrid App等前端开发；有工作推荐，请联系我。
        </div>
        <div class="contact-me">
          <a class="email" href="mailto:dzwzs@sina.cn">Email</a>
          <a class="resume" target="_blank" href="https://ylater.com/Resume.pdf">Resume</a>
          <a class="github">Github</a>
        </div>    
      </div>
    </div>   
  </div>
</template>
<script>
import MeStall from '@/components/stall/index.js'
export default {
  components:{
    MeStall
  },
  data(){
    return {

    }
  },
  created(){

  },
  methods:{
    /**
     * goBack
     */
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
@green:#3f9d77;
@red:#d9594b;
@yellow:#e0a357;
@blue:#52a2be;
.back-btn{
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;
  top: 20px;
  left: 24px;
  border: 2px dashed @blue;
  border-top-color: @blue;
  border-right-color: @red;
  border-bottom-color: @green;
  border-left-color: @yellow;
  &:hover{
    background-color: @green;
    border-color: @green;
  }
}
.about-page{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  .about-main{
    padding: 100px;
    flex: 1;
    max-width: 800px;
  }
}



.text-d{
  font-weight: 1000;
  font-size: 240px;
  height: 200px;
  line-height: 200px;
  margin-right: 60px;
  opacity: .1;
}
.info-text{
  font-size: 18px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 2px;
  opacity: .5;
  margin: 12px 0;
}
.my-photo{
  width: 300px;
  // height: 300px;
  // border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.my-info{
  padding: 24px 12px;
}
.my-title{
  display: flex;
  align-items: flex-end;
  font-size: 13px;
  font-weight: 300;
  line-height: 30px;
}
.contact-card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  width: 300px;
  height: 450px;
  background-color: #2c3142;
  border-radius: 24px;
  overflow: hidden;
  transition: all .5s;
  box-shadow: inset 5px 5px 15px #2c3142, inset -5px -5px 15px #262939, 3px 3px 5px rgba(0, 0, 0, 0.7);
  background-image: url('~@/assets/svg/bg.svg');
  .card-band{
    width: 80px;
    margin: 24px auto;
    height: 12px;
    border-radius: 20px;
    background-color: #262939;
  }
  .contact-card-footer{
    height: 60px;
    text-align: center;
    opacity: .5;
    text-shadow: 2px 1px 0px #000000;
  }
}

.name-card{
  flex: 1;
  padding: 0 24px;
  width:100%;
  text-align: center;
  h3{
    font-size: 20px;
    font-weight: 200;
    text-shadow: 2px 1px 0px #000000;
  }
  .name-card-avatar{
    width: 120px;
    height: 120px;
    margin: 24px  auto;
    overflow: hidden;
    border-radius: 50%;
    border: 5px dashed @blue;
    border-top-color: @blue;
    border-right-color: @red;
    border-bottom-color: @green;
    border-left-color: @yellow;
    img{
      width: 100%;
      height: 100%;
      padding: 10px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .base{
    // color: #262939;
    text-shadow: 2px 1px 0px #000000;
    line-height: 30px;
    font-size: 15px;
    letter-spacing: 5px;
    opacity: .5;
  }
}

.contact-me{
  width: 100%;
  padding: 12px 0;
  a{
    display: inline-flex;
    position: relative;
    color: #fff;
    margin-right: 20px;
    min-width: 120px;
    line-height: 45px;
    font-size: 18px;
    transition: all .5s;
    cursor: pointer;
    &::before{
      position: absolute;
       transition: all .5s;
      content: '';
      width: 20px;
      height: 5px;
      left: 0;
      bottom: 0;
      background-color: @green;
    }
    &.resume{      
       &::before{
         background-color: @yellow;
       }
    }
    &.github{
       &::before{
         background-color: @blue;
       }
       &:hover{
         color: @blue;
       }
    }
    &:hover{
       transition: all .5s;
       color: @green;
       &.resume{
         color: @yellow;
       }
      &::before{
         transition: all .5s;
        width: 100%;
      }
    }
  }
}
</style>