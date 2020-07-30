<template>
	<view class="me-page city">
		<me-head></me-head>
		<view class="city-list">
		<view class="city-item" v-for="item in list" :key="item._id" @click="showDetail(item)">
			<image class="city-cover" :src="item.cover"></image>
			<view class="city-info">
				<view class="name">{{item.city}}</view>
				<view class="date">{{item.date}}</view>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad() {
			this.getList()
		},
		methods: {
			/**
			 * 获取列表
			 */
			getList() {
				this.$api.getTravel().then(data => {
					this.list = data.data.list
				})
			},
			/**
			 * 看大图
			 */
			showDetail(city){
				if(!city.imgs.length) return 
				uni.previewImage({
					urls:city.imgs
				})
			}
		}
	}
</script>

<style lang="less">
.city{
	width: 100%;
	.city-list{
		width: 100%;
		padding: 48rpx;
	}
	.city-item{
		position: relative;
		margin-bottom: 48rpx;		
		.city-cover{
			width: 100%;
			height: 480rpx;
			border-radius: 24rpx;
			overflow: hidden;
		}
		.city-info{
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			padding: 48rpx;
			z-index: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-end;
			border-radius: 24rpx;
			background-color: rgba(0,0,0,.2);
			.name{
				font-size: 44rpx;
				font-weight: bold;
				margin-bottom: 16rpx;
			}
			.date{
				font-size: 30rpx;
			}
		}
	}
}
</style>
