<template>
  <div @click="nav">
    <slot></slot>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  const navigator = weex.requireModule('navigator')
  export default {
    props: {
      url: { required: true }
    },
    methods: {
      nav () {
        modal.toast({message: weex.config.env.platform})
        if (weex.config.env.platform.toLowerCase() == 'web') {
          return this.$router.push({path: this.url})
        }
        navigator.push({
          url: `http://192.168.191.1:8080/dist/${this.url}.weex.js`,
          animated: "true"
        })
      }
    }
  }
</script>
<style>
  nav-link {
    display: flex;
    flex: 1 1 0%;
  }
</style>