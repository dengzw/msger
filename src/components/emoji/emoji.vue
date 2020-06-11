<template>
  <div class="me-emoji">
    <div class="me-emoji-group" v-for="group in emojis" :key="group.name">
      <h4 class="me-emoji-title">{{group.name}}</h4>
      <div class="me-emoji-list">
        <div
          class="me-emoji-item"
          v-for="(item,index) in group.emojis"
          :key="index"
          @click="pick(item)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import emojiList from './emoji.js'
export default {
  name: 'MeEmoji',
  data() {
    return {
      emojis: emojiList
    }
  },
  methods: {
    /**
     * 选择表情
     */
    pick(v) {
      this.$emit('select', v)
    }
  }
}
</script>

<style lang="less" scoped>
.me-emoji {
  position: relative;
  max-width: 240px;
  height: 240px;
  padding: 12px;
  overflow: auto;
  border: 1px solid #ddd;

  border-radius: 3px;

  .me-emoji-group {
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding-bottom: 4px;

    .me-emoji-title {
      margin: 0;
      padding: 4px;
      font-size: 15px;
    }
  }

  .me-emoji-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .me-emoji-item {
      padding: 4px;
      font-size: 24px;
      line-height: 24px;
      cursor: pointer;
      border-radius: 3px;

      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>
