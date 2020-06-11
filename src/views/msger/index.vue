<template>
  <me-layout>
    <div class="flow-side left-in" slot="side">
      <div class="flow-head">
        <h3>信息流主体</h3>
        <div class="flow-item is-active">
          <i class="el-icon-chat-line-square"></i>
           <span>{{flow.head.name}}</span>
        </div>
         <h3>关联信息流</h3>
      </div>
      <div class="flow-body">
        <div class="flow-list">
           <div class="flow-item" :class="{'is-active':currentFlow.id == item.id}" @click="pickFlow(item)" v-for="item in flow.child_list" :key="item.id">
            <i class="el-icon-chat-line-square"></i>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flow-editor right-in">
      <div class="flow-editor-nav">
          <draggable
          class="steam-tools"
          tag="div"
          :list="toolsList"
          :clone="cloneDog"
          :sort="false"
          :group="{ name: 'flow', pull: 'clone', put: false }"
        >
          <div
            class="steam-tools-item"
            v-for="item in toolsList"
            :key="item.title"
            @click="addMsgItem(item)"
          >
            <div class="steam-tools-icon">
              <icon :type="item.icon"></icon>
            </div>
            <div class="steam-tools-title">{{item.title}}</div>
          </div>
        </draggable>
      </div>
      <div class="flow-editor-main">
        <div class="editor-head">
          {{currentFlow.name}}
        </div>
        <div class="editor-body"></div>
        <div class="editor-footer"></div>
      </div>
      <div class="flow-editor-side">
        <me-phone></me-phone>
      </div>
    </div>
  </me-layout>
</template>
<script>
import draggable from 'vuedraggable'
import  flowData from './flow.json'
import Icon from '@/components/icon/index.js'
import MePhone from '@/components/iphone/index'
export default {
  components:{
    draggable,
    Icon,MePhone
  },
  data(){
    return {
      flow:flowData.data,
      currentFlow:'',
      // 工具列表
      toolsList: [
        {
          type: 'question',
          icon: 'solution',
          title: '用户问答'
        },
        {
          type: 'text',
          icon: 'file-text',
          title: '文本消息'
        },
        {
          type: 'image',
          icon: 'image',
          title: '图片'
        },
        {
          type: 'template',
          icon: 'slide',
          title: '卡片消息'
        },
        {
          type: 'audio',
          icon: 'sound',
          title: '音频'
        },
        {
          type: 'video',
          icon: 'video',
          title: '视频'
        },
        {
          type: 'file',
          icon: 'file',
          title: '附件'
        },
        {
          type: 'delay',
          icon: 'clock-circle',
          title: '正在输入'
        }
      ],
    }
  },
  created(){
    console.log(this.flow)
  },
  methods:{
    cloneDog(){},
    /**
     * 切换关联信息流
     */
    pickFlow(val){
      this.currentFlow =val
    }
  },
}
</script>
<style lang="less">
@import '~@/style/msger.less';
</style>