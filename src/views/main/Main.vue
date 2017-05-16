<template>
  <div>
    <g-header :titles="titles" :activeIndex.sync="activeIndex" @change="setIndex($event)"></g-header>
    <g-page :activeIndex="activeIndex" @change="setIndex($event)">
      <div slot="page0">
        <text>page0</text>
      </div>
      <div slot="page1">
        <discover></discover>
      </div>
      <div slot="page2">
        <text>page2</text>
      </div>
    </g-page>
  </div>
</template>
<script>
  import GHeader from '../../components/Header.vue'
  import GPage from '../../components/Page.vue'
  import Discover from '../../components/Discover.vue'
  export default {
    data () {
      return {
        titles: ['收藏', '发现', '关于我'],
        activeIndex: 1
      }
    },
    components: {
      GHeader,
      GPage,
      Discover
    },
    methods: {
      setIndex(index) {
        this.activeIndex = index
      }
    }
  }
</script>

