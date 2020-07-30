<template>
	<canvas style="width: 300px; height: 200px;" class="me-logo" ref="ylater" canvas-id="ylater"></canvas>
</template>
<script>
import Zdog from "zdog";
export default {
  name: "MeLogo",
  data() {
    return {
      logo:null
    };
  },
  methods: {
    /**
     * 初始化logo
     */
    initLogo() {
       this.logo = new Zdog.Illustration({
        element: this.$refs['ylater'],
         dragRotate: true,
         onDragStart: ()=> {
          }
      });
      // add circle
      new Zdog.Ellipse({
        addTo: this.logo,
        diameter: 120,
        stroke: 15,
        color: "#2c3142"
      })

      new Zdog.Ellipse({
        addTo: this.logo,
        diameter: 24,
        translate: { x: 50, y: -50 },
        stroke: 0,
        color: "#2c3142",
        fill: true
      });
      new Zdog.Ellipse({
        addTo: this.logo,
        diameter: 24,
        translate: { x: -50, y: -50 },
        stroke: 0,
        color: "#2c3142",
        fill: true
      });

      
      new Zdog.RoundedRect({
        addTo: this.logo,
        width: 220,
        height: 220,
        cornerRadius: 110,
        translate: {},
        stroke: 15,
        color: "#2c3142",
        fill: false
      });

      new Zdog.RoundedRect({
        addTo: this.logo,
        width: 10,
        height: 50,
        cornerRadius: 20,
        translate: { x: 0, y: 5 },
        stroke: 10,
        color: "#2c3142",
        fill: false
      });


      this.$nextTick(_=>{
        this.logo.updateRenderGraph()
      })      
    },
    /**
     * logo animate
     */
    logoAnimate() {
      // rotate illo each frame
      this.logo.rotate.y += 0.01;
      this.logo.updateRenderGraph();
      // animate next frame
      requestAnimationFrame(this.logoAnimate );
    }
  },
  onShow(){
		setTimeout(_=>{
			this.initLogo()
			this.logoAnimate()
		},1000)
    
  },
  beforeDestroy(){
    this.logo = null
  }
}
</script>