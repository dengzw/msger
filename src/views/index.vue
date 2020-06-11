<template>
 <div class="me-page">
    <header class="me-page-header " :class="visibleNav? 'left-in':'left-out'">
       <div class="logo" @click="$router.push('/')">
         <img src="@/assets/ylater.svg"/> 
         <span>YLATER</span>
      </div>
      <div class="me-menu-box">
        <ul class="me-menu">
          <li class="me-menu-item"  @click="handleMenuClick(item)" :class="{'is-active':activeIndex == item.key}" v-for="item in menu" :key="item.key">
            <i :class="item.icon"></i>
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
    </header>
    <main class="me-page-main right-in">
      <!-- <transition name="slide-right">
        <router-view class="router-page right-in"/>
     </transition> -->
     <router-view class="router-page"/>
    </main>
  </div>
</template>
<script>
export default {
  data(){
    return {
      config:{
        header:'top'
      },
      activeIndex:'home',
      menu:[
        {
          label:'工作面板',
          key:'Home',
          path:'/home',
          icon:'el-icon-news'
        },
        {
          label:'Coding',
          key:'Coding',
          path:'/coding',
           icon:'el-icon-mouse'
        },
        {
          label:'咖啡地图',
          key:'Map',
          path:'/map',
          icon:'el-icon-coffee'
        },
         {
          label:'Messenger',
          key:'Msger',
          path:'/msger',
          icon:'el-icon-chat-line-square'
        },
        {
          label:'聊天',
          key:'Chat',
          path:'/chat',
           icon:'el-icon-chat-square'
        },
        {
          label:'关于',
          key:'About',
          path:'/about',
          icon:'el-icon-help'
        }
      ]
    }
    
  },
  methods:{
    handleMenuClick(val){
      this.activeIndex = val.key
      this.$router.push(val.path)
    }
  },
  computed:{
     visibleNav(){
       return this.$route.name !== 'About'
     }
  },
  watch:{
    $route:{
      handler(val){
        this.activeIndex = val.name       
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.me-page{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .me-page-header{
    height: 100%;
    width: 320px;
    border-radius: 0 50px 50px 0;
    display: flex;
    flex-direction: column;
    background-color: #2b3042;
    .logo{
      width: 100%;
      height: 60px;
      padding: 12px;
      font-size:18px;
      letter-spacing: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      img{
        height: 100%;
        margin-right: 8px;
      }
    }
  }
  .me-menu-box{
    flex: 1;
    .me-menu{
      background-color: #262839;
      list-style: none;
      .me-menu-item{
        padding: 12px 24px;
        color: #eee;
        font-size: 14px;
        font-weight: lighter;
        cursor: pointer;
        transition: all .5s;
        background-color: #2c3142;
        position: relative;
        i{
          font-size: 18px;
          margin-right: 24px;
        }
        &.is-active{
          background-color: #262839;
          transition: all .5s;
          &::after{
            position: absolute;
            content: '';
            width: 3px;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: #4F987C;
          }
        }
      }
    }
  }
  .me-page-main{
    flex: 1;
  }
}
.router-page{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>