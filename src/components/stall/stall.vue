<template>
  <canvas class="stall"  ref="stall" width="800" height="800"></canvas>
</template>
<script>
import Zdog from "zdog";
export default {
  name: "MeStall",
  data() {
    return {
      stall:null,
      isSpinning:true
    };
  },
  methods: {
    /**
     * 初始化logo
     */
    initStall() {
       this.stall = new Zdog.Illustration({
        element: '.stall',
         dragRotate: true,
         onDragStart: ()=> {
           this.isSpinning = false
          }
      })
      let box = new Zdog.Box({
        addTo: this.stall,
        width: 600,
        height: 450,
        depth: 10,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
      })
      new Zdog.Text({
          addTo: this.stall,
          value: '前端摊位',
          fontSize: 14,
          color: '#fff',
          fill: true,
          translate: { x: -300, y: -205, z: 26 },
      })

      this.$nextTick(_=>{
        this.stall.updateRenderGraph()
      })      
    },
    animate() {
      this.stall.rotate.y += this.isSpinning ? 0.03 : 0;
      this.stall.updateRenderGraph()
      requestAnimationFrame( this.animate );
    }
  },
  mounted(){
    this.initStall()
    this.animate()
  },
  beforeDestroy(){
    this.stall = null
  }
}
</script>
<style lang="less" scoped>
.stall{
  cursor: move;
}
</style>