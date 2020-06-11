<template>
  <nav class="side-nav">
    <ul class="side-nav-list">
      <slot></slot>
    </ul>
  </nav>
</template>
<script>
export default {
  name:'SideNav',
  data(){
    return {
      items:[],
      currentIndex:0,
    }
  },
  props:{
    list:{
      type:Array,
      default:()=>[]
    },
    defaultIndex:{
       type:Number,
        default:0
    }
  },
  watch:{
    list:{
      handler(val){
        this.menu = val || []
      },
      deep:true
    },
  },
  methods:{
    /**
     *获取节点数据
     */
    getItems() {
      this.items = this.$children.filter(
        child => child.$options.name === 'SideNavItem'
      )
    },
  }
}
</script>
<style lang="scss">
.side-nav{
  height: 100%;
  width: 2.5rem;
  position: relative;
   .side-nav-list {
     width: 100%;
    list-style: none;
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 30px;
    .side-nav-item {
      width: 100%;
      flex: 1;
      background: url('./assets/leftmenu-bglong.png') left center
        no-repeat;
      background-size: 100% 90%;
      position: relative;
      padding: 2rem .5rem;
      writing-mode: vertical-lr;
      color: #fff;
      font-size:0.875rem;
      letter-spacing: 5px;
      cursor: pointer;
      &:hover,
      &.is-active {
        background: url('./assets/leftmenu-onlong.png') left center
          no-repeat;
        background-size: 100% 90%;
      }
    }
  }
}

</style>