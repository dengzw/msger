<template>
  <div class="me-card">
    <div v-if="img" class="card-media">
      <img :src="img">
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <slot name="actions">
      <div class="card-actions">
        <slot></slot>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name:'MeCard',
  data(){
    return {}
  },
  props:{
    img:{
      type:String,
      default:''
    }
  }
}
</script>
<style lang="scss">
.me-card{
  width: 100%;
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem auto;
  // border-radius: 5px;
  border: 1px solid #364f91;
  color: #e2ecf5;
  cursor: pointer;
  transition: all .3s;
  font-size: .875rem;
  // &.is-active,
  // &:hover{
  //   background-color: #1f3c84;
  //   border-color: #7fe09b;
  //   transition: all .3s;
  // }
  .card-media{
    max-width: 100px;
    max-height: 100px;
    overflow: hidden;
    margin-right: 1.25rem;
    border-radius: 5px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-content{
    flex: 1;
     font-size: .875rem;
    line-height: 1.5rem;
  }
}
</style>