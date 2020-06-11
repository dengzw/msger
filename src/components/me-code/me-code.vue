<template>
  <div class="me-editor">
    <div class="me-editor-containter" ref="meCode"></div>
  </div>
</template>
<script>
import * as monaco from 'monaco-editor'
export default {
  name:'MeCode',
  data(){
    return {
      editorOptions: {
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: true, // 只读
          cursorStyle: 'line', // 光标样式
          automaticLayout: false, // 自动布局
          glyphMargin: true, // 字形边缘
          useTabStops: false,
          fontSize: 28, // 字体大小
          autoIndent: false // 自动布局
        }
    }
  },
  props:{
    code:{
      type:String,
      default:''
    }
  },
  mounted () {
    this.monacoEditor = monaco.editor.create(this.$refs.meCode, {
      value: this.code, // 见props
      language: 'javascript',
      theme: 'vs-dark', // 编辑器主题：vs, hc-black, or vs-dark，更多选择详见官网
      editorOptions: this.editorOptions // 同codes
    })
  }
}
</script>
<style lang="scss" scoped>
.me-editor{
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 600px;
  .me-editor-containter{
    width: 100%;
    height: 100%;
  }
}
</style>