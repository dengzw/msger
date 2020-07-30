<template>
	<button class="me-btn" @click="click" hover-class="me-btn-hover">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			click(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="less">

</style>
