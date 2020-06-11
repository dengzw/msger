<template>
  <div class="me-map">
    <div class="map-container" id="mineMapContainer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { loadAmap ,loadMineMap} from "_lib/asyncLoad.js"
import config from "_lib/mapconfig.js"
export default {
  name:'MeMap',
  data(){
    return {
      MeMap:null,
      marker:null,
    }
  },
  props:{
    center:{
      type:Array,
      default:()=>[]
    },
  },
  methods:{
    /**
     * 初始化map
     */
    initMap(){
      loadMineMap().then(res=>{
       this.MeMap  = new minemap.Map({
         ...config.mineMapConfig
       })
        this.addMarker()
      })
    },
    /**
     * 设置中心点
     */
    setCenter(val){     
      this.MeMap.setCenter(val)
    },
  },
  watch:{
    center:{
      handler(val){
        if(!val.length) return 
        this.setCenter(val)
      },
      deep:true,
    }
  },
  mounted(){
    this.$nextTick(_=>{
      this.initMap()     
    })
    
  }
}
</script>
<style lang="scss" scoped>
.me-map{
  position: relative;
  width: 100%;
  height: 100%;
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    z-index: 11;
    background: url('./assets/map-layer-bg.webp') 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .map-container{
     width: 100%;
     height: 100%;
  }
 
}
</style>