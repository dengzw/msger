<template>
  <div class="home-page">
      <div class="home-main">
        <div class="today-panel">          
          <div class="art-box">
            <h2>Hello，Murphy</h2>
          </div>
          <div class="today-info">
            <h3>最美,不过半生无悔.</h3>
            <!-- <div class="today-date">{{new Date().getFullYear()}}{{new Date().getMonth()+1}}{{new Date().getDay()}}</div> -->
          </div>
          <div class="ca-card">
            <div class="ca-time">{{currTime}}</div>
          </div>             
        </div>
        <div class="board-wrap">
          <h3 class="board-title">一些卡片</h3>
          <div class="board-list">
            <div class="board"></div>
          </div>
        </div>
        <div class="board-wrap">
          <h3>又是些卡片</h3>
        </div> 
      </div>
      <div class="home-side right-in">
        <div class="home-side-head">
          <div class="home-user">
            <div class="user-name">HI~,I'm Murphy</div>
            <div class="user-avatar"><img src="@/assets/murphy.jpg"/></div>
          </div>   
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      currTime:'',
      updateTimer:null,
    }
  },
  created () {
      this.currTime = ''
      clearInterval(this.updateTimer)
      this.updateTimer = setInterval(() => {
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        if(m<10) m = `${0+m}`
        if(s<10) s = `${0+s}`
          this.currTime = `${h+':'+ m }`
      }, 1000)
  },
  mounted () {
    
  },
  beforeDestroy () {
      clearInterval(this.updateTimer)
  },
}
</script>
<style lang="scss">
@import '~@/style/home.scss';
</style>