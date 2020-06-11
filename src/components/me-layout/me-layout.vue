<template>
  <div class="me-layout">
    <div class="me-layout-side">
        <slot name="side"></slot>
    </div>
    <div class="me-layout-main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'MeLayout'
}
</script>
<style lang="scss" scoped>
.me-layout{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .me-layout-side{
    width: 300px;
    height: 100%;
    // border-right: 2px solid #1e1d2a;
  }
  .me-layout-main{
    flex: 1;
    height: 100%;
    padding: 12px;
    overflow: auto;
  }
}
</style>