<template>
  <div class="main-container">
    <g-header :titles="titles" :activeIndex.sync="activeIndex" @change="setIndex($event)"></g-header>
    <g-page :activeIndex="activeIndex" @change="setIndex($event)">
      <div slot="page0" class="flex">
        <discover class="flex"></discover>
      </div>
      <div slot="page1" class="flex">
        <my-page></my-page>
      </div>
    </g-page>
  </div>
</template>
<script>
  import {setIcon} from '../../utils/icon.js'
  import GHeader from '../../components/Header.vue'
  import GPage from '../../components/Page.vue'
  import Discover from '../../components/Discover.vue'
  import MyPage from '../../components/MyPage.vue'
  export default {
    data () {
      return {
        titles: ['发现', '我的'],
        activeIndex: 0
      }
    },
    components: {
      GHeader,
      GPage,
      Discover,
      MyPage
    },
    methods: {
      setIndex(index) {
        this.activeIndex = index
      }
    },
    created () {
      setIcon(weex)
    }
  }
</script>
<style>
  .flex {
    flex: 1;
  }
  .main-container {
    background-color: #14282D;
  }
</style>

