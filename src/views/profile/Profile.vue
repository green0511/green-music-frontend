<template>
  <scroller class="container">
    <div :class="['top-container', isIOS?'top-container-ios':'']">
      <div class="background-container">
        <div class="background-img-container">
          <image :src="background" class="background-img" resize="cover"></image>
        </div>
        <div class="background-mask"></div>
      </div>
      <div class="top-bar">
        <div class="icon-container">
          <nav-back>
            <icon-font icon="&#xea66;" :size="64"></icon-font>
          </nav-back>
        </div>
      </div>
      <div class="avatar-container">
        <image :src="owner.avatar" class="avatar"></image>
        <text class="username">{{owner.name}}</text>
      </div>
    </div>
    <text class="text">{{owner.name}}的所有歌单</text>
    <scroller scroll-direction="horizontal" class="song-container">
      <div v-for="list in lists" class="song-cell">
        <div class="song-info">
          <image :src="list.cover" class="song-info-cover"></image>
          <text class="song-info-name">{{list.name}}</text>
        </div>
      </div>
    </scroller> 
  </scroller>
</template>
<script>
  import IconFont from '../../components/IconFont.vue'
  import NavBack from '../../components/NavBack.vue'
  export default {
    data () {
      return {
        background: 'http://eput.com/upload/photos/2015/0518/limb/6a67fcb35a6b01464db3c0a627077901.jpg',
        owner: {
          name: 'Green',
          avatar: 'http://imgsrc.baidu.com/forum/w%3D580/sign=de8b565679310a55c424defc87444387/e63d6059252dd42a0189cd0e033b5bb5c8eab8ae.jpg'
        },
        lists: [
          { name: '有没有', cover: 'http://eput.com/upload/photos/2016/0225/limb/c1e078e08f675ac0e85062bbaa2c89e7.JPG'},
          { name: '心酸', cover: 'http://eput.com/upload/photos/2015/0518/limb/efcd5b53b03601f9a7f2cca387f8ed4f.jpg'},
          { name: '致姗姗来迟的你', cover: 'http://eput.com/upload/photos/2015/0423/limb/3b090892eb13bf6cfebe15043b112ca1.jpg'},
          { name: '校园歌手', cover: 'http://eput.com/upload/photos/2014/0505/limb/1226f8be0ff0899cd3778f679f687d79.jpg'},
          { name: '距离', cover: 'http://eput.com/upload/photos/2015/0410/limb/39b4b707d2f2bc53e664d8b69f81da78.jpg'},
          { name: '达尔文', cover: 'http://eput.com/upload/photos/2014/0419/limb/9f87915c300c1d9c9d2fa8e82e546190.jpg'},
        ]
      }
    },
    computed: {
      isIOS () {
        return weex.config.env.platform.toLowerCase() == 'ios'
      }
    },
    components: {
      IconFont,
      NavBack
    }
  }
</script>
<style scoped>
  .container {
    background-color: #212121;
    color: #fff;
  }
  .top-container {
    height: 750px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .top-container-ios {
    padding-top: 54px;
  }


  .background-container {
    position: absolute;
    left: 0;
  }

  .background-img-container {
    position: absolute;
    left: 0;
  }
  
  .background-img {
    width: 750px;
    height: 750px;
  }

  .background-mask {
    width: 750px;
    height: 750px;
    background-color: #333;
    opacity: 0.6;
  }

  .top-bar {
    position: absolute;
    left: 0;
    top: 120px;
  }

  .icon-container {
    position: absolute;
    top: 10px;
    left: 50px;
  }

  .title-container {
    height: 120px;
    align-items: center;
    justify-content: space-around;
  }

  .title-song {
    font-size: 40px;
    color: #fff;
  }
  .title-singer {
    font-size: 30px;
    color: #ccc;
  }

  .avatar-container {
    align-items: center;
  }

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  .username {
    color: #ddd;
    font-size: 36px;
    margin-top: 30px;
  }

  .text {
    color: #aaa;
    font-size: 28px;  
    padding-top: 15px;
    padding-left: 30px;
    line-height: 84px;
  }

  .song-container {
    flex: 1;
    height: 480px;
  }

  .song-cell {
    padding-left: 30px;
    padding-right: 30px;
  }

  .song-info-cover {
    width: 360px;
    height: 360px;
  }

  .song-info-name {
    color: #ddd;    
    font-size: 34px;
    line-height: 80px;
  }

  .song-info-singer {
    color: #aaa;    
    font-size: 24px;
  }

  .song-play {
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
  }

  .song-play-icon {
    color: #fff;
  }
</style>