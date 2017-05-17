<template>
  <div class="container">
    <div :class="['top-container', isIOS?'top-container-ios':'']">
      <div class="background-container">
        <div class="background-img-container">
          <image :src="list.cover" class="background-img" resize="cover"></image>
        </div>
        <div class="background-mask"></div>
      </div>
      <div class="top-bar">
        <div class="icon-container">
          <text class="icon">—</text>
        </div>
        <div class="title-container">
          <text class="title-song">{{list.name}}</text>
          <text class="title-singer">{{owner.name}}</text>
        </div>
      </div>
      <div class="avatar-container">
        <image :src="owner.avatar" class="avatar"></image>
      </div>
    </div>
    <div class="song-container">
      <list>
        <cell v-for="song in list.songs" class="song-cell">
          <div class="song-info">
            <text class="song-info-name">{{song.name}}</text>
            <text class="song-info-singer">{{song.singers.join('/')}}</text>
          </div>
          <div class="song-play">
            <icon-font icon="&#xe958;" :size="24"></icon-font>
          </div>
        </cell>
      </list>  
    </div> 
  </div>
</template>
<script>
  import IconFont from '../../components/IconFont.vue'
  export default {
    data () {
      return {
        owner: {
          name: '品学兼优抠鼻男',
          avatar: 'http://imgsrc.baidu.com/forum/w%3D580/sign=de8b565679310a55c424defc87444387/e63d6059252dd42a0189cd0e033b5bb5c8eab8ae.jpg'
        },
        list: {
          cover: 'http://imgsrc.baidu.com/forum/pic/item/3426dabf6c81800ac1486544b13533fa838b474e.jpg',
          name: '我总是一个人在练习一个人',
          songs: [
            { name: '有没有', singers: ['薛之谦'] },
            { name: '心酸', singers: ['林宥嘉'] },
            { name: '致姗姗来迟的你', singers: ['林宥嘉', '阿肆'] },
            { name: '校园歌手', singers: ['卢广仲'] },
            { name: '距离', singers: ['陈绮贞'] },
            { name: '达尔文', singers: ['蔡健雅'] },
          ]
        }
      }
    },
    computed: {
      isIOS () {
        return weex.config.env.platform.toLowerCase() == 'ios'
      }
    },
    components: {
      IconFont
    }
  }
</script>
<style scoped>
  .container {
    background-color: #212121;
    color: #fff;
  }
  .top-container {
    height: 354px
  }
  .top-container-ios {
    padding-top: 54px;
  }


  .background-container {
    position: absolute;
  }

  .background-img-container {
    position: absolute;
  }
  
  .background-img {
    width: 750px;
    height: 300px;
  }

  .background-mask {
    width: 750px;
    height: 300px;
    background-color: #333;
    opacity: 0.5;
  }

  .top-bar {
    height: 120px;
    margin-bottom: 40px;
    margin-top: 40px;
  }

  .icon-container {
    position: absolute;
    top: 14px;
    left: 60px;
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
    width: 140px;
    height: 140px;
    border-radius: 140px;
  }

  .song-container {
    flex: 1;
    padding-top: 30px;
  }

  .song-cell {
    flex-direction: row;    
    height: 200px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #444;
  }

  .song-info {
    flex: 1;
    height: 80px;
    justify-content: space-between;
  }

  .song-info-name {
    color: #ddd;    
    font-size: 34px;
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