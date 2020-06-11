<template>
  <div class="me-page">
   <slot></slot>
  </div>
</template>
<script>
export default {
  name:'MePage'
}
</script>
<style lang="scss" scoped>
.me-page{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>