<template>
  <div class="booth-page">
    <div class="hello">
      <div class="booth left-in">
        <div class="booth-head">
          <h1><img width="30" src="@/assets/logo.png"/>YLATER</h1>
          <h4>{{currTime}}</h4>
        </div>
        <div class="booth-list">
          <div class="booth-item" @click="handleClick(item)" v-for="item in booth" :key="item.value">
            <div class="booth-card squishy" >{{item.label}}</div>
            <div class="booth-label">{{item.info}}</div>
          </div>
        </div>
        <div class="boot-footer">
          <el-button class="call-me" circle icon="el-icon-phone"></el-button>
        </div>
        <div class="booth-popup" :class="{'active':visiblePopup}">
          <div class="booth-popup-head">
            <el-button circle icon="el-icon-close" @click="visiblePopup = false" size="mini"></el-button>
          </div>
          <div class="booth-popup-body">
             <div class="we-chat"><img src="@/assets/mw.jpeg"/></div>
          </div>
          <div class="booth-popup-footer"></div>         
        </div>
      </div>
   </div>
   <div class="welcome right-in">
     <div class="logo">
     <me-logo></me-logo>
     </div>
     <h1>Hello, I'm Murphy, <br>I build things for the web.</h1>
     <el-button class="visit-more" @click="toHome" round>里面请～<i class="el-icon-right"></i></el-button>
     <p></p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      currTime:'',
      updateTimer:null,
      visiblePopup:false,
      booth:[
        {
          label:'VUE',
          value:'vue',
          info:'Vue生态'
        },
        {
          label:'REACT',
          value:'react',
          info:'react生态'
        },{
          label:'Hybrid',
          value:'hybrid',
          info:'Uni-app,Taro'
        },
        {
          label:'PWA',
          value:'pwa',
          info:'vue,react,h5'
        },
        {
          label:'小程序',
          value:'wmp',
          info:'Uni-app,Taro'
        },
        {
          label:"Amap",
          value:'amap',
          info:'地图开发'
        },
        {
          label:"BUGfix",
          value:'bug',
          info:'代修bug'
        },
        {
          label:"UED",
          value:'ued',
          info:'ui设计、组件开发'
        },
        {
          label:"Murphy",
          value:'murphy',
          info:'诚招女友'
        }
      ]
    }
  },
  created(){   
    this.currTime = ''
      clearInterval(this.updateTimer)
      this.updateTimer = setInterval(() => {
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        if(m<10) m = `${'0'+m}`
        if(s<10) s = `${'0'+s}`
          this.currTime = `${h+':'+ m }`
      }, 1000) 
  },
  methods:{
    /**
     * pickItem
     */
    handleClick(val){
      this.visiblePopup = true
      // this.current = val
    },
    /**
     * 进入网站
     */
    toHome(){
      this.$router.push('/home')
    }
  },
  mounted(){
  },
  beforeCreate(){
     clearInterval(this.updateTimer)
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/hello.less';
</style>