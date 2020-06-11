<template>
  <div class="chat-page">
    <div class="chat-side left-in" v-show="!visibleVideo" :class="visibleVideo?'left-out':'left-in'">
      <div class="chat-side-head">
        <div class="chat-search">
          <el-input v-model="keyword" placeholder="无关风月，只谈工作。"></el-input>
          <el-button class="search-btn" icon="el-icon-chat-square"></el-button>
        </div>
      </div>
      <div class="chat-side-body right-in">
        <h3 class="chat-title">Inbox</h3>
        <div class="chat-list">
          <div class="chat-item" :class="{'is-active':user.name == item.name}" @click="chatMe(item)" v-for="(item,index) in privateList" :key="index">
            <el-avatar class="chat-avatar" :src="item.avatar"></el-avatar>
            <div class="chat-content">
              <h4>{{item.name}}</h4>
              <p>{{item.msg}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-side-footer"></div>
    </div>
     <div class="video-chat" v-if="visibleVideo">
        <me-cam @close="visibleVideo = false"></me-cam>
      </div>
    <div class="chat-main right-in">     
      <div class="me-chat">
        <div class="me-chat-head">
          <me-user :name="user.name" :src="user.avatar"></me-user>
          <div class="me-chat-tools">
            <div class="tool-item" @click="showVideoChat">
              <i class="el-icon-video-camera"></i>
            </div>
          </div>
        </div>
        <div class="me-chat-body"></div>
        <div class="me-chat-footer">
          <el-input class="chat-input"></el-input>
          <!-- <el-popover></el-popover> -->
          <el-button circle  class="emoji-btn">😊</el-button>
          <!-- <me-emoji></me-emoji> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {chatlist} from './msgs'
import MeCam from '@/components/me-cam/index'
export default {
  components:{
    MeCam
  },
  data() {
    return {
      keyword: "",
      privateList: chatlist,
      msgList: [],
      user:{
        name: '房东的猫',
        avatar: 'https://p1.music.126.net/RTUwmcth8YSOzoFRq5T2pQ==/6036318836818799.jpg',
        msg: '我的最新专辑《岁月忽已暮》发布了, 快来抢先听'
      },
      visibleVideo:false,
      records:[

      ]
    };
  },
  created() {
 
  },
  methods: {
    /**
     * chat me
     */
    chatMe(val){
      this.user = val
    },
    /**
     * enter video chat
     */
    showVideoChat(){
      this.visibleVideo =  true
    }
  }
};
</script>
<style lang="less">
@import "~@/style/chat.less";
</style>

