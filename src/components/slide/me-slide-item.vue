<template>
  <div class="me-slide-item">
    <span v-show="closeable" class="me-slide-item-close">
      <i @click.stop="removeItem" class="el-icon-delete"></i>
    </span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MeSlideItem',
  inject: ['prev', 'updateItem'],
  props: {
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    removeItem() {
      this.$emit('remove')
      this.$nextTick(_ => {
        this.updateItem()
        this.prev()
      })
    }
  }
}
</script>