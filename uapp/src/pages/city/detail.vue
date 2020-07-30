<template>
	<view class="city-detail">
		<view class="city-media">
			<swiper class="swiper" >
				<swiper-item v-for="img in city.imgs" :key="img">
						<image :src="img"></image>
				</swiper-item>
		</swiper>
		</view>
		<view class="city-content">
			<view class="city-story">{{city.title}}</view>
			<view class="city-story">{{city.content}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city:{}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">

</style>
