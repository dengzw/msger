<template>
  <div class="me-lignt-border">
    <div class="border top">
      <img src="./assets/left-top.png" />
      <img src="./assets/right-top.png" />
    </div>
      <div class="border bottom">
        <img src="./assets/right-bottom.png" />
        <img src="./assets/left-bottom.png" />
      </div>
  </div>
</template>
<script>
export default {
  name:'MeLightBorder'
}
</script>
<style lang="scss" scoped>
.me-lignt-border{
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  .border{
    position: absolute;
    width: 100%;
    user-select: none;
    display: flex;
    align-items: center;
    &.top{
      top: 0;
      left: 0;
      justify-content: space-between;
    }
    &.bottom{
      bottom: 0;
      left: 0;
      justify-content: space-between;
    }
  }
}
</style>