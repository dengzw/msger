<template>
<view class="me-page about-page">
	<me-head></me-head>
 	<view class="name-card">
		<view class="name-card-avatar">
			<image class="avatar" mode="aspectFill" src="https://www.ylater.com/img/my.ecd5e973.jpeg"></image>
		</view>
		<view class="name">Murphy</view>
	</view>
	<view class="uer-info me-cell-list">
		<view class="me-cell">
			<view class="cell-label">Name</view>
			<view class="cell-content">邓志为</view>
		</view>
		<view class="me-cell">
			<view class="cell-label">Email</view>
			<view class="cell-content">dzwzs@sina.cn</view>
		</view>
		<view class="me-cell">
			<view class="cell-label">Phone</view>
			<view class="cell-content">15980815462</view>
		</view>
		<view class="me-cell">
			<view class="cell-label">Github</view>
			<view class="cell-content">https://github.com/dengzw</view>
		</view>
		<view class="me-cell">
			<view class="cell-label"></view>
			<view class="cell-content">https://www.ylater.com/</view>
		</view>
		<view class="me-cell">
			<view class="cell-label">Resume</view>
			<view class="cell-content">https://ylater.com/Resume.pdf</view>
		</view>
	</view>
</view>
</template>
<script>
export default {
  name:'MeBadge',
  data(){
    return {}
  }
}
</script>
<style lang="less" scoped>
@green:#3f9d77;
@red:#d9594b;
@yellow:#e0a357;
@blue:#52a2be;

.about-page{
	padding: 0 24rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.uer-info {
		flex: 1;
	}
}
.name-card{
  padding: 48rpx;
  width:100%;
  text-align: center;
  .name{
    font-size: 20px;
    font-weight: 200;
    text-shadow: 2px 1px 0px #000000;
  }
  .name-card-avatar{
    width: 240rpx;
    height: 240rpx;
		margin: 48rpx  auto;
		padding: 12rpx;
    overflow: hidden;
    border-radius: 50%;
    border: 2px dashed @blue;
    border-top-color: @blue;
    border-right-color: @red;
    border-bottom-color: @green;
    border-left-color: @yellow;
    .avatar{
      width: 100%;
			height: 100%;
			border-radius: 50%;
    }
  }
  .base{
    // color: #262939;
    text-shadow: 2px 1px 0px #000000;
    line-height: 30px;
    font-size: 15px;
    letter-spacing: 5px;
    opacity: .5;
  }
}

</style>