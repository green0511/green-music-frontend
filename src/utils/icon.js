//at.alicdn.com/t/font_bar4t8pra88jv2t9.ttf
export function setIcon (weex) {
  let dom = weex.requireModule('dom')
  dom.addRule('fontFace', {
    'fontFamily': 'iconfont',
    'src': "url('http://at.alicdn.com/t/font_bar4t8pra88jv2t9.ttf')"
  })
}