<template>
  <div class="me-panel" :class="type">
    <MeLightBorder/>
    <div class="me-panel-head" v-if="title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="me-panel-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'MePanel',
  props:{
    title:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:''
    },
  }
}
</script>
<style lang="scss" scoped>
.me-panel{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg,rgba(7,48,138,.95),rgba(0,37,119,.95) 9%,rgba(3,43,130,.95) 16%,rgba(0,37,119,.95));
  border: 1px solid #133c94;
  box-sizing: border-box;
  .me-panel-head{
    height: 50px;
    text-align: center;
    color: #94e4f7;
    line-height: 2.8125rem;
    font-size: 1rem;
    font-weight: 600;
    background: url('./assets/content-title.png') 0 0 no-repeat;
    background-size: 100% 98%;
  }
  .me-panel-body{
    flex: 1;
    overflow: hidden;
  }
  &.title-left{
    .me-panel-head{
      height: 2.5rem;
      text-align: left;
      background: url('./assets/title-left.png') 0 0 no-repeat;
      font-size: 1rem;
      color: #94e4f7;
      line-height: 2.25rem;
      padding-left: 1.5625rem;
    }
  }
   
}

</style>