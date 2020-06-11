<template>
  <div class="me-box">
    <div class="border top">
      <img src="./assets/left-top.png"/>
      <img src="./assets/right-top.png"/>
    </div>
    <div class="border bottom">
      <img src="./assets/right-bottom.png"/>
      <img src="./assets/left-bottom.png"/>
    </div>
    <div v-if="title" class="me-box-head">{{title}}</div>
    <div class="me-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'MeBox',
  props:{
    title:{
      type:String,
      default:''
    }
  }
}
</script>
<style lang="scss" scoped>
.me-box{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #00366b;
  box-shadow: inset 0.02273rem 0.02273rem 0.47727rem rgba(70,154,255,.13);
  background: linear-gradient(180deg,rgba(12,48,121,.9),rgba(1,23,81,.9));
  &::before{
    position: absolute;
    top: 0;
    left: 0;
  }
  .me-box-head{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 12px;
    font-weight: 700;
    color: #00eaff;
    background: url('./assets/title-bg.png') no-repeat ;
    background-position: center;
  }
  .me-box-content{
    flex: 1;
  }
  .border{
    position: absolute;
    width: 100%;
    user-select: none;
    &.top{
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &.bottom{
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>