<style>
@import './iconfont/iconfont.css';
</style>
<template>
  <i @click="iconClick" class="iconfont" :class="'icon-'+type"></i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    iconClick() {
      this.$emit('click')
    }
  }
}
</script>
