<template>
  <div class="nav-container">
    <div class="nav-status"></div>
    <div class="nav-items">
      <div :class="['nav-item', index==activeIndex?'nav-item-active':'']" v-for="(title, index) in titles" @click="changeIndex(index)">
        <text :class="['nav-item-text', index==activeIndex?'nav-item-text-active':'']">{{title}}</text>
      </div>
    </div>
    <div class="nav-underline" ref="line"></div>    
  </div>
</template>
<script>
  const animation = weex.requireModule('animation')
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.moveLine(true)
    },
    props: {
      activeIndex: {
        required: true,
        type: Number,
        default: 0
      },
      titles: {
        required: false,
        type: Array,
        default: () => []
      }
    },
    watch: {
      activeIndex (val) {
        this.moveLine()
      }
    },
    methods: {
      changeIndex (index) {
        this.$emit('change', index)
      },
      moveLine (noAnimate) {
        let duration = noAnimate ? 1 : 300
        let itemsWidth = 150
        let leftPos = (750 - itemsWidth * this.titles.length) / 2
        let dest = leftPos + this.activeIndex * itemsWidth
        let el = this.$refs.line
        animation.transition(el, {
          styles: {
            transform: `translateX(${dest}px)`
          },
          duration: duration,
          timingFunction: 'ease-out'
        }, function () {})
      }
    }
  }
</script>
<style scoped>
  .nav-container {
    background-color: #009688;
  }
  .nav-status {
    height: 54px;
  }
  .nav-items {
    height: 100px;
    justify-content: center;
    flex-direction: row;
    align-items: stretch;
  }
  .nav-item {
    width: 150px;
    justify-content: center;
  }

  .nav-item-text {
    text-align: center;
    color: #B2DFDB;
    font-size: 42px;
  }
  .nav-item-text-active {
    color: #fff;
    font-size: 48px;
  }

  .nav-underline {
    width: 150px;
    height: 3px;
    background-color: #FFFFFF;
  }
</style>