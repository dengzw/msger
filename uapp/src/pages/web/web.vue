<template>
  <web-view :webview-styles="webviewStyles" :src="url"></web-view>
</template>
<script>
export default {
  data() {
    return {
      url: '',
			webviewStyles: {
				progress: {
					color: '#FF3333',
					},
				}
    }
  },
  onLoad(val) {
    this.url =val.url
  }
}
</script>