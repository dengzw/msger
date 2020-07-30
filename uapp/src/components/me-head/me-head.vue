<template>
  <view class="me-head">
    <view class="me-status-bar"></view>
    <view class="me-top-bar">
      <view class="me-bar-left">
				<slot name="left">
					<me-btn class="back-btn" @click="goBack" v-if="back">
						<me-icon>&#xe80d;</me-icon>
					</me-btn>
       </slot>
      </view>
      <view class="me-bar-title">{{title}}</view>
      <view class="me-bar-right">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    },
		back:{
			type:Boolean,
			default:true
		}
  },
  data(){
    return{

    }
  },
	methods:{
		goBack(){
			uni.navigateBack()
		}
	}
}
</script>
<style lang="less">
	.back-btn{
		width: 48rpx;
		height: 48rpx;
	}
	.me-head{
		position: sticky;
		z-index: 10;
		top: 0;
		background-color: #262939;
		padding-bottom: 16rpx;
	}
  .me-status-bar {
      height: var(--status-bar-height);
      width: 100%;
  }
	.me-top-bar{
		padding: 0 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.me-bar-left{
			width: 72rpx;
		}
		.me-bar-title{
			flex: 1;
			overflow: hidden;
			text-align: center;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 28rpx;
		}
		.me-bar-right{
			width: 72rpx;
		}
	}
</style>