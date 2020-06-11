<template>
  <div class="map-page">
    <div class="map-cover right-in" :class="{'right-out':!showList}">
      <div class="map-cover-side">
        <!-- <div class="map-search">
          <el-input v-model="keyword">
             <el-button @click="mapSearch"  circle slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div> -->
        <div class="result-head">
          <h3>共有{{searchList.length}}个门店</h3>
          <el-button class="close-btn" circle size="mini" plain @click="showList=false" icon="el-icon-close"></el-button>
        </div>
        <div class="search-result">
          <div class="result-item"  v-for="item in searchList" :key="item.id" @click="handleItemClick(item)">
            <div class="result-card">
              <div class="result-imgs">
                <img v-for="(img,i) in item.photos" :key="i" :src="img.url" />
              </div>
              <div class="result-content">
                <h3>{{item.name}}</h3>
                <p>{{item.address}}</p>
              </div>
           </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="coffee-list">
      <div class="coffee-item" v-for="item in coffee" @click="handleTagClick(item)" :key="item.label"><img :src="item.logo"/>{{item.label}}</div>
      <el-button v-if="searchList" class="coffee-menu" @click="showList = true" circle icon="el-icon-position"></el-button>
    </div>
    <me-map ref="map" :markers="markers"></me-map>
  </div>
</template>
<script>
import axios from 'axios'
import starbucks from '@/assets/starbucks.png'
import rx from '@/assets/rx.png'
import xc from '@/assets/xc.png'
import costa from '@/assets/costa.png'
import nx from '@/assets/nx.png'
export default {
  data(){
    return {
      mapurl:'https://restapi.amap.com/v3/place/text',
      mapAround:'https://restapi.amap.com/v3/place/around',
      showList:false,
      searchList:[],
      page:1,
      keyword:'',
      activeIndex:starbucks,
      tags:['Starbucks','篮球','电影',],
      coffee:[
        {
          label:'Starbucks',
          keyword:'Starbucks|星巴克',
          logo:starbucks
        },
         {
          label:'luckincoffee',
          keyword:'瑞幸咖啡｜小鹿茶',
          logo:rx
        },
        // {
        //   label:'Costa',
        //   keyword:'Costa|咖世家',
        //   logo:costa
        // }, {
        //   label:'喜茶',
        //   keyword:'heytea|喜茶',
        //    logo:xc
        // }, {
        //   label:'奈雪の茶',
        //   keyword:'Nayuki|奈雪の茶',
        //    logo:nx
        // }
      ],
      markers:[],
    }
  },
  created(){    
  },
  mounted(){
    this.mapSearch()
  },
  methods:{
    /**
     *  关键词搜索
     */
    mapSearch(){
      let params = {
        key:'55419a561ada910f1746ff49c2a5b691',
        keywords: this.keyword || '星巴克|Starbucks',
        location:'118.11022,24.490474'
      }
      axios.get(this.mapurl,{params}).then(res=>{
        let result = res.data
        this.searchList = result.pois
        setTimeout(_=>{
          this.markers= result.pois.map(v=>{
            v.icon = this.activeIndex
            return v
          })
        },500)
        
      })
    },
    /**
     * handleItemClick
     */
    handleItemClick(item){
      this.$refs.map.initInfoWindow(item)
    },
    /**
     * 标签搜索
     */
    handleTagClick(val){
      this.keyword = val.keyword
      this.activeIndex = val.logo      
      this.mapSearch()
    }
  }
}
</script>
<style lang="scss" >
.map-page{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;  
  .coffee-list{
    position: relative;
    bottom: 12px;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 12;
    background-color: #fff;
    padding: 8px 24px;
    border-radius: 40px;
    .coffee-item{
      display: flex;
      align-items: center;
      font-size: 15px;
      padding: 0 12px;
      color: #00A862;
      cursor: pointer;
      img{
        width: 24px;
        margin-right: 8px;
      }
    }
    .coffee-menu{
      border-color: #00A862;
      color: #00A862;
    }
  }
  .map-cover{
    width: 360px;
    height: 100%;
    position: absolute;
    z-index: 12;
    right: 0;
    border-radius: 10px;
    background-color: rgba($color: #fff, $alpha: .8);
    .map-cover-side{
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .map-search{
      display: flex;
      align-items: center;
      padding: 12px;
      .el-input-group__append{
         border-color: #00A862;
         background-color:#00A862;
         color: #fff;
         border-radius: 0 50px 50px 0;
      }
      .el-input{
        .el-input__inner{
          border-color: #00A862;
          border-radius: 50px 0 0 50px;
          color: #00A862;
          font-size: 18px;
          font-weight: lighter;
        }
      }
    }
    .result-head{
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3{
        font-size: 14px;
        color:#00A862;
        font-weight: normal;
      }
      .close-btn{
        border-color: #00A862;
        color:#00A862;
         background-color:transparent;
      }
    }
    .search-result{
      width: 100%;
      flex: 1;
      overflow: auto;
      .result-item{
        width: 100%;
        cursor: pointer;
        &:hover{
            background: rgba(0, 0, 0, 0.05)
        }
      }
    }
  }
}
.result-card{
  width: 100%;
  display: flex;
  padding: 24px;
  color: #2a3a3e;
  .result-imgs{
    width: 80px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 12px;
    position: relative;
    img{
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }
  }
  .result-content{
    flex: 1;
    overflow: hidden;
    white-space: normal;
  h3{
    color: #00A862;
    font-size: 20px;
    font-weight: 300;
  }
  p{
    font-size: 14px;
    padding: 12px 0;
  }
  }
  
}
.tag-list{
  display: flex;
  align-items: center;
  padding: 0 12px;
  .el-tag{
    border-radius: 20px;
    border-color: #00A862;
    color: #00A862;
    background-color: transparent;
    margin-right: 8px;
    cursor: pointer;
    &.is-active{
      background-color: #00A862;
      color: #fff;
    }
  }
}
</style>