<template>
  <div class="page-container">
    <div class="page-transform-wrap" ref="wrap">
      <scroller class="scroller">
        <div class="page" ref="page0">
          <slot name="page0"></slot>
        </div>
      </scroller>
      <scroller class="scroller">
        <div class="page" ref="page1">
          <slot name="page1"></slot>
        </div>
      </scroller>
      <scroller class="scroller">
        <div class="page" ref="page2">
          <slot name="page2"></slot>
        </div>
      </scroller>
    </div>
  </div>
</template>
<script>
  const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    mounted () {
      this.movePage(true)
    },
    props: {
      activeIndex: {
        required: true,
        type: Number,
        default: 1
      }
    },
    watch: {
      activeIndex () {
        this.movePage()
      }
    },
    methods: {
      movePage (noAnimate) {
        let duration = noAnimate ? 1 : 300
        let dest = this.activeIndex * 750
        let el = this.$refs.wrap
        animation.transition(el, {
          styles: {
            transform: `translateX(${-dest}px)`
          },
          duration: duration,
          timingFunction: 'ease-out'
        }, function () {})
      }
    }
  }
</script>
<style scoped>
  .page-container {
    /*background-color: green;*/
    align-items: stretch;
    flex: 1;
    overflow: hidden;
  }
  .page-transform-wrap {
    align-items: stretch;
    flex: 1;
    width: 2250px;
    flex-direction: row;
  }
  .scroller {
    width: 750px;
  }
  .page {
    width: 750px;
  }
</style>