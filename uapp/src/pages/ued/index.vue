<template>
	<view class="me-page ued-page">
		<me-head title="UED"></me-head>
		<view class="ued-list">
			<view class="ued-item" v-for="item in list" :key="item._id" @click="visitWeb(item)">
        <view class="ued-cover">
          <image class="ued-cover-img" :src="item.media"></image>
        </view>
				<view class="ued-info">
				<view class="ued-title">{{item.title}}</view>
				<!-- <view class="ued-tags">
          <button class="me-btn" v-for="tag in item.tags" :key="tag">{{tag}}</button>
        </view> -->
				<view class="ued-colors" v-if="item.colors">
            <view class="color" v-for="(color,index) in item.colors" :key="index" 
            :style="'background-color:'+color.value" ></view>

        </view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [],
				page: 1,
				keyword: ''
			}
		},
		onLoad() {
			this.getShorts()
		},
		methods: {
			/**
			 * 获取列表
			 */
			getShorts() {
				let params = {
					pageNum: this.page,
					pageSize: 10,
					tag: this.keyword
				}
				this.$api.getShot(params).then(data => {
					this.list = [...this.list, ...data.data.list]
					this.total = data.data.total
				})

			},
			/**
			 * 访问详情
			 * @param {Object} val
			 */
			visitWeb(val){
				console.log(val)
				uni.navigateTo({
					url:'/pages/web/web?url='+val.url
				})
			},
		},
	}
</script>
<style lang="less" scoped>
.ued-list{
  width: 100%;
  position: relative;
  padding: 48rpx;
  .ued-item{
    width: 100%;
    margin: 24rpx auto;
    .ued-cover{
      height: 480rpx;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 24rpx 24rpx 0 0;
      overflow: hidden;
      .ued-cover-img{
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
		.ued-info{
			padding: 24rpx;
			border-radius:  0 0 24rpx 24rpx;
      background-color: #2b3042;
      background: linear-gradient(145deg, #282c3b, #2f3447);
      box-shadow:  38px 38px 36px #292e3d, 
                  -38px -38px 36px #2f3447;
    }
    
    .ued-title{
      font-size: 30rpx;
			margin-bottom: 24rpx;
    }
		.ued-tags{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}
		.ued-colors{
			display: flex;
      align-items: center;
      .color{
        width: 48rpx;
        height: 32rpx;
        &:first-child{
          border-radius: 16rpx 0 0 16rpx;
        }
        &:last-child{
          border-radius:0  16rpx  16rpx 0;
        }
      }
		}
  }
}

</style>