<template>
  <div class="layout-card">
    <div class="layout-card-head">
      <slot name="header">
        <h4>{{title}} <img v-if="showClose" @click="close"  class="close-btn" src="data:image/png;base64,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" alt=""></h4>
      </slot>
    </div>
    <div class="layout-card-body">
      <slot></slot>
    </div>
    <div v-if="footer"  class="layout-card-footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'LayoutCard',
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "这是标题"
    },
    footer:{
      type:Boolean,
      default:true
    },
    showClose:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-card {
  height: 100%;
  background: url("./assets/rightcol-bg.png") center no-repeat;
  background-size: 100% 100%;
  margin-left: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .layout-card-head {
    position: relative;
    height: 50px;
    background: url("./assets/widow-tit.png") center no-repeat;
    background-size: 100% 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
      font-size: 1rem;
      font-weight: 500;
      color: #94e4f7;
    }
  }
  .layout-card-body{
    flex: 1;
    overflow: hidden;
  }
  .layout-card-footer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    background: #052770;
    box-shadow: 0 0 2.0625rem 0 rgba(50, 197, 255, 0.19);
    border: 0.0625rem solid rgba(50, 197, 255, 0.2);
  }
  .close-btn{
    display: inline-flex;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 0.625rem;
  }
}
</style>