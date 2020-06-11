<template>
  <div class="phone-wrap animated fadeInUp">
    <div class="phone-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MePhone'
}
</script>

<style lang="less" scoped>
.phone-wrap {
  position: relative;
  width: 330px;
  height: 645px;
  background: url('./iphone.png') no-repeat center 0;
  background-size: 100%;
  .phone-content {
    position: absolute;
    top: 64px;
    left: 21px;
    right: 23px;
    bottom: 22px;
    overflow: hidden;
    border-radius: 0 0 35px 35px;
    border: 1px solid #edf0f4;
    border-top: none;
    background-color: #edf0f4;
  }
}
</style>
