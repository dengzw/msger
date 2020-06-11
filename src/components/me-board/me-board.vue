<template>
  <div class="me-board">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MeBoard',
}
</script>
<style lang="less" scoped>
.me-board{
  padding: 12px;
  border-radius: 12px;
}
</style>