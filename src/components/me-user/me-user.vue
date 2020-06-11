<template>
  <div class="me-user">
    <div v-if="src" class="me-user-avatar">
      <img :src="src"/>
    </div>
    <div class="me-user-info">
      <h3>{{name}}</h3>
      <p v-if="label">
        <slot>{{label}}</slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name:'MeUser',
  props:{
    src:{
      type:String
    },
    name:{
      type:String
    },
    label:{
      type:String
    }
  }
}
</script>
<style lang="less" scoped>
.me-user{
  padding: 8px;
  display: flex;
  align-items: center;
  .me-user-avatar{
    width: 36px;
    height: 36px;
    margin-right: 12px;
    border-radius: 12px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .me-user-info{
    padding: 4px;
    h3{
      font-size: 15px;
      font-weight: 400;
    }
  }
}
</style>