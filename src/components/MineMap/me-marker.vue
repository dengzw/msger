<template>
  <div class="me-marker"></div>
</template>
<script>
export default {
  name:'MeMarker',
  data(){
    return {
      marker:null
    }
  },
  props:{
    lnglat: {
        type: Array,
        required: true,
      },
      memap: {
        type: Object,
      }
  },
  methods:{
    /**
     * add mark
     */
    addMarker(){
      const minemap = minemap || window.minemap
      const map = this.memap
      let lnglat = this.lnglat
      if(minemap){
        this.marker = new minemap.Marker(el, {offset: [-25, -25]}).setLngLat(lnglat).addTo(map)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.me-marker{
  position: relative;
  &::before{
    content: "";
    width: 6.25rem;
    height: 6.25rem;
    background-size: 100% 100%;
    background-image: url('./assets/icon_video.png') 0 0 no-repeat;;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-animation: alarm-marker 2s linear infinite;
    animation: alarm-marker 2s linear infinite;
  }
}
</style>