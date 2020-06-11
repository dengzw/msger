<template>
  <div class="gd-map" v-loading="loading" id="GDMap"></div>
</template>

<script>
import { loadMap } from './loadMap'
import starIcon from '@/assets/starbucks.png'
import starbucks from '@/assets/starbucks.png'
import rx from '@/assets/rx.png'
import xc from '@/assets/xc.png'
import costa from '@/assets/costa.png'
import nx from '@/assets/nx.png'
export default {
  name: 'MeMap',
  props:{
    markers:{
      type:Array
    }
  },
  data() {
    return {
      //标记
      markerList:[],
      visibleTool:false,
      iconStyle:[],
      markerIcons:{
        starbucks:starbucks,
        rx:rx,
        xc:xc,
        costa:costa,
        nx:nx
      },
      geolocation:null,
      //图层设备
      device:[],
      deviceList:[
        { label: "视频监控", value: "video" },
        { label: "人像抓拍", value: "face" },
        { label: "车辆卡口", value: "car" },
        { label: "WIFI探针", value: "wifi" }
      ],
      keyword:'',
      // 地图实例
      GDMap: null,
      //toolBar
      toolBar:null,
      // 加载的一些插件
      // 更多参考：https://lbs.amap.com/api/javascript-api/guide/abc/plugins#plugins
      plugins: [
        'AMap.OverView',
        'AMap.PolyEditor',
        'AMap.RectangleEditor',
        'AMap.PlaceSearch',
        'AMap.DistrictLayer',
        'AMap.CustomLayer',
        'AMap.Autocomplete',
        'AMap.MouseTool',
        'AMap.Geolocation',
        'AMap.ControlBar',
        'AMap.ToolBar'
      ],
      // key
      key: '4515871d11b97fa12ce5e6eec041adbc',
      // 地图版本
      v: '2.0',
      loading: true,
    }
  },
  methods: {
    /**
     * 获取当前位置信息
     */
    getLlocation(){
      this.geolocation.getCurrentPosition()
    },
     /**
     * 添加图标
     */
    addMarks(item){
      let location= item.location.split(',')
      
      let lat = Number(location[0])
      let lng = Number(location[1])
      // if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return
      // var el = document.createElement("div")
      // el.id = "marker"
      // el.className = 'map-marker'     
      // let icon = new AMap.Icon({
      //   size: new AMap.Size(40, 40), // 图标尺寸 
      //   // image: _img, // Icon的图像
      //   // imageOffset: new AMap.Pixel(0, -60), // 图像相对展示区域的偏移量，适于雪碧图等
      //   imageSize: new AMap.Size(40, 40) // 根据所设置的大小拉伸或压缩图片
      // })
      var icon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: item.icon,
          imageSize: new AMap.Size(30, 30)
      })

      var marker = new AMap.Marker({
        position: new AMap.LngLat(lat,lng), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        icon: icon,
        // offset: new AMap.Pixel(-10, -10),
        zoom: 18
      })
      this.GDMap.add(marker)
      //鼠标点击marker弹出自定义的信息窗体
      marker.on('click',()=> {
        this.closeInfoWindow()
        this.initInfoWindow(item)
      })
    },
    /**
     * 初始化图标
     */
    initMarks(){
      this.clearAllMarker()
      this.markerList.forEach(v=>{
        this.addMarks(v)
      })
    },
    /**
     * 初始化弹窗
     */
     //鼠标点击marker弹出自定义的信息窗体
    initInfoWindow(item){
      this.GDMap.setCenter(item.location.split(','))
      let content = this.getPopContent(item)
      var infoWindow = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content: this.createInfoWindow(content.join('')),
        offset: new AMap.Pixel(10, -20)
      })
      infoWindow.open(this.GDMap, item.location.split(','));   
    },
     /**
     * 定义窗体信息html
     */
    getPopContent(item){
      let htmlText = []
          htmlText = [
            `<h3>${item.name} </h3>`,
            `<p>${item.address}</p>`,
          ]
      return htmlText
    },
    /**
     * 创建窗体
     */
    createInfoWindow(content) {
      var info = document.createElement("div");
      info.className = "map-cofee-card";
      // 定义中部内容
      var middle = document.createElement("div");
      middle.className = "info-middle";
      middle.innerHTML = content;
      info.appendChild(middle);
      return info;
    },
    /**
     * 清除mark
     */
    clearAllMarker() {
      if (this.GDMap) {
        this.GDMap.clearMap();
      }
    },
    /**
     * 关闭信息窗体
     */
    closeInfoWindow(){
      this.GDMap.clearInfoWindow()
    }
  },
  watch:{
    markers:{
      handler(val){
        if(this.GDMap){
          this.clearAllMarker()
          this.markerList = val
          this.initMarks()
        }        
      },
      deep:true
    }
  },
  mounted() {
    loadMap(this.key, this.plugins, this.v)
      .then(AMap => {      
        this.GDMap = new AMap.Map('GDMap', {
          resizeEnable: true,
          rotateEnable: true,
          pitchEnable: true,
          zoomEnable: true,
		      dragEnable: true,
          zoom: 13,
          pitch: 25,
          center: [118.11022, 24.490474],
          mapStyle: 'amap://styles/2ce82e0ca6f1fc3a991a2c4f8d7ae5c0',
          // mapStyle:'amap://styles/0fde8ef9c188641914b8e5713654d46f',         
          expandZoomRange: true,
          zooms: [3, 20]
        })
        this.GDMap.on('complete', () => {
          this.loading = false
          // 定位插件
          // this.GDMap.plugin('AMap.Geolocation',()=>{
          //   this.geolocation = new  AMap.Geolocation({
          //     enableHighAccuracy: true,//是否使用高精度定位，默认:true
          //     timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          //     maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          //     convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          //     showButton: true,        //显示定位按钮，默认：true
          //     buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          //     buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          //     showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          //     showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          //     panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          //     zoomToAccuracy:true,     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          //     useNative:true
          //   })
          //   // this.GDMap.addControl(this.geolocation)
          //   // this.geolocation.getCurrentPosition()
          // })
          //ControlBar
          // this.GDMap.plugin(["AMap.ControlBar"],()=>{
          //   var controlBar = new AMap.ControlBar({
          //     showZoomBar:true,
          //     position:{top:'10px',right:'10px'}
          //   })
          //   this.GDMap.addControl(controlBar)
          // })
          //toolbar
         var toolBar = new AMap.ToolBar({
           autoPosition:true,
           locate:true,
          autoPosition:true
         })
         this.GDMap.addControl(toolBar)
          // 初始化地图markers
          this.initMarks()        
        })
       
       
        this.GDMap.on('click',()=>this.closeInfoWindow())
      })
      .catch(() => {
        this.loading = false
      })
  },
  beforeDestroy(){
    this.clearAllMarker()
    this.GDMap =null
  }
}
</script>

<style lang="scss">

.gd-map{
  width: 100%;
  min-width: 300px;
  height: 100%;
  min-height: 300px;
  position: absolute;
}
.map-tools-group {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  height: 3.5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  .map-search{
    flex: 1;
    height: 100%;
    .el-input{
        width: 300px;
      .el-input_inner{
        height: 2.5rem;
        line-height: 1.5rem;
      }
    }
  }
  .map-tools{
    flex: 1;
    height:2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .tool-btn{
      cursor: pointer;
      border-radius: 2rem;
      background-color: rgba(0, 49, 143, 0.8);
      border: none;
      color: #fff;
    }    
  }
}
.popper-class{
  border: none;
  background-color: rgba(0, 49, 143, 0.8);
  &.el-popper[x-placement^=bottom] .popper__arrow::after{
    border-bottom-color: rgba(0, 49, 143, 0.8);
  }
}
.device-check{
  .el-checkbox{
    color: #fff;
    padding: .25rem;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color: #fff;
  }
}
.map-cofee-card{
  background-color: #fff;
  border:1px solid #00A862;
  padding: 12px;
  border-radius: 10px;
  h3{
    font-size: 15px;
    color: #333;
    font-weight: 500;
  }
  p{
    color: #999;
    font-size: 12px;
    padding: 4px 0;
  }
  &::after{
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    background-color: #00A862;
    transform: rotate(45deg);
    z-index: -1;
    bottom: -5px;
    left: calc(50% - 12px);
  }
}
</style>
