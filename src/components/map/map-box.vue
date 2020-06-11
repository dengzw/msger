<template>
  <div :id="id" class="me-map">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MeMapBox'
}
</script>
<style lang="scss">
//map
.me-map {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    z-index: 11;
    background:  url('./assets/map-layer-bg.webp') 0 0 no-repeat;
    background-size: 100% 100%;
  }
}
.amap-marker{
  &::before{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20px;
    left: 20px;
    transform: translate(-50%,-50%);
    background: url('data:image/png;base64,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');
    content: '';
    background-size: 100% 100%;
    border-radius: 50%;
    animation: alarm-marker 2s linear infinite;
  }
}

@keyframes alarm-marker{
  0%{
    width:20px;
    height:20px;
    opacity:1;
  }
  30%{
    width:40px;
    height:40px;
    opacity:.8;
  }
  60%{
    width:60px;
    height:60px;
    opacity:.6;
  }
  
  80%{
    width:80px;
    height:80px;
    opacity:.5;
  }

  100%{
    width:100px;
    height:100px;
    opacity:.1;
  }
  
}
</style>