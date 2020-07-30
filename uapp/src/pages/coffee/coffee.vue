<template>
	<view class="me-page">
		<map class="me-map" :longitude="longitude" :latitude="latitude"></map>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: null,
				latitude: null
			};
		},
		onLoad() {
			uni.getLocation({
				type: 'wgs84',
				success: (res) => {
					this.latitude = res.latitude
					this.longitude = res.longitude
				}
			})
		}
	}
</script>

<style lang="less">

</style>
