<template>
  <div class="setting-page">
    <div class="setting-form left-in">
      <el-form :data="configs" size="small">
        <el-form-item label="主题">
          <el-radio-group v-model="configs.theme">
            <el-radio-button :label="0">深色</el-radio-button>
            <el-radio-button :label="1">浅色</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="导航位置">
          <el-radio-group>
            <el-radio>左</el-radio>
            <el-radio>上</el-radio>
            <el-radio>右</el-radio>
            <el-radio>下</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      configs:{
        nav:1,//0上1左2下3右
        theme:0,//0深1浅
      }
    }
  }
}
</script>
<style lang="less" scoped>
.setting-page{
  padding: 100px;
  height: 100%;
  display: flex;
  align-items: center;align-items: center;
  justify-content: center;
  .setting-form{
    flex: 1;
    height: 100%;
    padding: 24px;
    border-radius: 10px;
    background-color: #2b3042;
  }
}
</style>