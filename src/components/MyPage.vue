<template>
  <scroller class="flex">
    <div class="user-info">
      <div class="avatar-container">
        <image :src="user.avatar" class="avatar"></image>
      </div>
      <div class="info-container">
        <nav-link url="profile">
          <text class="info-username">{{user.username}}</text>
          <text class="info-date">{{user.created.toLocaleString()}}</text>
        </nav-link>
      </div>
      <div class="icon-container">
        <text :style="{fontFamily: 'iconfont'}"></text>
        <icon-font icon="&#xea67;" :size="56"></icon-font>
      </div>
    </div>
    <div class="lists-container flex">
      <div class="title-container">
        <text class="lists-title">我创建的歌单</text>
      </div>
      <div class="list-container flex">
        <div v-for="list in lists" class="song-container">
          <div class="cover-container">
            <image class="cover" :src="list.cover"></image>
          </div>
          <div class="list-info-container">
            <text class="list-name">{{list.name}}</text>
            <text class="list-count">{{list.count}}首</text>
          </div>
        </div>
      </div>
    </div>
  </scroller>
</template>
<script>
  import IconFont from './IconFont.vue'
  import NavLink from './NavLink.vue'
  export default {
    data () {
      return {
        user: {
          username: 'Green',
          avatar: 'http://eput.com/upload/photos/2015/0608/limb/47ddffa91c53216b037341760af834d9.jpg',  
          created: new Date()
        },
        lists: [
          { name: "有没有", cover: 'http://eput.com/upload/photos/2014/0330/limb/93ea77020f9d1fe342a0d7cb4bf94d0b.jpg', count: 21 },
          { name: "知道", cover: 'http://eput.com/upload/photos2/2017/0413/limb/9c4bc52922e90e39804536d92e837eca.jpg', count: 4 },
          { name: "我总是一个人在练习一个人", cover: 'http://eput.com/upload/photos2/2017/0419/limb/12ccf6b0e522f162f4e12b5e3905f397.jpg', count: 1 },
          { name: "心酸", cover: 'http://eput.com/upload/photos/2013/0825/limb/5e50263ad1d2ae36c20de8adca6f2717.jpg', count: 45 },
          { name: "一定要相信自己", cover: 'http://eput.com/upload/photos2/2017/0106/limb/1cdba161ce2f269bded615f7bd9fd8d0.JPG', count: 12 },
          { name: "距离", cover: 'http://eput.com/upload/photos2/2017/0414/limb/02c317fadde305b21caadb2867ee337d.jpg', count: 71 },
          { name: "一定要相信自己", cover: 'http://eput.com/upload/photos2/2017/0106/limb/1cdba161ce2f269bded615f7bd9fd8d0.JPG', count: 12 },
          { name: "距离", cover: 'http://eput.com/upload/photos2/2017/0414/limb/02c317fadde305b21caadb2867ee337d.jpg', count: 71 }
        ]
      }
    },
    components: {
      IconFont,
      NavLink
    }
  }
</script>
<style scoped>
  .flex {
    flex: 1
  }
  .user-info {
    flex-direction: row;
    margin: 20px;
    /*padding-bottom: 30px;*/
    align-items: center;
    /*border-bottom-color: #444;
    border-bottom-style: solid;
    border-bottom-width: 1px;*/
  }
  .avatar-container {
    margin-right: 20px;
  }
  .avatar {
    width: 140px;
    height: 140px;
    border-radius: 140px;
  }
  .info-container {
    flex: 1;
    justify-content: space-between;
  }
  .info-username {
    color: #fff;
    font-size: 40px;
    line-height: 80px;
  }
  .info-date {
    color: #fff;
    font-size: 20px;
  }
  .icon-container {
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: flex-end;
  }

  /*歌单区域*/
  .title-container {
    background-color: #222;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .lists-title {
    color: #999;
    font-size: 24px;
  }

  .list-container {
    margin: 20px;
  }

  .song-container {
    flex-direction: row;
  }
  .cover-container {
    padding: 10px;
    margin-right: 10px;
  }
  .cover {
    width: 120px;
    height: 120px;
  }
  .list-info-container {
    flex: 1;
    justify-content: space-around;
    border-bottom-color: #333;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .list-name {
    color: #bbb;
    font-size: 30px;
  }
  .list-count {
    color: #999;
    font-size: 22px;
  }
</style>