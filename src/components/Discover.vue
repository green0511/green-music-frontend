<template>
  <div class="discover-container">
    <list class="discover-list">
      <cell v-for="list in lists" class="discover-cell">
        <text class="discover-cell-title">{{list.name}}</text>
        <div v-for="item in list.content" class="panel">
          <nav-link url="listDetail" style="flex: 1">
            <image :src="item.cover" class="cover" resize="cover"></image>
            <div class="desc">
              <text class="text">{{item.name}}</text>
              <text class="username">{{item.user.username}}</text>
            </div>
          </nav-link>
        </div>
      </cell>
    </list>
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
              { user: {username: 'Kevin Durant'}, name: "有没有", cover: 'http://eput.com/upload/photos/2014/0330/limb/93ea77020f9d1fe342a0d7cb4bf94d0b.jpg' },
              { user: {username: 'Stephen Curry'}, name: "知道", cover: 'http://eput.com/upload/photos2/2017/0413/limb/9c4bc52922e90e39804536d92e837eca.jpg' },
              { user: {username: 'Lebron James'}, name: "我总是一个人在练习一个人", cover: 'http://eput.com/upload/photos2/2017/0419/limb/12ccf6b0e522f162f4e12b5e3905f397.jpg' },
              { user: {username: 'Allen Iverson'}, name: "心酸", cover: 'http://eput.com/upload/photos/2013/0825/limb/5e50263ad1d2ae36c20de8adca6f2717.jpg' },
              { user: {username: 'Kobe Bryant'}, name: "一定要相信自己", cover: 'http://eput.com/upload/photos2/2017/0106/limb/1cdba161ce2f269bded615f7bd9fd8d0.JPG' },
              { user: {username: 'Micheal Jordan'}, name: "距离", cover: 'http://eput.com/upload/photos2/2017/0414/limb/02c317fadde305b21caadb2867ee337d.jpg' }
            ]
          },
          {
            name: '热门',
            content: [
              { user: {username: 'Kevin Durant'}, name: "有没有", cover: 'http://eput.com/upload/photos/2014/0330/limb/93ea77020f9d1fe342a0d7cb4bf94d0b.jpg' },
              { user: {username: 'Stephen Curry'}, name: "知道", cover: 'http://eput.com/upload/photos2/2017/0413/limb/9c4bc52922e90e39804536d92e837eca.jpg' },
              { user: {username: 'Lebron James'}, name: "我总是一个人在练习一个人", cover: 'http://eput.com/upload/photos2/2017/0419/limb/12ccf6b0e522f162f4e12b5e3905f397.jpg' },
              { user: {username: 'Allen Iverson'}, name: "心酸", cover: 'http://eput.com/upload/photos/2013/0825/limb/5e50263ad1d2ae36c20de8adca6f2717.jpg' },
              { user: {username: 'Kobe Bryant'}, name: "一定要相信自己", cover: 'http://eput.com/upload/photos2/2017/0106/limb/1cdba161ce2f269bded615f7bd9fd8d0.JPG' },
              { user: {username: 'Micheal Jordan'}, name: "距离", cover: 'http://eput.com/upload/photos2/2017/0414/limb/02c317fadde305b21caadb2867ee337d.jpg' }
            ]
          },
          {
            name: '最新',
            content: [
              { user: {username: 'Kevin Durant'}, name: "有没有", cover: 'http://eput.com/upload/photos/2014/0330/limb/93ea77020f9d1fe342a0d7cb4bf94d0b.jpg' },
              { user: {username: 'Stephen Curry'}, name: "知道", cover: 'http://eput.com/upload/photos2/2017/0413/limb/9c4bc52922e90e39804536d92e837eca.jpg' },
              { user: {username: 'Lebron James'}, name: "我总是一个人在练习一个人", cover: 'http://eput.com/upload/photos2/2017/0419/limb/12ccf6b0e522f162f4e12b5e3905f397.jpg' },
              { user: {username: 'Allen Iverson'}, name: "心酸", cover: 'http://eput.com/upload/photos/2013/0825/limb/5e50263ad1d2ae36c20de8adca6f2717.jpg' },
              { user: {username: 'Kobe Bryant'}, name: "一定要相信自己", cover: 'http://eput.com/upload/photos2/2017/0106/limb/1cdba161ce2f269bded615f7bd9fd8d0.JPG' },
              { user: {username: 'Micheal Jordan'}, name: "距离", cover: 'http://eput.com/upload/photos2/2017/0414/limb/02c317fadde305b21caadb2867ee337d.jpg' }
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
        // modal.toast({ message: 'refresh', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
      },
      onpullingdown (event) {
      }
    },
    components: {
      NavLink
    }
  }
</script>
<style scoped>
.discover-container {
  flex: 1;
  align-items: stretch;
}
.discover-list {

}
.discover-cell {
  align-items: center;
}
.discover-cell-title {
  color: #999;
  font-size: 36px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 48px;
  margin-top: 48px;
  border-bottom-width: 1px;
  border-bottom-color: #666;
  border-bottom-style: solid;
  text-align: center
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


  .panel {
    width: 750px;
    height: 400px;
  }
  .desc {
    position: absolute;
    width: 750px;
    padding-left: 50px;
    bottom: 60px;
  }
  .text {
    font-size: 36px;
    color: #fff;
  }
  
  .cover {
    position: absolute;
    width: 750px;
    height: 400px;
  }
  .username {
    font-size: 28px;
    color: #fff;
  }
</style>