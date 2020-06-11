<template>
  <div class="phone-wrap animated fadeInUp">
    <div class="phone-content">
      <slot>
        <div class="messenger">
          <div class="messenger-list">
            <!-- <el-avatar icon="el-icon-user-solid" :src="$store.state.user.currentPage.avatar_url"></el-avatar> -->
            <div class="messenger-text" v-html="text"></div>
          </div>
          <div class="messenger-list right">
            <div class="messenger-text">Hello</div>
            <avatar size="45" class="avatar" name="L"></avatar>
          </div>
          <div class="messenger-list">
            <!-- <el-avatar icon="el-icon-user-solid" :src="$store.state.user.currentPage.avatar_url"></el-avatar> -->
            <div class="messenger-text" v-html="reply"></div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MePhone',
  props: {
    text: {
      type: String,
      default:
        'Welcome! 👋 Thank you for subscribing. The next post is coming soon, stay tuned!P.S. If you ever want to unsubscribe just type "stop".'
    },
    reply: {
      type: String,
      default: 'Hi，thank you for leaving a comment,can I messenger you here！'
    }
  }
}
</script>

<style lang="less" scoped>
.phone-wrap {
  position: relative;
  width: 330px;
  height: 645px;
  background: url('./iphone.png') no-repeat center 0;
  background-size: 100%;
  .phone-content {
    position: absolute;
    top: 64px;
    left: 21px;
    right: 23px;
    bottom: 22px;
    overflow: hidden;
    border-radius: 0 0 35px 35px;
    border: 1px solid #edf0f4;
    border-top: none;
    background-color: #edf0f4;
  }
}
.messenger {
  width: 100%;
  min-height: 100%;
  padding: 20px 12px;
  background-color: #fff;
  .messenger-list {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    &.right {
      justify-content: flex-end;
      align-items: flex-end;
      .avatar {
        margin-right: 0;
        margin-left: 12px;
      }
      .messenger-text {
        background-color: #1890ff;
        color: #fff;
      }
    }
    .el-avatar {
      margin-right: 12px;
    }
    .messenger-text {
      max-width: calc(100% - 60px);
      background-color: #eee;
      border-radius: 10px;
      padding: 12px;
      font-size: 15px;
      word-break: break-all;
    }
  }
}
</style>




