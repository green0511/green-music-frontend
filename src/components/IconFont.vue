<template>
  <div>
    <text :style="{fontFamily:'iconfont', color: color, fontSize: size + 'px'}">{{iconDecode}}</text>
  </div>
</template>
<script>
  let he = require('he')
  let dom = weex.requireModule('dom')
  export default {
    mounted() {
      dom.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': "url('http://at.alicdn.com/t/font_bar4t8pra88jv2t9.ttf')"
      })
    },
    computed: {
      iconDecode() {
        return he.decode(this.icon)
      }
    },
    props: {
      icon: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false,
        default: '#fff'
      },
      size: {
        type: Number,
        required: false,
        default: 36
      }
    }
  }
</script>