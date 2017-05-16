<template>
  <div class="discover-container">
      <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <text class="indicator">Refreshing ...</text>
      </refresh>
      <div class="lists-container">
        <div v-for="(list, index) in lists" @click="setActiveIndex(index)">
          <div class="lists-title">
            <div :class="['lists-title-line', index == activeIndex ? 'lists-title-line-active' : '']"></div>
            <text :class="['lists-title-text', index == activeIndex ? 'lists-title-text-active' : '']">{{list.name}}</text>
          </div>
          <div class="list-content-slider-container">
            <scroller scroll-direction="horizontal" :show-scrollbar="false">
                <div v-for="item in list.content" class="list-content-container">
                  <nav-link url="listDetail" style="flex: 1">
                    <image class="list-content-img" :src="item.cover"></image>
                    <text class="list-content-text">{{item.name}}</text>
                  </nav-link>
                </div>
            </scroller>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  const animation = weex.requireModule('animation')
  import NavLink from './NavLink.vue'
  export default {
    data () {
      return {
        refreshing: false,
        activeIndex: 0,
        lists: [
          {
            name: '推荐',
            content: [
              {
                name: '我说了所有的谎',
                cover: 'https://b-ssl.duitang.com/uploads/item/201507/15/20150715112836_MGFzw.thumb.700_0.jpeg'
              },
              {
                name: '明年今日',
                cover: 'https://b-ssl.duitang.com/uploads/item/201705/07/20170507201906_e3Lr8.thumb.700_0.jpeg'
              },
              {
                name: '明年今日',
                cover: 'https://b-ssl.duitang.com/uploads/item/201705/07/20170507201906_e3Lr8.thumb.700_0.jpeg'
              }
            ]
          },
          {
            name: '热门',
            content: [
              {
                name: '明年今日',
                cover: 'https://b-ssl.duitang.com/uploads/item/201705/07/20170507201906_e3Lr8.thumb.700_0.jpeg'
              },
              {
                name: '我说了所有的谎',
                cover: 'https://b-ssl.duitang.com/uploads/item/201507/15/20150715112836_MGFzw.thumb.700_0.jpeg'
              },
              {
                name: '明年今日',
                cover: 'https://b-ssl.duitang.com/uploads/item/201705/07/20170507201906_e3Lr8.thumb.700_0.jpeg'
              },
              {
                name: '我说了所有的谎',
                cover: 'https://b-ssl.duitang.com/uploads/item/201507/15/20150715112836_MGFzw.thumb.700_0.jpeg'
              },
            ]
          },
          {
            name: '最新',
            content: [
              {
                name: '明年今日',
                cover: 'https://b-ssl.duitang.com/uploads/item/201705/07/20170507201906_e3Lr8.thumb.700_0.jpeg'
              },
              {
                name: '我说了所有的谎',
                cover: 'https://b-ssl.duitang.com/uploads/item/201507/15/20150715112836_MGFzw.thumb.700_0.jpeg'
              },
              {
                name: '明年今日',
                cover: 'https://b-ssl.duitang.com/uploads/item/201705/07/20170507201906_e3Lr8.thumb.700_0.jpeg'
              },
              {
                name: '我说了所有的谎',
                cover: 'https://b-ssl.duitang.com/uploads/item/201507/15/20150715112836_MGFzw.thumb.700_0.jpeg'
              },
            ]
          }
        ]
      }
    },
    methods: {
      setActiveIndex (index) {
        this.activeIndex = index
      },
      onrefresh (event) {
        console.log('is refreshing')
        modal.toast({ message: 'refresh', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
      },
      onpullingdown (event) {
        console.log(event)
      }
    },
    components: {
      NavLink
    }
  }
</script>
<style scoped>
.discover-container {
  align-items: stretch;
}
.lists-container {
  padding-top: 80px;
  flex: 1;
  width: 750px;
  overflow: hidden;
}
.lists-title {
  flex-direction: row;
  align-items: center;
  height: 72px;
  margin-left: 40px;
}
.lists-title-line {
  width: 26px;
  height: 3px;
  margin-right: 20px;
  background-color: #aaa;
}
.lists-title-line-active {
  background-color: #333;
}
.lists-title-text {
  flex: 1;
  font-size: 48px;
  color: #aaa;
}
.lists-title-text-active {
  color: #333;
}

.list-content-slider-container {
  margin-top: 48px;
  height: 380px;
}

.list-content-img {
  padding: 20px;
  width: 260px;
  height: 260px;
}

.list-content-container {
  margin-left: 50px;
}

.list-content-text {
  color: #666;
  line-height: 80px;
}

</style>