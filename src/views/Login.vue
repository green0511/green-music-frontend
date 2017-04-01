<template>
  <div>
    <div class="texts" ref="texts">
      <text class="title">Green Music</text>
      <text class="sub-title">Welcome back</text>
      <text class="tir-title">Sign in to continue to Green Muisc</text>
    </div>
    <div class="content" ref="content">
      <div class="form-group">
        <input class="form-group-username form-group-input" type="text" placeholder="Username" v-model="username"
          @focus="focusUsername" @blur="blurUsername"></input>
        <div :class="{'form-group-line': true, 'form-group-line-active': usernameFocus}"></div>
        <input class="form-group-password form-group-input" type="password" placeholder="Password" v-model="password"
          @focus="focusPassword" @blur="blurPassword"></input>
        <div :class="{'form-group-line': true, 'form-group-line-active': passwordFocus}"></div>
        <div class="form-group-btn">
          <text :class="{ 'form-group-btn-text': true, 'form-group-btn-text-active': username && password }" @click="login">登录</text>
        </div>
      </div>
    </div>
    <div class="reg" ref="reg">
      <text class="reg-link">还没有账户？点此注册</text>
    </div>
  </div>
</template>
<script>
 const animation = weex.requireModule('animation')
 const modal = weex.requireModule('modal')
  export default  {
    data() {
      return {
        username: '',
        password: '',
        usernameFocus: false,
        passwordFocus: false,
      }
    },
    mounted() {
      this.moveUpTexts()
    },
    methods: {
      login() {
        modal.toast({ message: `hello ${this.username}`,duration: 1 })
      },
      focusUsername() {
        this.usernameFocus = true
      },
      blurUsername() {
        this.usernameFocus = false
      },
      focusPassword() {
        this.passwordFocus = true
      },
      blurPassword() {
        this.passwordFocus = false
      },
      moveUpTexts() {
        const textsEl = this.$refs.texts
        const contentEl = this.$refs.content
        const regEl = this.$refs.reg
        animation.transition(textsEl, {
          styles: {
            transform: 'translateY(0)'
          },
          duration: 1000,
          timingFunction: 'cubic-bezier(.54,1.04,.86,0.99)',
          delay: 400
        }, function () {
          animation.transition(contentEl, {
            styles: {
              opacity: 1
            },
            duration: 600
          }, function () {
          })
          animation.transition(regEl, {
            styles: {
              opacity: 1
            },
            duration: 600
          }, function () {
          })
        })

      }
    }
  }
</script>
<style scoped>
  .texts {
    padding-left: 80px;
    padding-right: 80px;
    position: absolute;
    top: 0;
    transform: translateY(100%);
  }
  .title {
    color: #009688;
    font-size: 48px;
    line-height: 280px;
  }
  .sub-title {
    font-size: 48px;
    line-height: 64px;
  }
  .tir-title {
    lines: 2;
    font-size: 48px;
    line-height: 64px;
    color: #607D8B;
  }

  .content {
    position: absolute;
    width: 750px;
    left: 0;
    top: 472px;
    padding-top: 40px;
    padding-left: 80px;
    padding-right: 80px;
    opacity: 0;
  }

  .form-group { }

  .form-group-input {
    border-width: 0;
    margin-top: 20px;
    height: 72px;
  }

  .form-group-line {
    width: 0;
    height: 1px;
    background-color: #009688;
    transition: .3s;
  }
  .form-group-line-active{
    width: 100%;
  }

  .form-group-btn-text {
    font-size: 48px;
    line-height: 48px;
    padding-top: 80px;
    color: #BDBDBD;
    transition: .3s;
  }

  .form-group-btn-text-active {
    color: #009688;
  }
  .reg {
    opacity: 0;
    position: absolute;
    bottom: 30px;
    width: 750px;
    left: 0;
  }
  .reg-link {
    text-align: center;
    font-size: 28px;
  }
</style> 