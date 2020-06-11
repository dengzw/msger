<template>
  <div class="me-slide">
    <div class="me-slide-wrap">
      <div class="me-indicator">
        <div
          class="me-indicator-dot"
          v-for="(item,index) in items"
          @click="setIndex(index)"
          :key="index"
          :class="{'is-active':index === currentIndex}"
        ></div>
      </div>
      <div class="me-slide-list" :style="{transform:'translate3D('+transWidth+'px, 0,0)'}">
        <slot></slot>
      </div>
    </div>
    <el-button
      :disabled="currentIndex == 0"
      class="me-slide-prev"
      icon="el-icon-arrow-left"
      size="small"
      circle
      @click="prev"
    ></el-button>
    <el-button
      class="me-slide-plus"
      v-if=" add && currentIndex === items.length-1"
      icon="el-icon-plus"
      size="small"
      :disabled="items.length===10"
      @click="addItem"
      circle
    ></el-button>
    <el-button
      v-else
      class="me-slide-next"
      icon="el-icon-arrow-right"
      size="small"
      circle
      @click="next"
    ></el-button>
  </div>
</template>
<script>
export default {
  name: 'MeSlide',
  provide() {
    return { prev: this.prev, updateItem: this.getItems }
  },
  data() {
    return {
      currentIndex: 0,
      transWidth: 0,
      items: []
    }
  },
  props: {
    add: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    window.addEventListener('resize', this.slideResize)
    this.getItems()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.slideResize)
  },
  methods: {
    /**
     *获取节点数据
     */
    getItems() {
      this.items = this.$children.filter(
        child => child.$options.name === 'MeSlideItem'
      )
    },
    /**
     * 点击添加按钮
     */
    addItem() {
      this.$emit('add')
      this.$nextTick(_ => {
        this.getItems()
        this.next()
      })
    },
    /**
     * 点击切换
     */
    setIndex(index) {
      this.currentIndex = index
      this.transWidth = 0
      this.transWidth = -this.$el.offsetWidth * this.currentIndex
    },
    /**
     * next
     */
    next() {
      if (this.currentIndex == this.items.length - 1) return
      this.currentIndex += 1
      this.transWidth = -this.$el.offsetWidth * this.currentIndex
      this.$emit('next')
    },
    /**
     * next
     */
    prev() {
      if (this.currentIndex === 0) return
      this.currentIndex = this.currentIndex - 1
      this.transWidth = -this.$el.offsetWidth * this.currentIndex
      this.$emit('prev')
    },
    /**
     * 窗口大小缩放
     */
    slideResize() {}
  }
}
</script>
<style lang="less">
.me-slide {
  width: 100%;
  position: relative;
  .me-slide-wrap {
    width: 100%;
    position: relative;
    overflow: hidden;
    .me-indicator {
      position: absolute;
      width: calc(100% - 120px);
      top: 0;
      left: 60px;
      right: 60px;
      padding: 12px;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      .me-indicator-dot {
        width: 8px;
        height: 8px;
        cursor: pointer;
        margin: 0 4px;
        border-radius: 50%;
        background-color: rgba(18, 15, 15, 0.5);
        &.is-active {
          background-color: #ff8400;
        }
      }
    }
    .me-slide-list {
      display: flex;
      transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
      .me-slide-item {
        flex-shrink: 0;
        position: relative;
        width: 100%;
      }
    }
  }
  .me-slide-item-close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    &:hover {
      color: #ff8400;
      background: rgba(255, 255, 255, 0.8);
    }
  }
  .me-slide-prev {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }

  .me-slide-next {
    position: absolute;
    z-index: 10;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }

  .me-slide-plus {
    position: absolute;
    z-index: 10;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }
}
</style>