<template>
	<view class="home">
		<view class="home-head">
				<image class="logo" src="@/static/logo.png"></image>
				<text class="logo-text text-color">YLATER</text>
			</view>
		<view class="home-body">
			<view class="me-nav">
				<view class="me-nav-item" v-for="item in menu" :key="item.value" > 
					<view class="nav-btn">
						<button class="me-btn" @click="navClick(item)" hover-class="me-btn-hover">{{item.label}}</button>
					</view>
					<view class="nav-name">{{item.info}}</view>
				</view>
			</view>
		</view>
		<view class="home-footer">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				menu:[
        {
          label:'City',
          value:'Bottle',
					path:'/pages/city/city',
          info:'城市故事'
        },
        {
          label:'Vlog',
          value:'react',
          info:'Vlog'
        },{
          label:'Hybrid',
          value:'hybrid',
          info:'Uni-app,Taro'
        },
        {
          label:'PWA',
          value:'pwa',
          info:'vue,react,h5'
        },
        {
          label:'小程序',
          value:'wmp',
          info:'Uni-app,Taro'
        },
        {
          label:"Map",
          value:'Map',
					path:'/pages/coffee/coffee',
          info:'咖啡地图'
        },
        {
          label:"webgl",
          value:'webgl',
					path:'/pages/webgl/webgl',
          info:'webgl'
        },
        {
          label:"UED",
					value:'ued',
					path:'/pages/ued/index',
          info:'ui设计、组件开发'
        },
        {
          label:"About",
					path:'/pages/about/about',
          value:'MeBadge',
          info:'关于我啊'
        }
      ]
			}
		},
		onLoad() {

		},
		methods: {
			/**
			 * navClick 
			 */
			navClick(val){
				if(val.path){
					uni.navigateTo({
						// animationType: 'zoom-fade-out',
						url:val.path
					})
				}
			}
		}
	}
</script>
<style lang="less" scoped>
.home{
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.home-head{
		width: 100%;
		height: 300rpx;
		padding-top: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.home-body{
		width: 100%;
		flex: 1;
	}
	.home-footer{
		width: 100%;
		height: 300rpx;
	}
}
.logo{
	width:64rpx;
	height:64rpx;
	margin-right: 16rpx;
}
.logo-text{
	  font-size: 48rpx;
    text-align: center;
    letter-spacing: 10rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}
//menu
.me-nav{
	padding: 24rpx;
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: space-between;
	.me-nav-item{
		min-width: 33.333%;
		margin: 24rpx auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		
		.nav-btn{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.me-btn{
				margin: 24rpx;
				width: 128rpx;
				height: 128rpx;
				font-size: 26rpx;
			}
		}
			.nav-name{
			font-size: 24rpx;
			opacity: .5;
		}
	}
}

</style>