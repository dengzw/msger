<template>
  <div class="page-layout">
    <div class="layout-side" :span="6">
      <me-panel class="layout-side-panel" :title="title">
        <div class="layout-side-body">
          <slot name="side"></slot>
        </div>  
      </me-panel>
      <!-- <div class="layout-side-head" v-if="title">
        <img class="head-bg" src="@/assets/images/title-left.png" alt="">
        <h3 class="head-title">{{title}}</h3>
      </div> -->
          
    </div>
    <div class="layout-main" :span="18">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'PageLayout',
  props:{
    title:{
      type:String,
      default:''
    }
  }
}
</script>
<style lang="scss">
.page-layout{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  .layout-side{
    width:25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(180deg, #07308a 0%, #002577 9%, #032b82 16%, #002577 100%);
    box-shadow: 0 0.25rem 0.625rem 0.125rem rgba(0, 19, 53, 0.5);
    border: 1px solid rgba(50, 197, 255, 0.2);
    overflow: hidden;
    .layout-side-panel{
      height: 100%;
      flex: 1;
      .layout-side-body{
        height: 100%;
      }
    }
    .layout-side-head{
      height: 45px;
      overflow: hidden;
      position: relative;
      .head-bg{
        width: auto
      }
      .head-title{
        position: absolute;
        top: 0.5rem;
        left: 0.625rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: #94e4f7;
      }
    }
    .layout-side-body{
      flex: 1;
      overflow: auto;
    }
  }
  .layout-main{
    height: 100%;
    flex: 1;
  }
}
</style>